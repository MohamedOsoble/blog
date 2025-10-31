import { getPosts } from "../../utils/Api";

export async function getPostStore(userid) {
  const response = await getPosts(userid);
  const posts = response.data;
  posts.forEach((post) => {
    console.log(post);
  });
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
  const postsStore = getPostStore(userid);

  const newpost = {
    id: postsStore.reduce((max, post) => Math.max(max, post.id), 0) + 1,
    ...data,
  };

  setpostsStore([...postsStore, newpost]);

  return newpost;
}

export async function updateOne(postId, data, userid) {
  const postsStore = getPostStore(userid);

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

  if (!post.name) {
    issues = [...issues, { message: "Name is required", path: ["name"] }];
  }

  if (!post.age) {
    issues = [...issues, { message: "Age is required", path: ["age"] }];
  } else if (post.age < 18) {
    issues = [...issues, { message: "Age must be at least 18", path: ["age"] }];
  }

  if (!post.joinDate) {
    issues = [
      ...issues,
      { message: "Join date is required", path: ["joinDate"] },
    ];
  }

  if (!post.role) {
    issues = [...issues, { message: "Role is required", path: ["role"] }];
  } else if (!["Market", "Finance", "Development"].includes(post.role)) {
    issues = [
      ...issues,
      {
        message: 'Role must be "Market", "Finance" or "Development"',
        path: ["role"],
      },
    ];
  }

  return { issues };
}
