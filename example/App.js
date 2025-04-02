import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TabMotion } from '../src/index';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabMotion />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
