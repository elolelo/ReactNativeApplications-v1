import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Forecast from './Forecast';

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "", forecast: null }
   }

   _handleTextChange = event => {
    this.setState({ zip: event.nativeEvent.text });
    };

  render() {
    return (
      <View style={styles.container}>
          <Text>
              You input {this.state.zip}.
          </Text>

          <TextInput style={styles.input}  onSubmitEditing={this._handleTextChange}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
    }
});

export default WeatherProject;
