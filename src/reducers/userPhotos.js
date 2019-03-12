import types from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_USER_IMAGES:
      return action.payload.photos;
    case types.DELETE_IMAGE:
      console.log('delete')
      return state.filter(each => each.imageId !== action.payload.id);
    default:
      return state;
  }
};
