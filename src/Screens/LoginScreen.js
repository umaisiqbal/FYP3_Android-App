import React, { useEffect,useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { auth } from '../../firebase'
export default function LoginScreen({ navigation }) {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone,setphone]=useState('')



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
    navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;

        console.log('Logged in with:', user.email);
        alert("you are Logged in")
      })
      
      .catch(error => alert(error.message))
  }
 
  return (
    <Background>
    
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={text => setEmail(text)}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={text => setPassword(text)}
        // error={!!password.error}
        // errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
      <Button
        mode="contained"
        //onPress={handlePhoneSignUp}
        style={{ marginTop: 24 }}
      >
       Phone Sign Up
      </Button>
      {/* <Button mode="contained" onPress={onLoginPressed}>
        Login with Phone Number
      </Button> */}
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
/// Rough screen

// import React, { useState } from 'react'
// import { TouchableOpacity, StyleSheet, View } from 'react-native'
// import { Text } from 'react-native-paper'
// import Background from '../components/Background'
// import Logo from '../components/Logo'
// import Header from '../components/Header'
// import Button from '../components/Button'
// import TextInput from '../components/TextInput'
// import BackButton from '../components/BackButton'
// import { theme } from '../core/theme'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState({ value: '', error: '' })
//   const [password, setPassword] = useState({ value: '', error: '' })

//   const onLoginPressed = () => {
//     const emailError = emailValidator(email.value)
//     const passwordError = passwordValidator(password.value)
//     if (emailError || passwordError) {
//       setEmail({ ...email, error: emailError })
//       setPassword({ ...password, error: passwordError })
//       return
//     }
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'LogOut' }],
//     })
//   }

//   return (
//     <Background>
//       <BackButton goBack={navigation.goBack} />
//       <Logo />
//       <Header>Welcome back.</Header>
//       <TextInput
//         label="Enter OTP"
//         returnKeyType="next"
//         value={email.value}
//         onChangeText={(text) => setEmail({ value: text, error: '' })}
//         error={!!email.error}
//         errorText={email.error}
//         autoCapitalize="none"
//         autoCompleteType="email"
//         textContentType="emailAddress"
//         keyboardType="email-address"
//       />
//         <Button mode="contained" onPress={onLoginPressed}>
//       Enter OTP
//     </Button>
//       <TextInput
//         label="Password"
//         returnKeyType="done"
//         value={password.value}
//         onChangeText={(text) => setPassword({ value: text, error: '' })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />
//       {/* <View style={styles.forgotPassword}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('ResetPasswordScreen')}
//         >
//           <Text style={styles.forgot}>Forgot your password?</Text>
//         </TouchableOpacity>
//       </View> */}
    
//       <Button mode="contained" onPress={onLoginPressed}>
//         Login with Phone Number
//       </Button>
//       <View style={styles.row}>
//         <Text>Don’t have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
//           <Text style={styles.link}>Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </Background>
//   )
// }

// const styles = StyleSheet.create({
//   forgotPassword: {
//     width: '100%',
//     alignItems: 'flex-end',
//     marginBottom: 24,
//   },
//   row: {
//     flexDirection: 'row',
//     marginTop: 4,
//   },
//   forgot: {
//     fontSize: 13,
//     color: theme.colors.secondary,
//   },
//   link: {
//     fontWeight: 'bold',
//     color: theme.colors.primary,
//   },
// })