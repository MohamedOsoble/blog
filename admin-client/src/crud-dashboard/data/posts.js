import { getPosts, newPost } from "../../utils/Api";

export async function getPostStore(userid) {
  console.log("Get store called");
  const response = await getPosts(userid);
  const posts = response.data;
  console.log(posts);
  return posts;
}

export function setpostsStore(posts) {
  return localStorage.setItem("posts-store", JSON.stringify(posts));
}

export async function getMany({
  paginationModel,
  filterModel,
  sortModel,
  user,
}) {
  const postsStore = await getPostStore(user);

  let filteredPosts = [...postsStore];

  // Apply filters (example only)
  if (filterModel?.items?.length) {
    filterModel.items.forEach(({ field, value, operator }) => {
      if (!field || value == null) {
        return;
      }

      filteredPosts = filteredPosts.filter((post) => {
        const postValue = post[field];

        switch (operator) {
          case "contains":
            return String(postValue)
              .toLowerCase()
              .includes(String(value).toLowerCase());
          case "equals":
            return postValue === value;
          case "startsWith":
            return String(postValue)
              .toLowerCase()
              .startsWith(String(value).toLowerCase());
          case "endsWith":
            return String(postValue)
              .toLowerCase()
              .endsWith(String(value).toLowerCase());
          case ">":
            return postValue > value;
          case "<":
            return postValue < value;
          default:
            return true;
        }
      });
    });
  }

  // Apply sorting
  if (sortModel?.length) {
    filteredPosts.sort((a, b) => {
      for (const { field, sort } of sortModel) {
        if (a[field] < b[field]) {
          return sort === "asc" ? -1 : 1;
        }
        if (a[field] > b[field]) {
          return sort === "asc" ? 1 : -1;
        }
      }
      return 0;
    });
  }

  // Apply pagination
  const start = paginationModel.page * paginationModel.pageSize;
  const end = start + paginationModel.pageSize;
  const paginatedPosts = filteredPosts.slice(start, end);

  return {
    items: paginatedPosts,
    itemCount: filteredPosts.length,
  };
}

export async function getOne(postId, userid) {
  const postsStore = getPostStore(userid);

  const postToShow = postsStore.find((post) => post.id === postId);

  if (!postToShow) {
    throw new Error("post not found");
  }
  return postToShow;
}

export async function createOne(data, userid) {
  //console.log(postsStore);

  const newpost = {
    ...data,
    authorId: userid,
  };

  try {
    console.log(newpost);
    const response = await newPost(newpost);
    console.log(response);
    const postsStore = await getPostStore(userid);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function updateOne(postId, data, userid) {
  const postsStore = await getPostStore(userid);

  let updatedpost = null;

  setpostsStore(
    postsStore.map((post) => {
      if (post.id === postId) {
        updatedpost = { ...post, ...data };
        return updatedpost;
      }
      return post;
    })
  );

  if (!updatedpost) {
    throw new Error("post not found");
  }
  return updatedpost;
}

export async function deleteOne(postId, userid) {
  const postsStore = getPostStore(userid);

  setpostsStore(postsStore.filter((post) => post.id !== postId));
}

// Validation follows the [Standard Schema](https://standardschema.dev/).

export function validate(post) {
  let issues = [];

  if (!post.title) {
    issues = [...issues, { message: "Title is required", path: ["title"] }];
  }

  if (!post.description) {
    issues = [
      ...issues,
      { message: "Description is required", path: ["description"] },
    ];
  }

  if (!post.createDate) {
    issues = [
      ...issues,
      { message: "Create date is required", path: ["createDate"] },
    ];
  }

  if (!post.tag) {
    issues = [...issues, { message: "Tag is required", path: ["tag"] }];
  } else if (!["Educational", "Personal", "Misc"].includes(post.tag)) {
    issues = [
      ...issues,
      {
        message: 'Role must be "Educational", "Personal" or "Misc"',
        path: ["tag"],
      },
    ];
  }

  return { issues };
}
