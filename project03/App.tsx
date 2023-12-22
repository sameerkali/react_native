import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from "formik";

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "should be at least 4 characters")
    .max(16, "should be max of 16 characters")
    .required("length is required")
});

const App = () => {
  // states
  const [password, setpassword] = useState("");
  const [isPasswordGenerated, setisPasswordGenerated] = useState(false);
  const [lowercase, setlowercase] = useState(false);
  const [uppercase, setuppercase] = useState(false);
  const [number, setnumber] = useState(false);
  const [symbol, setsymbol] = useState(false);

  //* functions
  // generate Password
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
  // create Password
  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let index = 0; index < passwordLength; index++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };
  // reset Password
  const resetPassword = () => {
    setpassword("");
    setisPasswordGenerated(false);
    setlowercase(true);
    setuppercase(false);
    setnumber(false);
    setsymbol(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: "" }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              generatePasswordString(Number(values.passwordLength));
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange("passwordLength")}
                    placeholder="8"
                    keyboardType="numeric"
                  />
                </View>
                {/* 1 */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase</Text>
                  <BouncyCheckbox
                    isChecked={lowercase}
                    onPress={() => setlowercase(!lowercase)}
                    fillColor="#FED85D"
                  />
                </View>
                {/* 2 */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include uppercase</Text>
                  <BouncyCheckbox
                    isChecked={uppercase}
                    onPress={() => setuppercase(!uppercase)}
                    fillColor="green"
                  />
                </View>
                {/* 3 */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include number</Text>
                  <BouncyCheckbox
                    isChecked={number}
                    onPress={() => setnumber(!number)}
                    fillColor="red"
                  />
                </View>
                {/* 4 */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    isChecked={symbol}
                    onPress={() => setsymbol(!symbol)}
                    fillColor="purple"
                  />
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  formContainer: {
    margin: 8,
    padding: 8
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 15
  },
  subTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 2
  },
  description: {
    color: "#758283",
    marginBottom: 8
  },
  heading: {
    fontSize: 15
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  inputColumn: {
    flexDirection: "column"
  },
  inputStyle: {
    padding: 8,
    width: "30%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#16213e"
  },
  errorText: {
    fontSize: 12,
    color: "#ff0d10"
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "center"
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#5DA3FA"
  },
  primaryBtnTxt: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#CAD5E2"
  },
  secondaryBtnTxt: {
    textAlign: "center"
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12
  },
  cardElevated: {
    backgroundColor: "#ffffff",
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
    color: "#000"
  }
});
