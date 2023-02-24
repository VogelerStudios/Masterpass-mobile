import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PrimaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
    backgroundColor: "#455AF7",
    borderRadius: 16,
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default PrimaryButton;
