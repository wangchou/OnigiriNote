import React, { Component } from 'react'
import {
  Keyboard,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import I18n from 'i18n'
import {
  DONE_BUTTON,
  EMPTY_CHECKBOX1,
  EMPTY_CHECKBOX2,
  emptyCheckboxColor1,
  emptyCheckboxColor2,
} from 'src/constants'
import {
  insertText,
} from 'actions'

export const floatEditBarHeight = 40
const windowWidth = Dimensions.get('window').width

@connect(state => ({
  isKeyboardShow: state.ui.isKeyboardShow,
  keyboardHeight: state.ui.keyboardHeight,
}), {
  insertText,
})
export default class FloatEditBar extends Component {
  render() {
    const {
      isKeyboardShow,
      keyboardHeight,
    } = this.props
    if (!isKeyboardShow) return null
    const styles = {
      bar: {
        width: windowWidth,
        height: floatEditBarHeight,

        position: 'absolute',
        bottom: keyboardHeight - floatEditBarHeight,
        right: 0,

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        backgroundColor: 'rgba(240, 240, 240, 1)',
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: 'rgba(155, 155, 155, 0.2)',
      },
      touchable: {
        flex: 1,
      },
      text: {
        fontSize: 20,
        color: 'rgba(125, 125, 125, 1)',
        textAlign: 'center',
      },
    }

    const fontFamily = 'checkbox'

    return (
      <View style={styles.bar}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.props.insertText(EMPTY_CHECKBOX1)}
        >
          <Text
            style={{ ...styles.text, fontFamily, color: emptyCheckboxColor1 }}
          >
            {EMPTY_CHECKBOX1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.props.insertText(EMPTY_CHECKBOX2)}
        >
          <Text
            style={{ ...styles.text, fontFamily, color: emptyCheckboxColor2 }}
          >
            {EMPTY_CHECKBOX2}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchable}
          onPress={Keyboard.dismiss}
        >
          <Text
            style={{ ...styles.text, fontFamily: 'PingFang TC' }}
          >{I18n.t(DONE_BUTTON)}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

