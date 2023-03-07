import {View,Button, Text, FlatList, Image, TouchableOpacity,StyleSheet,SafeAreaView,Clipboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { configureProps } from 'react-native-reanimated/lib/reanimated2/core';
import { ScrollView } from 'react-native-gesture-handler';
import Background from '../components/Background';

import imagePath from '../constants/imagePath';
import TextInput from '../components/TextInput';



const TrendingNews = ({navigation, route}) => {

  const [news, setNews] = useState([]);
  const [copiedText, setCopiedText] = useState('');
  
  
  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  useEffect(() => {
    getNews();
  }, []);
 
  const getNews = () => {
    fetch('http://8905-154-192-46-25.ngrok.io/TrendingNewsHndL',
  {
    method:'GET',
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify({
    //   url: "",
     
    // }),
  }  
    
    
    )
      .then(res => res.json())
      .then(output => {
        console.log(output.TrendingHeadings,"LIST OF HEADINGS" );
      setNews(output.TrendingHeadings);
      // console.log(news);
      });
      
  };


    const handleback=()=>{
  
        navigation.replace("Home")
      }
      function handleSubmit(data) {
        console.log(data,"Trending news")
        navigation.navigate('NewsDetails', {data});
      }
      return (
   
        <Background>  
               <View
          style={{
            // flex: 1,
            // backgroundColor: '#fff',
            //  backgroundColor: '#CEC0CD',
          }}>
          <Text
            style={{
              borderColor: '#6F3D6C',
              borderRadius: 10,
              borderWidth: 4,
              color: '#6F3D6C',
              fontSize: 30,
              fontWeight: '900',
              marginLeft: 5,
              marginTop: 10,
              marginBottom:20,
              paddingLeft:70,
           
            }}>
            Headlines
          </Text>
         <ScrollView>
         <View>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls1)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                     selectable= {true}
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls1}
                      {item.Heading1}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
     
        
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls1)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                   
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls1}
                      {item.Heading1}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
         
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls2)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                   
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls2}
                      {item.Heading2}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
         
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls3)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                   
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls3}
                      {item.Heading3}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
          
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls4)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                      selectable= {true}
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls4}
                      {item.Heading4}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
       
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls5)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                   
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls5}
                      {item.Heading5}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
          
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls6)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                   
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls6}
                      {item.Heading6}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
          
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls7)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                   
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls7}
                      {item.Heading7}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
          
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls8)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                   
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls18}
                      {item.Heading8}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
          
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls9)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                   
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls9}
                      {item.Heading9}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls10)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                   
                        style={{
                          selectable: 'true',
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls10}
                      {item.Heading10}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
          <View style={{paddingTop: 40}}>
            <FlatList
              data={news}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                    
                      padding:5,
                      borderColor: '#000',
                  borderWidth: 1,
                      color: '#fff',
                      borderColor: '#000',
                      fontSize: 18,
                         borderRadius: 10,
                      backgroundColor:"#6F3D6C",
                      fontWeight: '700',
                    }}
                    onPress={()=>handleSubmit(item.Urls11)}
                    >
                
                    <View style={{padding: 10}}>
                      <Text
                      
                        style={{
                          color: '#000',
                          // width: '45%',
                          fontSize: 18,
                          fontWeight: '700',
                        }}>
                        {item.Urls11}
                      {item.Heading11}
                      </Text>
                    
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
    
          
          </ScrollView>
        </View>
        
        <TouchableOpacity 
              mode="contained"
              onPress={handleback}
              style={ styles.button1}>
                  <Text style={styles.link}>Back</Text>
              </TouchableOpacity>
             
               </Background> 
              )
}
export default TrendingNews

const styles = StyleSheet.create({
      button: {
        backgroundColor: 'purple',
        width: '25%',
        padding: 2,
        borderRadius: 60,
        alignItems: 'center',
        marginLeft:130
    
      },
    
      button1: {
        backgroundColor: 'purple',
        width: '25%',
       
        borderRadius: 60,
        alignItems: 'center',
      
      marginBottom:20
      }
    })