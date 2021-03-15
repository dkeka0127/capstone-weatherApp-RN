import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PickerIOSComponent, StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>Loading.js</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'gray',
      justifyContent: "flex-end",
      padding: 50,
      alignContent: "center",
      paddingVertical: 100,
  },
  text: {
      color: '#2c2c2c',
      fontSize: 25
  }
});
