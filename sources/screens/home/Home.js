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
import IonIcons from 'react-native-vector-icons/Ionicons';
import OcticonsIcon from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native-gesture-handler';

var width = Dimensions.get('window').width;
export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <CustomHeader title="facebook" />
          <View>
            <View>
              <Item style={{width: width, marginTop: 10, height: 65}}>
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
            <View style={{marginTop: 10, paddingBottom: 10}}>
              <View style={styles.container}>
                <View style={styles.item}>
                  <View style={styles.container}>
                    <View style={styles.subItemFirst}>
                      <IonIcons name="ios-videocam" size={24} color="#dd4050" />
                    </View>
                    <View style={styles.subItemSecond}>
                      <Text>Live</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.item}>
                  <View style={styles.container}>
                    <View style={styles.subItemFirst}>
                      <IonIcons name="ios-images" size={24} color="#93bb5c" />
                    </View>
                    <View style={styles.subItemSecond}>
                      <Text>Photo</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.item}>
                  <View style={styles.container}>
                    <View style={styles.subItemFirst}>
                      <OcticonsIcon
                        name="location-pin"
                        size={24}
                        color="#e13770"
                      />
                    </View>
                    <View style={styles.subItemSecond}>
                      <Text>Check In</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{backgroundColor: '#c9cbd0', height: 10}}></View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'center', // if you want to fill rows left to right
  },
  subItemFirst: {
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  subItemSecond: {
    marginLeft: 4,
    width: '46%',
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  item: {
    width: '33.3%', // is 50% of container width
  },
});
