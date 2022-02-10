import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['AdminReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

let persistor = persistStore(store);
export { store, persistor };

// export default function configureStore() {
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     return createStore(
//         rootReducer,
//         composeEnhancers(applyMiddleware(thunk))
//     );
// }
