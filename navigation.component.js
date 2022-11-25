import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EvidenceScreen } from './EvidenceScreen';
import { MessageScreen } from './MessageScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';

// const { Navigator, Screen } = createStackNavigator();
//
// const HomeNavigator = () => (
//     <Navigator screenOptions={{headerShown: false}}>
//         <Screen name='Home' component={MessageScreen}/>
//         <Screen name='Details' component={EvidenceScreen}/>
//     </Navigator>
// );
//
// export const AppNavigator = () => (
//     <NavigationContainer>
//         <HomeNavigator/>
//     </NavigationContainer>
// );

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
    <TabBar
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <Tab title='USERS'/>
        <Tab title='ORDERS'/>
    </TabBar>
);

export const TabNavigator = (props) => (
    <Navigator tabBar={props => <TopTabBar {...props} />}>
        <Screen name='Messages' component={() => <MessageScreen addMessage={props.addMessage}
                                                                addEvidence={props.addEvidence}
                                                                messages={props.messages}
                                                                userSentMessage={props.userSentMessage}/>}/>
        <Screen name='Evidence' component={() => <EvidenceScreen items={props.items}/>}/>
        
    </Navigator>
);

