import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native'
import ONTextInput from './ONTextInput'

export default (props) => {
  const { title, dataKey, inputRef } = props

  return (
    <View style={styles.pageView}>
      <Text style={styles.pageTitle}>
        {title}
      </Text>
      <ONTextInput dataKey={dataKey} inputRef={inputRef} />
    </View>
  )
}

// Component Styles
const windowWidth = Dimensions.get('window').width
const fontSize = 16
const titleHeight = 20
const semiBold = '600'
const pageSeparatorWidth = 20
const styles = StyleSheet.create({
  pageView: {
    width: windowWidth + pageSeparatorWidth,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'rgba(155, 155, 155, 0.3)',
    borderRightWidth: 20,
  },
  pageTitle: {
    height: titleHeight,
    fontFamily: 'PingFang TC',
    fontSize,
    fontWeight: semiBold,
  },
})
