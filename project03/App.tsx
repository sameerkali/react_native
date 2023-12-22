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

  //*functions
  //generate Password
  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    if (uppercase) {
      characterList += upperCaseChars;
    }
    if (lowercase) {
      characterList += lowerCaseChars;
    }
    if (number) {
      characterList += digitChars;
    }
    if (symbol) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setpassword(passwordResult);
    setisPasswordGenerated(true);
  };
  //create Password
  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let index = 0; index < passwordLength; index++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };
  //reset Password
  const resetPassword = () => {
    setpassword("");
    setisPasswordGenerated(false);
    setlowercase(true);
    setuppercase(false);
    setnumber(false);
    setsymbol(false);
  };

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
