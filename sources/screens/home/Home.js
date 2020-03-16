import React from 'react';
import {Container, Content, Item, Input} from 'native-base';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {CustomHeader} from '../../components/header/CustomHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
var width = Dimensions.get('window').width;
export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <CustomHeader title="facebook" />
          <View>
            <View>
              <Item style={{width: width, marginTop: 10}}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginLeft: 10,
                    marginRight: 5,
                  }}
                  source={require('../../img/profile.png')}
                />
                <Input
                  // placeholderStyle={{fontWeight: '0'}}
                  placeholder="What's on your mind?"
                  placeholderTextColor="#000"
                />
              </Item>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
