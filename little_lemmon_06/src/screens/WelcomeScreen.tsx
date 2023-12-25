import * as React from "react";
import { Text, View } from "react-native";

type WelcomeScreenProps = {
  navigation: any;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text> Welcome</Text>
    </View>
  );
};

export default WelcomeScreen;
