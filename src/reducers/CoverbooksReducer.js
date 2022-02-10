const INITIAL_STATE = [];

export function CoverbooksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_ALL_COVERBOOKS":
      return [...action.payload];
    default:
      return state;
  }
}
