export const initialState = {
  searchResultMovies: null,
  listImagesLink: null,
};

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_RESULT":
      return {
        ...state,
        searchResultMovies: action.movies,
      };
    case "ADD_Images":
      return {
        ...state,
        listImagesLink: action.listOfImages,
      };
    default:
      return state;
  }
};

export default reducer;
