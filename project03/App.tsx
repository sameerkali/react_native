import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, "should be at least 4 characters")
  .min(16, "should be max of 16 characters")
  .required("length is required")
});

const App = () => {
  return <View></View>;
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 37
  }
});
