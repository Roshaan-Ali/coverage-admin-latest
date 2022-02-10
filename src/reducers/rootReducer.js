import { combineReducers } from "redux";
import settings from "./settings";
import UsersReducer from "./UsersReducer";
import { AdminReducer } from "./AdminReducer";
import { HomeReducer } from "./HomeReducer";
import { SubscriptionReducer } from "./SubscriptionReducer";
import { CoverbooksReducer } from "./CoverbooksReducer";
import { InvoicesReducer } from "./InvoicesReducer";
export default combineReducers({
  AdminReducer,
  settings,
  UsersReducer,
  HomeReducer,
  SubscriptionReducer,
  CoverbooksReducer,
  InvoicesReducer,
});
