import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigation from './src/navigation/AppNavigation';
import createStore from './src/redux/store';

const App = () => {
  const {store, persistor} = createStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
