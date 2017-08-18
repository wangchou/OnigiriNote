import React, { Component } from 'react';
import moment from 'moment';
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {setData} from '../actions/pageData';

@connect((state, props) => ({
  pageData: state.pageData[props.dataKey] || "",
  isOnSwipe: state.ui.isOnSwipe
}), {
  setData
})
export default class BookPage extends Component {
  constructor(props) {
     super(props);
     this.isFocused = false;
     this.state = {text: props.pageData};
  }

  componentDidMount() {
     this.isFocused = false;
  }

  componentWillReceiveProps(props) {
    this.setState({text: props.pageData});
  }

  render() {
    const { title, dataKey, setData, isOnSwipe } = this.props;
    return (
      <View style={styles.pageView}>
        <Text style={styles.pageTitle}>
          {title}
        </Text>
        <TextInput
          ref={textInput => this.textInput = textInput}
          multiline
          style={styles.pageContent}
          onChangeText={(text) => {
            setData(dataKey, text);
            this.setState({text});
          }}
          value={this.state.text}
          editable={!isOnSwipe || this.isFocused}
          onEndEditing={() => {this.isFocused = false}}
          onFocus={e => {
            this.isFocused = true;
            this.textInput.measure((ox, oy, width, height, px, py) => {
              focusedInputOY = oy;
              focusedInputPY = py;
              focusedInputHeight = height;
            });
          }}
        />
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const fontSize = Math.min(windowWidth, windowHeight) / 20;
const pageHeight = fontSize * 17;
const titleHeight = 22;
const semiBold = "600";
const light="300";
const styles = StyleSheet.create({
  pageView: {
    width: windowWidth,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  pageTitle: {
    height: titleHeight,
    fontFamily: 'PingFang TC',
    fontSize,
    fontWeight: semiBold,
  },
  pageContent: {
    height: pageHeight - titleHeight - 15,
    textAlign: 'justify',
    marginTop: 5,
    borderColor: 'rgba(200, 200, 200, 1.0)',
    fontFamily: 'PingFang TC',
    fontSize,
    fontWeight: light,
    color: 'rgba(32, 32, 32, 1.0)',
  }
});
