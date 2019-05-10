import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import WeatherProject from "./WeatherProject";

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "" };
   }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
              You input {this.state.zip}.
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default WeatherProject;
