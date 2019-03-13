import types from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case types.LIKE_IMAGE:
      return state.map(each => {
        if (each.imageId === action.payload.imageId) {
          return { ...each, likes: [...each.likes, action.payload.id] };
        }
        return { ...each };
      });
    case types.FETCH_USER_IMAGES:
      return action.payload.photos;
    case types.FETCH_IMAGES:
      return action.payload.photos;
    case types.FETCH_SPECIFIC_IMAGES:
      return action.payload.photos;
    default:
      return state;
  }
};
