import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Head from '../components/header';
import { challenges } from '../config/challenges';

class Friends extends Component {
    render() {
        return (
            <ScrollView>
                <Text>Friends</Text>
            </ScrollView>  
        )
    }
}

export default Friends;