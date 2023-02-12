import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {auth} from '../../firebase';

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Home');
        alert('you are registered you can enjoy our app');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const handlePhoneSignUp = () => {
    navigation.replace('PhoneSignUp');
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '479262466021-n81ftr2oebojaas92tj7ina1lffjola1.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true}); 
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo------', userInfo);
      setloggedIn(true);
    } catch (error) {
      console.log('error -------', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <Background>
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        label="Email"
        // returnKeyType="next"
        value={email}
        onChangeText={text => setEmail(text)}
        // error={!!email.error}
        // errorText={email.error}
        // autoCapitalize="none"
        // autoCompleteType="email"
        // textContentType="emailAddress"
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
      <Button mode="contained" onPress={handleSignUp} style={{marginTop: 10}}>
        Sign Up
      </Button>
      <Button
        mode="contained"
        onPress={handlePhoneSignUp}
        style={{marginTop: 10}}>
        Phone Sign Up
      </Button>
      <Button
        mode="contained"
        onPress={() => onGoogleButtonPress()}
        style={{marginTop: 5}}>
        Continue with Google
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
