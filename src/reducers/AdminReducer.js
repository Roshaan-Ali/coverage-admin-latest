const INITIAL_STATE = {
  isUserLogin: false,
};

export function AdminReducer(state = INITIAL_STATE, action) {
  // export default AdminReducer = (state = INITIAL_STATE, action) => {
//   console.log(action, ";;;;;;;;;;;;");
  switch (action.type) {
    case "ADMIN_LOGIN":
      return { isUserLogin: true, ...action.payload };
    case "ADMIN_LOGOUT":
      return { isUserLogin: false };
    // case USER_LOGOUT:
    //   return { ...state, ...action.payload };
    // case UPDATE_PROFILE:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    default:
      return state;
  }
}
