// import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
// import React from 'react'

// import navigationStrings from "../constants/navigationStrings";
// const Landing = ({navigation}) => {
//   return (
//     <>

//     <View style={styles.buttonContainer}>
//         <TouchableOpacity
//             onPress={() => navigation.navigate(navigationStrings.LIVE)}
//             style={styles.button}
//         >
//             <Text style={styles.buttonText}>SignUp</Text>
//         </TouchableOpacity>

//     </View><View style={styles.buttonContainer1}>
//         <TouchableOpacity
//             onPress={() => navigation.navigate(navigationStrings.EXPLORE)}
//             style={styles.button}
//         >
//             <Text style={styles.buttonText}>SignIn</Text>
//         </TouchableOpacity></View></>)
// }

// export default Landing
// const styles=StyleSheet.create({
//     buttonContainer: {
//         width: '20%',
//         justifyContent: 'center',
//         alignItems: 'center',
//      backgroundColor:'lightblue',
//      marginTop:300,
//      marginLeft:135,
//      borderRadius:20
//       },
//       buttonContainer1: {
//         width: '20%',
//         justifyContent: 'center',
//         alignItems: 'center',
//      backgroundColor:'lightblue',
//      marginTop:20,
//      marginLeft:135,
//      borderRadius:20
//       },
//       buttonText:{
//  color:'black',
//  fontSize:20,
//    }
//   })

import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import imagePath from '../constants/imagePath';
export default function Landing({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>EZ Bulletin App</Header>
      <Paragraph>
      The Name You Know. The News You Need.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('SignUp')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
