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
import {StatusBar, StyleSheet, View} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export const CustomHeader = ({title}) => {
  return (
    <Header transparent>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Left style={{flex: 1, marginLeft: 10}}>
        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#3078df'}}>
          {title}
        </Text>
      </Left>
      <Body>
        <Title></Title>
      </Body>
      <Right style={{flex: 1, paddingTop: 0}}>
        <View style={[styles.outerCircle]}>
          <Button transparent style={{paddingLeft: 10}}>
            <IonIcons name="md-search" size={28} style={{fontWeight: 'bold'}} />
          </Button>
        </View>
        <View style={styles.outerCircle}>
          <Button transparent style={{paddingLeft: 10}}>
            <AntDesignIcons name="message1" size={20} />
          </Button>
        </View>
      </Right>
    </Header>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  outerCircle: {
    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: '#e4e5ea',
    marginRight: 5,
  },
});
