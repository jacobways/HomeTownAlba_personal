import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import jobSeeker from "./jobSeeker_reducer";

const persistConfig = {
  key: "root",
  storage,
}; // 추가

const rootReducer = combineReducers({
  jobSeeker,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
