
import Button from '../components/Button'
import firebase from 'firebase/compat/app';
import { theme } from '../core/theme'
import TextInput from '../components/TextInput'
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList,StyleSheet } from 'react-native'
import { auth } from '../../firebase'

const Feedback = () => {
  const user=auth.currentUser.uid;
    const itemRef = firebase.database().ref(user+"/Feedback" )
      const [email, setEmail] = useState('')
      const [name, setName] = useState('')
      const [text, setText] = useState('')
      const [list, setList] = useState([])
      
      let [isUpdating, setIsUpdating] = useState(false)
      let [currentKey, setCurrentKey] = useState('')
  
  
      useEffect(() => {
          fetchData()
      }, [])
  
      function addHandle() {
          if (isUpdating) {
              itemRef.child(currentKey).update({ name,text, email});
              fetchData()
              setText('')
              setEmail('')
              setName('')
          }
          if (!isUpdating) {
              itemRef.push({ text,email,name });
              fetchData()
              setText('')
              setEmail('')
              setName('')
          }
          alert("Feedback sent to Admin")
      }
  
      let item = [];
     
      function fetchData() {
          itemRef.on('value', function (snap) {
              // console.log(snap)
              let a_ = snap.val();
              for (let x in a_) {
                  console.log(x)
                  console.log(a_[x])
                  item.push({ text: a_[x].text, key: x ,email:a_[x].email,   name: a_[x].name})
              }
              setList(item)
          })
      }
  
      function handleUpdate(key, text,email,name) {
          setCurrentKey(key)
          setIsUpdating(true)
          setText(text)
          setEmail(email)
          setName(name)
  
  
      }
      function handleDelete(key) {
          itemRef.child(key).remove()
          fetchData()
      }
  
  
      return (
        
          <View style={{ flex: 1, padding: 10 }}>


          {console.log(list)}

          <Text style={styles.link}>Help Us Improved!</Text>
          <Text style={styles.link1}>What do you think about this App?</Text>
          <Text style={styles.link2}>Fill the form</Text>
          <TextInput
            label="Enter Name"
            returnKeyType="next"
            value={name} onChangeText={(e) => { setName(e); } } />
          <TextInput
            label="Enter Email"
            returnKeyType="next"
            value={email} onChangeText={(e) => { setEmail(e); } } />
          <TextInput
            label="Your Feedback"
            returnKeyType="next"
            value={text} onChangeText={(e) => { setText(e); } } />

          <Button
            mode="contained"

            style={{
              marginTop: 24
            }}
            title={isUpdating ? 'Update' : 'Add'} onPress={addHandle}>Send</Button>
          <ScrollView>
            {list.map((item, index) => {
              console.log(item);
              return (
                <><View style={{  padding: 5, borderWidth: 0.34, margin: 10 }}>
                  <Text style={{ title: 'Name', flex: 0.90,color: "black" }}>Name:{'\t'}{'\t'} {item.name}</Text>
                  <Text style={{ flex:0.90,color: "black" }}>Email:{'\t'}{'\t'} {item.email}</Text>
                  <Text style={{ title: 'Name',  color: "black" }}>{'\n'}{'\n'}Feedback:{'\n'}{'\n'}  {item.text}</Text>
                </View><View>
                    <Button style={styles.button} onPress={() => handleUpdate(item.key, item.text, item.email,item.name)}><Text>Update</Text></Button>
                    <Button style={styles.button1}  onPress={() => handleDelete(item.key)}><Text >Delete</Text></Button>
                  </View></>
              );
            })}
          </ScrollView>
        </View>

 
      )
  }
  
  export default Feedback
  const styles=StyleSheet.create({

    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: 'center',
    },
    button:{
     marginTop:-10,
     marginBottom:-22
    },
    button1:{
      marginTop:2,
      paddingTop:-230
     },
    container:{
        paddingLeft:10,
        paddingBottom:20,
        paddingRight:20,
        borderRadius:10,
        backgroundColor:"lightblue",
        marginTop:20,
        },
    
        link: { 
         fontFamily:"fantasy",
         fontWeight:"bold",
         fontSize: 17,
          color: theme.colors.primary,
          textAlign: 'center',
         
        },
        link1: {
          fontFamily:"fantasy",
          fontWeight:"bold",
          marginTop:10,
          fontSize: 13,
           color: "green",
           textAlign: 'center',
          
         },
         link2: {
          fontFamily:"fantasy",
          fontWeight:"bold",
          marginTop:10,
          fontSize: 15,
      textDecorationLine: 'underline',
           color: theme.colors.primary,
           textAlign: 'center',
          
         },
   
  })