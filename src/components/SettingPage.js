import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native'
import {
  YEAR_BOOK_ID,
  MONTH_BOOK_ID,
  WEEK_BOOK_ID,
  DAY_BOOK_ID,
  textFont,
  checkboxFont,
  SETTING,
  CLOSE,
  RESET_ALL,
  FONT_SIZE,
  SETTING_PAGE,
} from 'constants'
import I18n, { getNumberOfLineDescriptonI18n } from 'i18n'
import {
  setFontScale,
  setBookNumOfLines,
  resetSettings,
  toggleIsSettingPageFolded,
} from 'actions'
import SettingBar from 'components/SettingBar'
import {
  windowWidth,
  isIPhoneX,
} from 'utils'


@connect(state => ({
  fontScale: state.setting.fontScale,
  numberOfLines: state.setting.numberOfLines,
  isSettingPageFolded: state.ui.isSettingPageFolded,
  today: state.ui.today, // if go to next day, the title will be rerendered
}), {
  setFontScale,
  setBookNumOfLines,
  resetSettings,
  toggleIsSettingPageFolded,
})
export default class SettingPage extends Component {
  render() {
    const {
      fontScale,
      numberOfLines,
      isSettingPageFolded,
    } = this.props

    const numberOfLinesSetting = [
      YEAR_BOOK_ID,
      MONTH_BOOK_ID,
      WEEK_BOOK_ID,
      DAY_BOOK_ID,
    ].map(bookId => (
      <SettingBar
        key={bookId}
        text={getNumberOfLineDescriptonI18n(bookId)}
        onMinusClick={() => this.props.setBookNumOfLines(bookId, numberOfLines[bookId] - 1)}
        onPlusClick={() => this.props.setBookNumOfLines(bookId, numberOfLines[bookId] + 1)}
      />
    ))

    return (
      <View>
        <TouchableOpacity
          style={isSettingPageFolded ? styles.whiteFoldButton : styles.foldButton}
          onPress={this.props.toggleIsSettingPageFolded}
        >
          <Text style={styles.text}>
            {`${I18n.t(SETTING_PAGE)} `}
          </Text>
          <View style={styles.settingIcon}>
            <Text style={styles.iconFont}>
              {isSettingPageFolded ? SETTING : CLOSE}
            </Text>
          </View>
        </TouchableOpacity>
        {isSettingPageFolded ? null :
          <View style={styles.container}>

            <SettingBar
              text={I18n.t(FONT_SIZE)}
              onMinusClick={() => this.props.setFontScale(fontScale / 1.1)}
              onPlusClick={() => this.props.setFontScale(fontScale * 1.1)}
            />
            {numberOfLinesSetting}
            <TouchableOpacity
              style={styles.resetButton}
              onPress={this.props.resetSettings}
            >
              <Text style={styles.text}
              >
                {I18n.t(RESET_ALL)}
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

const foldButtonHeight = 35 + (isIPhoneX() ? 30 : 0)
const foldButtonPaddingTop = (isIPhoneX() ? 30 : 0)
const settingIconTop = (isIPhoneX() ? 30 : 0) + 8
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    backgroundColor: 'rgba(155, 155, 155, 0.3)',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  foldButton: {
    width: windowWidth,
    height: foldButtonHeight,
    backgroundColor: 'rgba(192, 192, 192, 1)',
    borderColor: 'rgba(155, 155, 155, 1)',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: foldButtonPaddingTop,
  },
  whiteFoldButton: {
    width: windowWidth,
    height: foldButtonHeight,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: foldButtonPaddingTop,
  },
  text: {
    fontSize: 20,
    fontFamily: textFont,
  },
  iconFont: {
    fontSize: 20,
    fontFamily: checkboxFont,
  },
  settingIcon: {
    position: 'absolute',
    right: 20,
    top: settingIconTop,
  },
  resetButton: {
    width: windowWidth - 40,
    height: 40,
    marginTop: 5,
    backgroundColor: 'rgba(192, 192, 192, 1)',
    borderColor: 'rgba(180, 180, 180, 1)',
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
