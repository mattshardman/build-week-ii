import types from "../constants";

export default (state = false, action) => {
  switch (action.type) {
    case types.LOADING:
      return true;
    case types.FINISHED_LOADING:
      return false;
    default:
      return state;
  }
};
