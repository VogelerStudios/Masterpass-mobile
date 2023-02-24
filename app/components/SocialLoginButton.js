import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const SocialLoginButton = ({ title, onPress, src }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.logo} source={src} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 10,
    width: 360,
    height: 60,
    background: "#FFFFFF",
    borderColor: "#E2E8F0",
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 12,
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
    color: "#1A202C",
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: "contain",
  },
});

export default SocialLoginButton;
