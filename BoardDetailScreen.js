import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { List, ListItem, Text, Card, Button } from 'react-native-elements';
import firebase from '../Firebase';

class BoardDetailScreen extends Component {
    static navigationOptions = {
        title: 'Board Details',
      };
      
      constructor() {
        super();
        this.state = {
          isLoading: true,
          board: {},
          key: ''
        };
      }
      
      componentDidMount() {
        const { navigation } = this.props;
        const ref = firebase.firestore().collection('boards').doc(JSON.parse(navigation.getParam('boardkey')));
        ref.get().then((doc) => {
          if (doc.exists) {
            this.setState({
              board: doc.data(),
              key: doc.id,
              isLoading: false
            });
          } else {
            console.log("No such document!");
          }
        });
      }
      
      deleteBoard(key) {
        const { navigation } = this.props;
        this.setState({
          isLoading: true
        });
        firebase.firestore().collection('boards').doc(key).delete().then(() => {
          console.log("Document successfully deleted!");
          this.setState({
            isLoading: false
          });
          navigation.navigate('Board');
        }).catch((error) => {
          console.error("Error removing document: ", error);
          this.setState({
            isLoading: false
          });
        });
      }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Board Details</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('BoardDetails')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Board')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    subContainer: {
      flex: 1,
      paddingBottom: 20,
      borderBottomWidth: 2,
      borderBottomColor: '#CCCCCC',
    },
    activity: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    detailButton: {
      marginTop: 10
    }
  })

export default BoardDetailScreen;