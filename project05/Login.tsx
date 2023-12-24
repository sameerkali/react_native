import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const Login: React.FC = () => {
  const [email, onEmail] = useState("");
  const [password, onPassword] = useState("");
  const [login, setLogin] = useState<boolean>(false);

  const toggle = () => {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.headingSection}>Login to continue...</Text>
      {login && (
        <ScrollView keyboardDismissMode="on-drag">
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={onEmail}
            placeholder="john@example.com"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={onPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Image style={styles.image} source={require('./img/cover.png')} />
          
        </ScrollView>
      )}
      <TouchableOpacity onPress={toggle}>
        <View style={styles.headingSection}  >
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "black"
  },
  headerText: {
    color: "gray",
    fontSize: 40,
    flexWrap: "wrap",
    textAlign: "center"
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 36
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#F4CE14"
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14"
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57"
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57"
  },
  image: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginHorizontal: 50,
    marginVertical: 50 
  } 
});

export default Login;
