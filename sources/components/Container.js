import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export class Container extends Component {
  render() {
    return <SafeAreaView>{this.props.children}</SafeAreaView>;
  }
}

export default Container;
