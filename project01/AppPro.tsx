/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  useColorScheme,
  StyleSheet
} from 'react-native';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.lightText : styles.darkText }> hello sir I am a bot for react native</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightText:{
    color: 'green',
  },
  darkText:{
    color: 'yellow',
  },
});

export default AppPro;
