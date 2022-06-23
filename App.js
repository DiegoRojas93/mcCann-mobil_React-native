// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import CameraView from './src/components/CameraView';
// import Main from './src/components/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CameraView />
      {/* <ScrollView style = {styles.scrollView}>
      </ScrollView> */}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
    flex: 1
  },
  text: {
    fontSize: 42,
  },
});