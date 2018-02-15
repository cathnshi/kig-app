import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    ListView,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';
import { challenges } from '../config/challenges';
import ProgressBar from '../components/progressBar';

class Feed extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
          isLoading: true,
          data: challenges
        }
      }

      onDetailChallenge = () => {
          this.props.navigation.navigate('ChallengeDetails');
      }
    
      componentDidMount() {
        var self = this;
        setTimeout(function () {
            self.setState({ isLoading: false });
        }, 1);
      }
      render() {
        return (
            this.state.isLoading ? 
            <View>
                <ProgressBar/>
            </View> :
          <View> 
          <FlatList 
            data={this.state.data}
            renderItem={({ item: rowData }) =>{
              return(
                <Card
                  title={null}
                  containerStyle={styles.card}
                >
                <TouchableOpacity onPress={() => this.onDetailChallenge()}>
                <Text style={styles.titleText}>{rowData.title}</Text>
                <Text style={styles.coinText}>{rowData.coins}</Text>
                </TouchableOpacity>
                </Card>
              )
            }}
            keyExtractor={(item, index) => index}
          />
          </View>
        )
      }
}

const styles = StyleSheet.create({
    card: {
        height: 162,
        marginBottom: 10,
    },
    titleText: {
        fontSize: 34,
        marginTop: 40,
        color: '#60D5C7',
    },
    coinText: {
        color: '#EAE466',
        fontSize: 18,

    }
})



export default Feed;