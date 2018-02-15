import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../screens/Login';
import Feed from '../screens/Home';
import Friends from '../screens/Friends';
import Profile from '../screens/Profile';
import Rewards from '../screens/Rewards';
import ChallengeDetail from '../screens/ChallengeDetail';

export const FeedStack = StackNavigator({
    Home: {
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
        },
    },
    ChallengeDetails: {
        screen: ChallengeDetail,
        navigationOptions: ({ navigation }) => ({
            title: 'test',
        })
    }
})

export const Tabs = TabNavigator({
    Home: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor}/> 
        }
    },
    Friends: {
        screen: Friends,
        navigationOptions: {
            tabBarLabel: 'Friends',
            tabBarIcon: ({ tintColor }) => <Icon name="users" size={25} color={tintColor}/>
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
    Login: {
        screen: Login
    },
    Tabs: {
        screen: Tabs
    }
})