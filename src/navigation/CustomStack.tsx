import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { DETAILS_SCREEN, HOME_SCREEN } from './Routes';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';


const Stack = createStackNavigator();

const CustomStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={HOME_SCREEN}
            screenOptions={{
            }}>
            <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
            <Stack.Screen name={DETAILS_SCREEN} component={DetailsScreen} />

        </Stack.Navigator>
    );
};

export default CustomStack;
