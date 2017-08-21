import React, { Component } from 'react';
import {
  TouchableHighlight,
  Keyboard,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class FloatButton extends Component {
  render() {
    const {color, underColor, bottom, onPress, text} = this.props;
    const styles = {
      button: {
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom,
        right:10,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        }
      },
      text: {
        fontSize: 20,
        color: 'white'
      }
    };
    return (
      <View>
        <TouchableHighlight
          style={styles.button}
          underlayColor={underColor}

          // Event Handler
          onPress={onPress}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

