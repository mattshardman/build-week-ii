import types from "../constants";

export default (state = false, action) => {
  switch (action.type) {
    case types.ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload.comment ]};
    case types.SET_MODAL_IMAGE:
      return action.payload.image;
    default:
      return state;
  }
};
