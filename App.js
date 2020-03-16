import * as React from 'react';
import {Button, Text, View} from 'react-native';
import Home from './sources/screens/home/Home';
import HomeDeatils from './sources/screens/home/HomeDetails';
import Menu from './sources/screens/menu/Menu';
import Gaming from './sources/screens/gaming/Gaming';
import Market from './sources/screens/market/Market';
import Notification from './sources/screens/notification/Notification';
import Video from './sources/screens/video/Video';
import Profile from './sources/screens/menu/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const HomeStack = createStackNavigator();
const VideoStack = createStackNavigator();
const MarketStack = createStackNavigator();
const GamingStack = createStackNavigator();
const NotiStack = createStackNavigator();
const MenuStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={HomeDeatils} />
    </HomeStack.Navigator>
  );
}
function VideoStackScreen() {
  return (
    <VideoStack.Navigator headerMode="none">
      <VideoStack.Screen name="Video" component={Video} />
    </VideoStack.Navigator>
  );
}

function MarketStackScreen() {
  return (
    <MarketStack.Navigator headerMode="none">
      <MarketStack.Screen name="Market" component={Market} />
    </MarketStack.Navigator>
  );
}
function GamingStackScreen() {
  return (
    <GamingStack.Navigator headerMode="none">
      <GamingStack.Screen name="Gaming" component={Gaming} />
    </GamingStack.Navigator>
  );
}
function NotiStackScreen() {
  return (
    <NotiStack.Navigator headerMode="none">
      <NotiStack.Screen name="Nofification" component={Notification} />
    </NotiStack.Navigator>
  );
}

function MenuStackScreen() {
  return (
    <MenuStack.Navigator headerMode="none">
      <MenuStack.Screen name="Menu" component={Menu} />
      <MenuStack.Screen name="Details" component={Profile} />
    </MenuStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
              return <EntypoIcon name={iconName} size={30} color={color} />;
            } else if (route.name === 'Video') {
              iconName = focused ? 'ondemand-video' : 'ondemand-video';
              return <MaterialIcon name={iconName} size={30} color={color} />;
            } else if (route.name === 'Market') {
              iconName = focused ? 'shop' : 'shop';
              return <EntypoIcon name={iconName} size={30} color={color} />;
            } else if (route.name === 'Gaming') {
              iconName = focused ? 'game-controller' : 'game-controller';
              return <EntypoIcon name={iconName} size={30} color={color} />;
            } else if (route.name === 'Notification') {
              iconName = focused
                ? 'md-notifications'
                : 'ios-notifications-outline';
              return <IonIcons name={iconName} size={30} color={color} />;
            } else if (route.name === 'Menu') {
              iconName = focused ? 'menu' : 'menu';
              return <FeatherIcon name={iconName} size={30} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3b5998',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Video" component={VideoStackScreen} />
        <Tab.Screen name="Market" component={MarketStackScreen} />
        <Tab.Screen name="Gaming" component={GamingStackScreen} />
        <Tab.Screen name="Notification" component={NotiStackScreen} />
        <Tab.Screen name="Menu" component={MenuStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
