import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import CustomStack from './src/navigation/CustomStack';
import rootReducers from './src/reducers/index';

const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CustomStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
