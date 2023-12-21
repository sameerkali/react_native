import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Cards from './components/Cards';

const App = () => {
  return (
    <View>
      <Cards />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 37,
  },
});
