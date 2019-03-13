import types from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case types.SEARCH:
      return state.map(each => {
        const nameMatch = each.name.toLowerCase().includes(action.payload.input.toLowerCase());
        const userMatch = each.user.toLowerCase().includes(action.payload.input.toLowerCase());
        if (!nameMatch && !userMatch) {
          return { ...each, display: false };
        }
        return { ...each, display: true };
      });
    case types.ADD_COMMENT:
      return state.map(each => {
        if (each.imageId === action.payload.imageId) {
          return {
            ...each,
            comments: [...each.comments, action.payload.comment]
          };
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
    case types.FETCH_IMAGES:
      return action.payload.photos.map(each => ({ ...each, display: true }));
    case types.FETCH_SPECIFIC_IMAGES:
      return action.payload.photos.map(each => ({ ...each, display: true }));
    default:
      return state;
  }
};
