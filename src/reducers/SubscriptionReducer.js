const INITIAL_STATE = [];

export function SubscriptionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_ALL_SUBSCRIPTION":
      return [...action.payload];
    default:
      return state;
  }
}
