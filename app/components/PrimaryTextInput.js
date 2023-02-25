import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PrimaryTextInput = ({ iconName, placeholder, onChangeText, value, isPassword, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon name={iconName} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 60,
    flexDirection: "row",
    gap: 12,
    borderColor: "#E2E8F0",
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    padding: 16,
  },

  icon: {
    marginRight: 10,
    fontSize: 20,
    color: "#999",
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.3,
    color: "#718096",
  },
});

export default PrimaryTextInput;
