import {configureStore, combineReducers, Reducer, AnyAction} from "@reduxjs/toolkit"

import {persistStore, persistReducer, PersistConfig} from "redux-persist"
import storage from "redux-persist/lib/storage"
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"

import authSlice from "./slices/authSlice"
import breadcrumbsSlice from "./slices/breadcrumbsSlice"
import categoriesSlice from "./slices/categoriesSlice"
import integrationSlice from "./slices/integrationSlice"
import notificationSlice from "./slices/notificationSlice"
import productsSlice from "./slices/productsSlice"
import sidebarSlice from "./slices/sidebarSlice"
import userSlice from "./slices/userSlice"
import warehousesSlice from "./slices/warehousesSlice"

const reducer = combineReducers({
  auth: authSlice,
  breadcrumbs: breadcrumbsSlice,
  categories: categoriesSlice,
  integration: integrationSlice,
  notification: notificationSlice,
  products: productsSlice,
  sidebar: sidebarSlice,
  user: userSlice,
  warehouses: warehousesSlice,
})

type State = ReturnType<typeof reducer>

const rootReducer: Reducer<State, AnyAction> = (state, action) => {
  if (action.type === "auth/logoutAction") {
    state = {} as State
  }
  return reducer(state, action)
}

const persistConfig: PersistConfig<State> = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["breadcrumbs", "notification", "sidebar", "categories"],
}

const pReducer = persistReducer<State, AnyAction>(persistConfig, rootReducer)

const store = configureStore({
  reducer: pReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
export default store
