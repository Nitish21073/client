import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const stripe = require('stripe')('sk_test_51MVAcFSI2AWD7BxS5hKLj64ImIqJo6jaWufudHeOpAa4QVqM3mhWooEHAakusmeFXN0LGAm6EGug7fa6zYsQnq9J007mJyJrI7');

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);