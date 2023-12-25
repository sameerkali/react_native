import { StyleSheet, Text, View } from "react-native";
// import WelcomeScreen from "./src/screens/WelcomeScreen";
// import SubscribeScreen from "./src/screens/SubscribeScreen";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

 
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Subscribe" component={SubscribeScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  }
});

export default App;
