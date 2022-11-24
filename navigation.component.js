import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EvidenceScreen } from './EvidenceScreen';
import { MessageScreen } from './MessageScreen';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Home' component={MessageScreen}/>
        <Screen name='Details' component={EvidenceScreen}/>
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
);
