import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type WelcomeScreenProps = {
  navigation: any;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <Text style={styles.text}>Little lemon, your local restaurant</Text>
      <Pressable onPress={() => navigation.navigate("Subscribe")}>
        <Text style={[styles.button, styles.buttonText]}>View Menu</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  logo: {
    height: 100,
    width: 200,
    resizeMode: "cover"
  },
  text: {
    color: "#cccccc",
    backgroundColor: "#ffffff"
  },
  button: {
    backgroundColor: "#1BCA9B",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
