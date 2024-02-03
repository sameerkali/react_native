import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Home from './Home';
import tw from 'twrnc'

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={tw`text-4xl`}>
            Hello Sir
          </Text>
          <Home/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
