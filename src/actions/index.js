import _ from "lodash";
import fetchPosts from "../apis/fetchPosts";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(postsCreate());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const postsCreate = () => async (dispatch) => {
  const response = await fetchPosts.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await fetchPosts.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
