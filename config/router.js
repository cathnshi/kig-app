import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from '../screens/Home';
import Friends from '../screens/Friends';
import Profile from '../screens/Profile';
import Rewards from '../screens/Rewards';

export const Tabs = TabNavigator({
    Friends: {
        screen: Friends,
        navigationOptions: {
            tabBarLabel: 'Friends',
            tabBarIcon: ({ tintColor }) => <Icon name="users" size={25} color={tintColor}/>
        }
    },
    Home: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor}/> 
        }
    },
    Rewards: {
        screen: Rewards,
        navigationOptions: {
            tabBarLabel: 'Rewards',
            tabBarIcon: ({ tintColor }) => <Icon name="trophy" size={25} color={tintColor}/>
        }
    }
});

export const Root = StackNavigator ({
    Tabs: {
        screen: Tabs
    }
})