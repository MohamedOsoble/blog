import axios from "axios";

const API = "http://localhost:3000";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Ensure Axios includes cookies in the request
};

export async function Login(formdata) {
  const loginAPI = API + "/users/login";
  const data = {
    username: formdata.username,
    password: formdata.password,
  };
  const response = await axios.post(loginAPI, data, options);
  return response;
}

export async function Logout() {
  const logoutAPI = API + "/users/logout";
  const response = await axios.get(logoutAPI, options);
  return response;
}

export async function isAuthenticated() {
  const auth = await axios.get(API + "/users/isauthenticated", {
    withCredentials: true,
  });
  return auth;
}

export async function userExists(username) {
  const response = await axios.get(API + "/users/get/byname/" + username);
  if (response.data.success === true) {
    return true;
  } else {
    return false;
  }
}

export async function register(formdata) {
  const registerAPI = API + "/users/register";
  const response = await axios.post(registerAPI, formdata, options);
  return response;
}

export async function getPosts(userid) {
  const postAPI = API + "/posts/authors/" + userid;
  const response = await axios.get(postAPI, options);
  return response;
}

export async function newPost(postData) {
  const postAPI = API + "/posts";
  const response = await axios.post(postAPI, postData, options);
  return response;
}

export async function updatePost(postData) {
  const postAPI = API + "/posts/";
  const response = await axios.put(postAPI, postData, options);
  return response;
}
