import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import { theme } from '../core/theme'
const UserGuide = () => {
  return (
    <View>
      <ScrollView>
          <Text style={styles.Text}>
            Some objectives are described here:
          <Text style={styles.titleText}>{'\n'} •	We should have an android application.
          {'\n'}•	To take input content from the textbook we need to use OCR.


      {'\n'} •	To get authentic answers we need BERT from which we will get dataset.</Text>

      {'\n'} •	Easier GUI for an average user.
      {'\n'}  Within the first five minutes of an interaction, the user should be able to understand the application’s use.
      {'\n'}    •	Provide best set of answers in less time.
      {'\n'} {'\n'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}--------------------******************--------------------
      {'\n'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}--------------------******************--------------------
      
      {'\n'}{'\n'}   This is the brief explanation of our application in which we provide the guidelines to interact with application and there features:
          
          {'\n'}1.	‘Signup’ enables the user to register himself with our app. If the user has already signed in then he doesn’t need to sign in again.
            {'\n'}2.	Once the user registered himself using sign up method, he can ‘login’ anytime he like log in is generally an identification and authentication phase in which user gives password and username to the system and the system will give him the to the app.
            {'\n'} 3.	In this methodology user will ask questions from the app using ‘scanning technique’. He will open a camera of the mobile phone and start scanning the parts which he wants answers to. After the scanning is done app will display the desired results from the dataset.
            {'\n'} 4.	In this process the user will ask question from the app by using ‘typing technique’. He or She will type the question on the keypad of the app and the app will find desired results for them.
            {'\n'} 5.	‘Reading answers from GUI’, when the questions are being asked by the user. The app will provide desired result and these results will be shown on the screen mobile so that user can easily read answers from there.
            {'\n'} 6.	‘Saving answer’, after process of question, app will provide desired answers to the users. These answers will be saved for after usage. Because it is a very bad practice that user is searching for same answer again and again.
            {'\n'}  7.	In this use case ‘user information will be update’; if any new user signup or delete account from our application then their records will be update by our system so by doing this memory will be save and fully utilized.
            {'\n'} 8.	‘Logout’, once the user done all the work he can logout from system for safety and also remember the information to login again.
            {'\n'}{'\n'}{'\n'}_______________________________________________________

          </Text>
        </ScrollView>
    </View>
  )
}

export default UserGuide
const styles = StyleSheet.create({
    rows: {
      flexDirection: 'row',
      marginTop: 4,
      marginLeft:90
    },
    Text:{
        color:"black",
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  })
  