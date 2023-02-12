import { View,StyleSheet,TouchableOpacity, Text,Image } from 'react-native'
import React from 'react'
// import { MaterialIcons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import Background from '../components/Background'
import Button from '../components/Button'
import Logo from '../components/Logo'
import Paragraph from '../components/Paragraph'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import imagePath from '../constants/imagePath';
export default function Summary() {
    
  return (
    
    <Background>
          
          <TextInput
              label="Enter URL"
              returnKeyType="next" />
               <TextInput
              label="Paste Content"
              returnKeyType="next" />
          <Button
              mode="contained"
            //   onPress={onSignUpPressed}
              style={{ 
                
                marginTop: 24  }}
          >
              Summarize?
              
          </Button><Text style={styles.link}>Summarized:</Text>
          <View style={styles.container}>
          <Paragraph>
          Lt Gen Faiz Hameed, who was currently serving as commander of the Bahawalpur
          Corps, was due to retire on April 30, 2023, while Lt-Gen Azhar Abbas was serving as the Chief of
          General Staff (CGS) at the moment and his retirement is due on April 27, 2023PM Shehbaz Sharif has accepted
      </Paragraph>
      <Image
           style={{
            tintColor:  'purple' ,
            marginLeft:310,
            marginTop:50
          }}
            source={imagePath.icDow} />
      </View>
</Background>
    
  )
}
const styles=StyleSheet.create({

   
    container:{
        paddingLeft:10,
        paddingBottom:20,
        paddingRight:20,
        borderRadius:10,
        backgroundColor:"lightblue",
        marginTop:20,
        

        // alignItems:"center",
        // justifyContent:"center"
        },
    
  
 
      
    link: {
       marginLeft:-250,
        marginTop:40,
        fontSize:18,
        fontWeight: 'bold',
        color: theme.colors.primary,
      },
    
  })