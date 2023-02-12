

import firebase from 'firebase/compat/app';
import { theme } from '../core/theme'

import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { auth } from '../../firebase'
const SavedNews = () => {
  const itemRef = firebase.database().ref('/last')
      const [text, setText] = useState('')
      const [list, setList] = useState([])
      let [isUpdating, setIsUpdating] = useState(false)
      let [currentKey, setCurrentKey] = useState('')
  
  
      useEffect(() => {
          fetchData()
      }, [])
  
      function addHandle() {
          if (isUpdating) {
              itemRef.child(currentKey).update({ text });
              fetchData()
              setText('')
          }
          if (!isUpdating) {
              itemRef.push({ text });
              fetchData()
              setText('')
          }
  
      }
  
      let item = [];
      function fetchData() {
          itemRef.on('value', function (snap) {
              // console.log(snap)
              let a_ = snap.val();
              for (let x in a_) {
                  console.log(x)
                  console.log(a_[x])
                  item.push({ text: a_[x].text, key: x })
              }
              setList(item)
          })
      }
  
      function handleUpdate(key, text) {
          setCurrentKey(key)
          setIsUpdating(true)
          setText(text)
  
  
      }
      function handleDelete(key) {
          itemRef.child(key).remove()
          fetchData()
      }
  
  
      return (
          <View style={{ flex: 1, padding: 10 }}>
              {
                  console.log(list)
              }
              <TextInput style={{ borderWidth: 0.34, marginBottom: 10 }} value={text} onChangeText={(e) => { setText(e) }} />
              <Button title={isUpdating ? 'Update' : 'Add'} onPress={addHandle} />
              <ScrollView>
                  {list.map((item, index) => {
                      console.log(item)
                      return (
                          <View style={{ flexDirection: 'row', padding: 5, borderWidth: 0.34, margin: 10 }}>
                              <Text style={{ flex: 0.70 }}>{item.text}</Text>
                              <TouchableOpacity onPress={() => handleUpdate(item.key, item.text)}><Text style={{ flex: 0.15 }} >Update</Text></TouchableOpacity>
                              <TouchableOpacity onPress={() => handleDelete(item.key)}><Text style={{ flex: 0.15 }}>Delete</Text></TouchableOpacity>
                          </View>
                      )
                  })}
              </ScrollView>
          </View>
      )
  }
  
  export default SavedNews