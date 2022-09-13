import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import CustomStack from './src/navigation/CustomStack';

const App = () => {
  return (
    <NavigationContainer>
      <CustomStack />
    </NavigationContainer>
  );
};


export default App;
