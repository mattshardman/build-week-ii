import types from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_USER_IMAGES:
      return action.payload.photos;
    case types.UPDATE_IMAGE:
      return state.map(each => {
        if (each.imageId === action.payload.id) {
          return { ...each, name: action.payload.name };
        }
        return { ...each };
      });
    case types.DELETE_IMAGE:
      return state.filter(each => each.imageId !== action.payload.id);
    default:
      return state;
  }
};
