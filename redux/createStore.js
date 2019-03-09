import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-reactnativeasyncstorage";
import debounce from "redux-storage-decorator-debounce";
import filter from "redux-storage-decorator-filter";
import reducers from "./reducers";
// Todos os middlewares vão juntos
const middleWare = [];
// Adicionando o Redux Thunk
middleWare.push(ReduxThunk);
const wrappedReducer = storage.reducer(reducers);
let engine = createEngine("reducer");
// TODO: filter
engine = debounce(engine, 1000);
//engine = filter(engine, ["configReducer"]);
const reduxStorageMiddleware = storage.createMiddleware(engine);
// Adicionando o reduxStorage
middleWare.push(reduxStorageMiddleware);

const loadStore = storage.createLoader(engine);
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleWare)
  // other store enhancers if any
);
export default function makeStore(callback) {
  let store;
  if (__DEV__) {
    store = createStore(wrappedReducer, enhancer);
  } else {
    store = createStore(wrappedReducer, applyMiddleware(...middleWare));
  }
  //const store = createStoreWithMiddleware(wrappedReducer);
  loadStore(store)
    .then(newState => callback("State loaded", newState))
    .catch(() => callback("Failed to load previous state", null));
  return store;
}
