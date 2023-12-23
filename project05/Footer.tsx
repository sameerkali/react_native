import React from "react";
import { StyleSheet, Text } from "react-native";

const Footer: React.FC = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by @sameerkali 2024
  </Text>
);

const menuStyles = StyleSheet.create({
  footerText: {
    color: "#000000",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  }
});

export default Footer;
