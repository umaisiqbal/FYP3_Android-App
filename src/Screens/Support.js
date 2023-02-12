import { View,StyleSheet,TouchableOpacity, Text,Image } from 'react-native'
import {React,useState,useEffect} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import Background from '../components/Background'
import Button from '../components/Button'
import Logo from '../components/Logo'
import Paragraph from '../components/Paragraph'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import {db} from '../../firebase'
import 'firebase/firestore';
import 'firebase/auth';
import imagePath from '../constants/imagePath';
import firebase from 'firebase/compat';
import { auth } from '../../firebase';
export default function Support() {
  const [support, setSupport] = useState('')
  const [list, setList] = useState([])
  const ref= firebase.firestore().collection(auth.currentUser.uid,)

  
 useEffect(()=>{

  return ref.onSnapshot(querySnapshot=>{
    const list=[] 
    querySnapshot.forEach(doc=>{
      list.push({
        id:doc.data(),
        supports:doc.data().supports,
        // complete:doc.data().complete
        
      })
      console.log(list)
     })
     setList(list)
  })
  
 },[])
 const onSubmitPress=async()=>{
  console.log(db)
  await ref.add ({
    supports:support,
    //  complete:true
   })
   console.log(supports)
   setSupport('')
 }

  return (
    
    <Background>
          <Text style={styles.link}>Hello, how can we help you?</Text>

          <TextInput
              label="Enter Subject"
              returnKeyType="next" 
              value={support}
              onChangeText={setSupport}/>
               {/* <TextInput
              label="Description"
              returnKeyType="next" /> */}
          <Button
              mode="contained"
            onPress={onSubmitPress}
              style={{ 
                
                marginTop: 24  }}
          >
              Submit?
              
          </Button>
      
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
       marginLeft:10,
        marginTop:40,
        fontSize:18,
        fontWeight: 'bold',
        color: theme.colors.primary,
      },
    
  })