import types from "../constants";

export default (state = false, action) => {
  switch (action.type) {
    case types.FETCH_IMAGES:
    case types.FETCH_SPECIFIC_IMAGES:
        return false;
    case types.UPLOADED_IMAGE:
      return true;
    default:
      return state;
  }
};
