const INITIAL_STATE = {};

export function HomeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_HOME_DATA":
        console.log({...action.payload})
      return {...action.payload};
    default:
      return state;
  }
}
