const INITIAL_STATE = [];

export function InvoicesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_ALL_INVOICES":
      console.log([...action.payload]);
      return [...action.payload];
    default:
      return state;
  }
}
