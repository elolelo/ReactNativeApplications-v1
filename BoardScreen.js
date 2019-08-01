import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View} from 'react-native';
import { Button, List, ListItem} from 'react-native-elements';
import firebase from '../Firebase';

class BoardScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerRight: (
            <Button
              buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
              icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
              onPress={() => { navigation.push('AddBoard') }}
            >
            title: "Board List"
            </Button>
          ),
        };
      };

    constructor() {
        super();
        this.ref = firebase.firestore().collection('boards');
        this.unsubscribe = null;
        this.state = {
          isLoading: true,
          boards: []
        };
      }

      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }

      // defining a function that will extract a state from some place
      onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
          const { title, description, author } = doc.data();
          boards.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title,
            description,
            author,
          });
        });
        this.setState({
          boards,
          isLoading: false,
       });
      }

      render() {
        if(this.state.isLoading){
          return(
            <ScrollView style={styles.activity2}>
              <ActivityIndicator size="large" color="#0000ff"/>
            </ScrollView>
          )
        }
        return (
          <ScrollView style={styles.container}>
            <List>
              {
                this.state.boards.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={{name: 'book', type: 'font-awesome'}}
                    onPress={() => {
                      this.props.navigation.navigate('BoardDetails', {
                        boardkey: `${JSON.stringify(item.key)}`,
                      });
                    }}
                  />
                ))
              }
            </List>
          </ScrollView>
        );
      }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingBottom: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
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
    activity2: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
     
    }
  })

export default BoardScreen;