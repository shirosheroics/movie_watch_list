import * as actionTypes from "./actionTypes";
export const add_movie = movie => {
  return {
    type: actionTypes.ADD_MOVIE,
    payload: movie
  };
};
export const delete_movie = movie => {
  return {
    type: actionTypes.DELETE_MOVIE,
    payload: movie
  };
};
export const change_movie_status = movie => {
  return {
    type: actionTypes.CHANGE_STATUS,
    payload: movie
  };
};
