import types from "../constants";

export default (state = false, action) => {
  switch (action.type) {
    case types.SET_MODAL_IMAGE:
      return action.payload.image;
    default:
      return state;
  }
};
