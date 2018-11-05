import * as actionTypes from "../actions/actionTypes";
const initialState = {
  movies: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      };
    case actionTypes.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(a => a !== action.payload)
      };
    case actionTypes.CHANGE_STATUS:
      return {
        ...state,
        movies: state.movies.filter(a => a !== action.payload).concat({
          title: action.payload.title,
          status: !action.payload.status
        })
      };

    default:
      return state;
  }
};

export default reducer;
