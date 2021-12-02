export const initialState = {
  searchResultMovies: null,
};

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_RESULT":
      console.log(action.movies);
      return {
        ...state,
        searchResultMovies: action.movies,
      };
    default:
      return state;
  }
};

export default reducer;
