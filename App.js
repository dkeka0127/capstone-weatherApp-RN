import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PickerIOSComponent, StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';

export default function App() {
  return (
    // React-Native에서의 View는 div 같은 존재임
    <View style={styles.container}>
      <View style={styles.upperView}><Text>Upper</Text></View>
      <View style={styles.bottomView}><Text>Bottom</Text></View>
      <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row", // 글 가로정렬 (기본적으로 세로정렬 되어있음)
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  upperView: {
    flex: 1,
    backgroundColor: 'pink'
  },
  bottomView: {
    flex: 1,
    backgroundColor: 'green'
  }
});
