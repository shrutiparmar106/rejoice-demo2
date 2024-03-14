import {legacy_createStore as createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import appReducer from '../reducers/appReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  app: appReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
