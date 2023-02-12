import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import TabRoutes from '../Navigation/TabRoutes'
import { NavigationContainer } from '@react-navigation/native'
import navigationStrings from '../constants/navigationStrings'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();


export default function LogOut({ navigation }) {
    //  <NavigationContainer>
    //         <Drawer.Navigator
    //             screenOptions={{ headerShown: false }}
    //         >
    //             <Drawer.Screen component={LogOut} name={navigationStrings.LOGOUT} />
             
                
    //         </Drawer.Navigator>
    //     </NavigationContainer>
  return (
    <Background>
      <Logo />
      <Header>Are you Sure to exit?</Header>
      <Paragraph>
      Wherever News Breaks, Whatever It Takes
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Landing' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
