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
                headerShadowVisible: true,
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen name={HOME_SCREEN} options={{
                title: 'Home'
            }} component={HomeScreen} />
            <Stack.Screen name={DETAILS_SCREEN} options={{
                title: 'Details'
            }} component={DetailsScreen} />

        </Stack.Navigator>
    );
};

export default CustomStack;
