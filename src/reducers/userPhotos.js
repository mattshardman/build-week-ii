import types from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_USER_IMAGES:
      return action.payload.photos;
    default:
      return state;
  }
};
