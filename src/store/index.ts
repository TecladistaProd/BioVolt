import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // whitelist: [],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
});

export default store;

export const persistor = persistStore(store);
