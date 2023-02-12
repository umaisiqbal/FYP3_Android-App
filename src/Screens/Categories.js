import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../core/theme'
const Categories = () => {
  return (
    <View style={styles.rows}>
    <Text style={styles.Text}>Here will be your saved News</Text></View>
  )
}

export default Categories
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
  