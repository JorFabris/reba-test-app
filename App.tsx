import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import CustomStack from './src/navigation/CustomStack';
import reducers from './src/reducers/index';
import Toast from 'react-native-toast-message';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CustomStack />
        <Toast position="top"/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
