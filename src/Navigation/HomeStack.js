import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import { EditProfile, Home, NewsPaper, ProductDetails, Profile,LoginScreen } from "../Screens";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
        name={navigationStrings.HOME}  screenOptions={{
          headerShown: false,
        }}
        
        component={Home}
    />
    <Stack.Screen component={NewsPaper} name="NewsPaper" />
 
      </Stack.Navigator>
    );
  }