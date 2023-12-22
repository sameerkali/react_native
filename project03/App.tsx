import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "should be at least 4 characters")
    .min(16, "should be max of 16 characters")
    .required("length is required")
});

const App = () => {
  //states
  const [password, setpassword] = useState("");
  const [isPasswordGenerated, setisPasswordGenerated] = useState(false);
  const [lowercase, setlowercase] = useState(false);
  const [uppercase, setuppercase] = useState(false);
  const [number, setnumber] = useState(false);
  const [symbol, setsymbol] = useState(false);

  //functions
  const generatePasswordString = (passwordLength: number) => {}
  const createPassword = (characters: string ,passwordLength: number) => {}
  const resetPassword = () => {}

  return (
    <View>
      <Text> hii </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 37
  }
});
