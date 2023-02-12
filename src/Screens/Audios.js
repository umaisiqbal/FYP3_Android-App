import { View,TextInput,StyleSheet,TouchableOpacity, Text,Image } from 'react-native'
import {React, useState} from 'react'
import { theme } from '../core/theme'
import imagePath from '../constants/imagePath';
import Tts from 'react-native-tts';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button } from 'react-native-paper';
import { event } from 'react-native-reanimated';



export default function Summary() {
  const [text,setText] = useState('');
  const {speak} = useSpeechSynthesis();
 
  const handleOnClick = () => {
    speak({text:text})
   
  }
  return (
    
   
    <><Image
      source={{ uri: 'https://dailytimes.com.pk/assets/uploads/2022/12/02/663495_35163715-1.jpg' }}
      resizeMode="cover"
      style={styles.image} /><TouchableOpacity
      >
        {/* <Text style={styles.text2}>Lt Gen Faiz Hameed, who was currently serving as commander of the Bahawalpur
          Corps, was due to retire on April 30, 2023, while ssLt-Gen Azhar Abbas was serving as the Chief of
          General Staff (CGS) at the moment and his retirement is due on April 27, 2023PM Shehbaz Sharif has accepted the request of former ISI director general and Commander of Bahawalpur
        </Text> */}

        <TextInput value={text}  
        onChangeText={text => setText(text)}>
        </TextInput>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=>{handleOnClick()}}
            //onPress={handleSignUp}
            style={styles.button}

          >
          
            <Text style={styles.buttonText}>Audio?</Text></TouchableOpacity>
          <Image
           style={{
            tintColor:  'purple' ,
            marginLeft:175
          }}
            source={imagePath.icAudio} />
          <Text style={styles.link}>Playing...</Text>
          <Image
           style={{
            tintColor:  'purple' ,
            marginLeft:310,
            marginTop:130
          }}
            source={imagePath.icDow} />
        </View>
      </TouchableOpacity>
    
      
      </> 
    
  )
}
const styles=StyleSheet.create({
  container:{
    padding:10,
    flex:1,
    backgroundColor:"white",
    // alignItems:"center",
    // justifyContent:"center"
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginLeft:160
    },
    button: {
      backgroundColor: 'purple',
      width: '30%',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      marginLeft:130,
      marginBottom:34,
      marginTop:6
      // marginTop:2
    },
    text1:{
      fontWeight:"bold",
      fontSize:20,
     marginLeft:16
    
    },
    text2:{
     backgroundColor:"lightblue",
      fontSize:20,
     marginLeft:16
    
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    image:{
      // flex:1,
      // justifyContent:"center",
      // alignItems:"center",
      width:360,
      marginLeft:1,
      height:155,
     
      
    },

    TextInput:{
      width: "500px",
      borderRadius: "12px",
      height: "163px",
      borderWidth: "10px",
      borderColor: "black",
      marginTop: "25px",
      marginBottom: "49px",
    }
    ,
    Button:{
      padding: "10px",
      borderRadius: "11px",
      fontWeight: "bold",
      borderWidth: "4px",
      marginLeft: "-334px",
    }
  })