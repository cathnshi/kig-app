import React from 'react';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { HomeScreen, ChallengeDetailScreen } from './screens';
import firebaseConfig from './utils/firebase.json';


const firebaseInit = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.challengesRef = firebaseInit.database().ref();
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource
    };
  }

  componentDidMount() {
    this.listenForChallenges(this.challengesRef);
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource}
        />
      </View>
    );
  }

  listenForChallenges(challengesRef) {
    challengesRef.on('value', (snap) => {
      let challenges = [];
      snap.forEach((child) => {
        challenges.push({
          title: child.val().title,
        })
      })
    })
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
