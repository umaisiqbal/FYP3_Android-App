import { StyleSheet,Text,View,ScrollView } from 'react-native'
import {React,useState,useEffect} from 'react'
// import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat';
import { auth } from '../../firebase';
import Background from '../components/Background'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import {db} from '../../firebase'
import 'firebase/firestore';
import 'firebase/auth';
import firestore from 'firebase/firestore';


import { addDoc, collection, deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
export default function Feedback() {}
  // const [question, setQuestion] = useState('')
  // const [list, setList] = useState([])
 

 // const ref= firebase.database().collection(auth.currentUser.uid,)
//  useEffect(()=>{

//   return ref.onSnapshot(querySnapshot=>{
//     const list=[] 
//     querySnapshot.forEach(doc=>{
//       list.push({
//         id:doc.data().id,
//         questions:doc.data().questions,
//         complete:doc.data().complete
        
//       })
//       console.log(list)
//      })
//      setList(list)
//   })
  
//  },[])
//  const onSubmitPress=async()=>{
//   console.log(db)
//   await ref.add ({
//     questions:question,
//     //  complete:true
//    })
//    console.log(question)
//    fetchData()
//    setQuestion('')
//  }

 
//   return (
    
//     <Background>
//           <Text style={styles.link}>Your Feedback</Text>

//           <TextInput
//              label="Enter"
//              returnKeyType="next"
//         value={question}
//         onChangeText={setQuestion}
//         style={styles.TextInput}/>



//           {/* <TextInput
           
//               returnKeyType="next" /> */}
//                {/* <TextInput
//               label="Paste Content"
//               returnKeyType="next" /> */}
//               {/* <TouchableOpacity
//         onPress={onSubmitPress}
//         style={styles.Button}>
//           <Text style={{color:'white',fontSize:21}}>Submit</Text>
//         </TouchableOpacity> */}
//           <Button
//               mode="contained"
//               onPress={onSubmitPress}
//               style={{ 
                
//                 marginTop: 24  }}
//           >
//               Submit?
              
//           </Button> 
       
// </Background>
    
//   )
// }
// const styles=StyleSheet.create({

   
//     container:{
//         paddingLeft:10,
//         paddingBottom:20,
//         paddingRight:20,
//         borderRadius:10,
//         backgroundColor:"lightblue",
//         marginTop:20,
        

//         // alignItems:"center",
//         // justifyContent:"center"
//         },
    
  
 
      
//     link: {
//        marginLeft:10,
//         marginTop:40,
//         fontSize:18,
//         fontWeight: 'bold',
//         color: theme.colors.primary,
//       },
    
//   })
// firestore()
//   .collection('Start')
//   .add({
//     fname: this.state.fname,
//     lname: this.state.lname,
//     email: this.state.email,
//     key: count
//   })
//   .then(() => {
//     console.log('User added!');
//   });

// return (
//   <View style={styles.container}>
//     <Button style={{backgroundColor:'black'}} title='Create New Doc' onPress={Create}></Button>
//     <Button title='Read Doc' onPress={Read}></Button>
//     {
//       userDoc != null &&
//       <Text>Bio: {userDoc.bio}</Text>
//     }
//     <TextInput style={{
//       width: '95%',
//       fontSize: 18,
//       padding: 12,
//       borderColor: 'gray',
//       borderWidth: 0.2,
//       borderRadius: 10,
//       marginVertical: 20
//     }} placeholder='Type Here' onChangeText={(text) => { setText(text) }} value={text}></TextInput>

//     <Button title='Update Doc' onPress={() => {
//       Update({
//         "bio": text
//       }, true)
//     }} disabled={text == ""}></Button>
//     <Button title='Delete Doc' onPress={Delete}></Button>
//   </View>
// );
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// });
