import types from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_COMMENT:
    console.log(action)
      return state.map(each => {
        if (each.imageId === action.payload.imageId) {
          console.log('yer')
          return { ...each, comments: [...each.comments, action.payload.comment] };
        }
        return { ...each };
      });
    case types.LIKE_IMAGE:
      return state.map(each => {
        if (each.imageId === action.payload.imageId) {
          return { ...each, likes: [...each.likes, action.payload.id] };
        }
        return { ...each };
      });
    case types.UPDATE_IMAGE:
      return state.map(each => {
        if (each.imageId === action.payload.id) {
          return { ...each, name: action.payload.name };
        }
        return { ...each };
      });
    case types.DELETE_IMAGE:
      return state.filter(each => each.imageId !== action.payload.id);
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
