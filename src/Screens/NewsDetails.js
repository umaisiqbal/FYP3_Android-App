import {View, Text, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const NewsDetails = () => {
  const route = useRoute();
  return (
    <View style={{flex: 1,}}>
      <Image
        source={{uri: route.params.data.urlToImage}}
        style={{width: '100%', height: 200}}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '800',
          color: '#000',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#000',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.description}
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: '600',
          color: '#000',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.publishedAt}
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#000',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.content}
      </Text>
    </View>
  );
};

export default NewsDetails;
