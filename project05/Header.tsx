import React from "react";
import { StyleSheet, Text } from "react-native";

const Header: React.FC = () => (
  <Text style={menuStyles.headerText}>
    This is the header of this application
  </Text>
);

const menuStyles = StyleSheet.create({
  headerText: {
    color: "#000000",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  }
});

export default Header;
