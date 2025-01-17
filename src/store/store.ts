import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import localStorage from "redux-persist/lib/storage";
import authSlice from "./features/auth/authSlice";
import utilitySlice from "./features/utilities/utilitySlice";
// import { ruleSlice } from './features/nrl/ruleSlice'
// import { enableMapSet } from 'immer';


const persistConfig = {
  key: "root",
  storage:localStorage,
  whitelist:["auth","utilities"],
};
// enableMapSet();
// Combining reducers
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  utilities: utilitySlice.reducer,
});

// Persist configuration


const persistedReducer = persistReducer(persistConfig, rootReducer);
    export const makeStore = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE","auth/userOtpVerify"],
          },
        }),
    });
  
// Persistor for persisting store
export const persistor = persistStore(makeStore);


// Infer the type of makeStore
export type AppStore = typeof makeStore;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppstoreDispatch = AppStore["dispatch"];
