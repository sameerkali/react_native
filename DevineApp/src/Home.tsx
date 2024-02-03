import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Counter from './Components/Counter';

const Home = () => {
  return (
    <View>
      <Text>Home Component</Text>
      <Counter />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
