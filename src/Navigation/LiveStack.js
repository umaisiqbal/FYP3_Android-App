import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import { EditProfile, Home, Live, ProductDetails } from "../Screens";

const Stack = createNativeStackNavigator();

export default function LiveStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={navigationStrings.LIVE} component={Live} /> 

      </Stack.Navigator>
    );
  }