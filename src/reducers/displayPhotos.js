import types from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_IMAGES:
      return action.payload.photos;
    case types.FETCH_SPECIFIC_IMAGES:
      return action.payload.photos;
    default:
      return state;
  }
};
