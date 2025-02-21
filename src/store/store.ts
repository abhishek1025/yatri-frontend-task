import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteBlogsReducer from "./feature/favorite-blogs/favoriteBlogsSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Combing reducers
const rootReducer = combineReducers({
  favoriteBlogs: favoriteBlogsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
