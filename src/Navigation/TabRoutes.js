
import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import {Audios, Live, NewsPaper, Profile, Summary} from '../Screens';
import { Home } from '../Screens';
import LiveStack from './LiveStack';
import HomeStack from './HomeStack';
import PorfileStack from './ProfileStack';
import LandingStack from './LandingStack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import LoginScreen from '../Screens/NewsPaper';
import Audio from '../Screens';
import ProfileStack from './ProfileStack';
import DrawerNav from './DrawerNav';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  
  return (
       <>
          <Tab.Navigator
          
      screenOptions={{
        
        presentation: 'card',
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: "white"
        }

      }}
    > 
      <Tab.Screen name={navigationStrings.HOME} component={DrawerNav} options={{
       
          headerShown: false,
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={{
                tintColor: focused ? 'purple' : '#924FF2'
              }}
              source={imagePath.icHome} />
          );
        }
      }} />
      <Tab.Screen name={navigationStrings.SUMMARY} component={Summary} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Image style={{
              tintColor: focused ? 'purple' : '#924FF2',
            }}
              source={imagePath.icSummary} />
          );
        }
      }} />
      <Tab.Screen name={navigationStrings.LIVE} component={Live} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={{
                tintColor: focused ? 'purple' : '#924FF2'
              }}
              source={imagePath.icLive} />
          );
        }
      }} />
        <Tab.Screen name={navigationStrings.AUDIOS} component={Audios} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Image
    
              style={{
                // width:60,
                // height:
                tintColor: focused ? 'purple' : '#924FF2'
              }}
              source={imagePath.icAudio} />
          );
        }
      }} />
      {/* <Tab.Screen name={navigationStrings.SUMMARY} component={HomeStack} options={{ tabBarIcon:({focused}) => {
    return (
    <Image
    style={{
        tintColor:focused ? 'blue': 'gray'
    }}
    source={imagePath.icSummary} />
    )} }}/> */}
    </Tab.Navigator></>

  )
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundcolor:'black'
    },
   
  })
  