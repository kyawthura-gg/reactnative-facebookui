import React from 'react';
import {Item, Input} from 'native-base';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {CustomHeader} from '../../components/header/CustomHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcons from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

var width = Dimensions.get('window').width;
export default class Home extends React.Component {
  render() {
    return (
      // <SafeAreaView style={styles.mainContainer}>
      <View>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <CustomHeader title="facebook" />
          <View>
            <View>
              <Item style={{width: width, marginTop: 10, height: 65}}>
                <Image
                  style={styles.profileImage}
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
                      <EntypoIcon
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
            <View style={styles.gap}></View>
            <View style={styles.myDayContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View>
                  <Image
                    style={styles.myDayImage}
                    source={require('../../img/profile.png')}
                  />
                  <View style={styles.myDayProfilePosition}>
                    <View style={styles.dayPlusBackGround}>
                      <EntypoIcon name="plus" color="#3078e9" size={30} />
                    </View>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.myDayImage}
                    source={require('../../img/profile-5.jpg')}
                  />
                  <View style={styles.myDayProfilePosition}>
                    <View style={styles.myDayProfileBackGround}>
                      <Image
                        style={styles.dayProfile}
                        source={require('../../img/profile-1.jpg')}
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.myDayImage}
                    source={require('../../img/profile-8.jpg')}
                  />
                  <View style={styles.myDayProfilePosition}>
                    <View style={styles.myDayProfileBackGround}>
                      <Image
                        style={styles.dayProfile}
                        source={require('../../img/profile-3.jpg')}
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.myDayImage}
                    source={require('../../img/profile-2.jpg')}
                  />
                  <View style={styles.myDayProfilePosition}>
                    <View style={styles.myDayProfileBackGround}>
                      <Image
                        style={styles.dayProfile}
                        source={require('../../img/profile-6.jpg')}
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.myDayImage}
                    source={require('../../img/profile-4.jpg')}
                  />
                  <View style={styles.myDayProfilePosition}>
                    <View style={styles.myDayProfileBackGround}>
                      <Image
                        style={styles.dayProfile}
                        source={require('../../img/profile-7.jpg')}
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.gap}></View>
            <View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  <View style={{width: '14%'}}>
                    <Image
                      source={require('../../img/profile.png')}
                      style={styles.profileImage}
                    />
                  </View>
                  <View style={{width: '40%'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '500',
                        marginBottom: 3,
                      }}>
                      Kanhaiya Aryal
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={{fontSize: 12}}>2 hrs . </Text>
                      <FontAwesomeIcon name="globe" color="#66686c" size={16} />
                    </View>
                  </View>
                  <View
                    style={{
                      width: '40%',
                      alignItems: 'flex-end',
                      paddingRight: 10,
                    }}>
                    <EntypoIcon
                      name="dots-three-horizontal"
                      size={20}
                      color="gray"
                    />
                  </View>
                </View>
                <View>
                  <Image
                    source={require('../../img/profile-6.jpg')}
                    style={{width: null, height: 380}}
                  />
                </View>
                <View
                  style={{
                    margin: 15,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                  }}
                />
                <View style={{paddingBottom: 10}}>
                  <View style={styles.container}>
                    <View style={styles.item}>
                      <View style={styles.container}>
                        <View style={styles.subItemFirst}>
                          <AntDesignIcon
                            name="like2"
                            size={24}
                            color="#585a5e"
                          />
                        </View>
                        <View style={styles.subItemSecond}>
                          <Text>Like</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.item}>
                      <View style={styles.container}>
                        <View style={styles.subItemFirst}>
                          <MaterialIcon
                            name="comment-outline"
                            size={24}
                            color="#585a5e"
                            style={{paddingTop: 5}}
                          />
                        </View>
                        <View style={styles.subItemSecond}>
                          <Text>Comment</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.item}>
                      <View style={styles.container}>
                        <View style={styles.subItemFirst}>
                          <FontAwesomeIcon
                            name="share"
                            size={24}
                            color="#585a5e"
                          />
                        </View>
                        <View style={styles.subItemSecond}>
                          <Text>Share</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.gap}></View>
          </View>
        </ScrollView>
      </View>
      // {/* </SafeAreaView> */}
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  dayProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 5,
  },
  myDayContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  myDayImage: {
    width: 110,
    height: 170,
    borderRadius: 8,
    marginLeft: 10,
  },
  container: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'center',
  },
  gap: {
    backgroundColor: '#c9cbd0',
    height: 10,
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
    width: '33.3%',
  },
  myDayProfilePosition: {
    position: 'absolute',
    top: 8,
    left: 15,
  },
  dayPlusBackGround: {
    padding: 7,
    borderRadius: 40,
    width: 45,
    height: 45,
    backgroundColor: '#fff',
  },
  myDayProfileBackGround: {
    padding: 4,
    borderRadius: 40,
    width: 48,
    height: 48,
    backgroundColor: '#3078e9',
  },
});
