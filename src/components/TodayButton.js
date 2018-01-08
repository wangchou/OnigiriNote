import React, { Component } from 'react';
import FloatButton from './FloatButton';
import {connect} from 'react-redux';
import {gotoTodayPage} from '../actions';

@connect(state => ({
  isKeyboardShow: state.ui.isKeyboardShow,
}), {
  gotoTodayPage
})
export default class TodayButton extends Component {
  render() {
    if(this.props.isKeyboardShow) return null;
    return (
      <FloatButton
        text={'今'}
        color={'orange'}
        underColor={'darkorange'}
        onPress={this.props.gotoTodayPage}
        bottom={10}
      />
    );
  }
}

