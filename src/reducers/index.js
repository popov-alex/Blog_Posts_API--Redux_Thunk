import { combineReducers } from "redux";

const postsReducer = (posts = [], newPosts) => {
  if (newPosts.type === "FETCH_POSTS") {
    return newPosts.payload;
  }
  return posts;
};

const userReducer = (user = [], newUser) => {
  switch (newUser.type) {
    case "FETCH_USER":
      return [...user, newUser.payload];
    default:
      return user;
  }
};

export default combineReducers({ posts: postsReducer, users: userReducer });
