import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { campersApi } from './campers/apis';
import favoriresReducer from './favorites/slice';

const storageUnknown = storage as unknown;
const actualStorage =
  storageUnknown &&
  typeof storageUnknown === 'object' &&
  'default' in storageUnknown
    ? (storageUnknown as { default: typeof storage }).default
    : storage;

const favPersistConfig = {
  key: 'favorites',
  storage: actualStorage,
};

const rootReducer = combineReducers({
  favorites: persistReducer(favPersistConfig, favoriresReducer),
  [campersApi.reducerPath]: campersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(campersApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
