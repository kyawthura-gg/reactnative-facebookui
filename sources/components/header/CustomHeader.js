import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
} from 'native-base';
import {StatusBar} from 'react-native';
export const CustomHeader = ({title}) => {
  return (
    <Header transparent>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Left style={{flex: 1, marginLeft: 10}}>
        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#3b5998'}}>
          {title}
        </Text>
      </Left>
      <Body>
        <Title></Title>
      </Body>
      <Right style={{flex: 1}}>
        <Button transparent></Button>
      </Right>
    </Header>
  );
};
