import {
  // combineReducers,
  configureStore
} from '@reduxjs/toolkit';
import filtersReducer from './filters/slice';
import campersReducer from './campers/slice'

// localStorage
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//     tasks: tasksReducer,
//     filters: filtersReducer,
// })

const rootReducer = {
  campers: campersReducer,
  filters: filtersReducer,
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const persistor = persistStore(store);
