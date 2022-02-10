const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "USERS_LIST":
      return action.payload;
    default:
      return state;
  }
};
