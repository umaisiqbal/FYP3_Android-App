import React from 'react'
import navigationStrings from '../constants/navigationStrings'
// import { Audios, Home, Live, NewsPaper, Profile } from '../Screens'
import TabRoutes from './TabRoutes'
import {Landing, PhoneSignUp} from '../Screens'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../Screens/LoginScreen'
// import { NavigationContainer } from '@react-navigation/native'
// import Routes from './Routes'
import { createStackNavigator } from '@react-navigation/stack'
// import DrawerNav from './DrawerNav'
import SignUp from '../Screens/SignUp'
import LatestNews from '../Screens/LatestNews'
import NewsDetails from '../Screens/NewsDetails'
import CategoryNews from '../Screens/CategoryNews'

// export default function (Stack) {
//   return (
//       <>
 
//           <Stack.Screen
//               name={navigationStrings.LANDING}
//               component={Landing}
//           />
//          <Routes/>
         
//       </>
//   )
// }
const Stack = createStackNavigator();
// Navigator, Screen, Group

function MainStack() {
  console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={navigationStrings.LANDING}>
      {/* <Stack.Screen
        name={navigationStrings.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({route}) => ({
          headerTintColor: COLORS.white,
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: route.params.userId,
        })}
      /> */}
      <Stack.Screen
        name={navigationStrings.LANDING}
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen name={navigationStrings.LOGINSCREEN} component={LoginScreen} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp} />
      <Stack.Screen name={navigationStrings.PHONESIGNUP} component={PhoneSignUp} />
      <Stack.Screen name={navigationStrings.NEWSDETAILS} component={NewsDetails} />
      <Stack.Screen name={navigationStrings.CATEGORYNEWS} component={CategoryNews} />
      <Stack.Screen
        name={navigationStrings.HOME}
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;

