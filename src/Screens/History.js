import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { theme } from '../core/theme'
import Background from '../components/Background'
import Button from '../components/Button'
const History = () => {
  return (
    <Background>
       

          <TextInput
              label="Enter Subject"
              returnKeyType="next" />
               <TextInput
              label="Description"
              returnKeyType="next" />
        
       
          <Button
              mode="contained"
            //   onPress={onSignUpPressed}
              style={{ 
                
                marginTop: 24  }}
          >
              Searched News? </Button>
              <Button
              mode="contained"
            //   onPress={onSignUpPressed}
              style={{ 
                
                marginTop: 24  }}
          >
              Followed NewsPapers? </Button>
              <Button
              mode="contained"
            //   onPress={onSignUpPressed}
              style={{ 
                
                marginTop: 24  }}
          >
              Favourite News? </Button>
      </Background>
  )
}

export default History
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
    Button:{

    }
  })
  