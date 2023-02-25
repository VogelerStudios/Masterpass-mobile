import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, StatusBar } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryTextInput from "../components/PrimaryTextInput";
import SocialLoginButton from "../components/SocialLoginButton";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (newText) => {
    setUsername(newText);
  };
  const handlePasswordChange = (newText) => {
    setPassword(newText);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Hey! Welcome back 👋 </Text>
      <Text style={styles.subtitle}>Sign In to your account</Text>
      <PrimaryTextInput
        placeholder="Email"
        iconName="envelope-o"
        onChangeText={handleUsernameChange}
        value={username}
      />
      <PrimaryTextInput
        placeholder="Password"
        iconName="key"
        isPassword={true}
        onChangeText={handlePasswordChange}
        value={password}
        style={{ marginTop: 12 }}
      />

      <Text style={styles.forgotPassword}> Forgot Password?</Text>

      <PrimaryButton
        title={"Sign In"}
        onPress={() => {
          console.log("Pressed");
        }}
        style={{ marginTop: 24 }}
      />

      <View style={styles.loginWithContainer}>
        <View style={[styles.loginWithLine, { marginLeft: 40 }]} />
        <Text style={styles.loginWith}> Or login with </Text>
        <View style={[styles.loginWithLine, { marginRight: 40 }]} />
      </View>

      <SocialLoginButton
        title={"Continue with Apple"}
        src={require("../../assets/apple.png")}
        onPress={() => {
          console.log("Pressed");
        }}
      />
      <SocialLoginButton
        title={"Continue with Google"}
        src={require("../../assets/google.png")}
        onPress={() => {
          console.log("Pressed");
        }}
      />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Don’t have an account?</Text>
        <Text style={styles.bottomTextLink}>Sign Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 110,
    width: 370,
    textAlign: "left",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: 0.3,
    color: "#1A202C",
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 24,
    textAlign: "left",
    width: 370,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.3,
    color: "#718096",
  },
  forgotPassword: {
    width: 370,
    marginTop: 16,
    fontSize: 12,
    textAlign: "right",
    fontStyle: "normal",
    fontWeight: "700",
    color: "#455AF7",
  },
  loginWith: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 0.3,
    color: "#4A5568",
    flex: 1,
  },
  loginWithContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 24,
  },
  loginWithLine: {
    borderBottomColor: "#E2E8F0",
    borderBottomWidth: 1,
    flex: 0.5,
    marginTop: 14,
    height: 1,
  },
  bottomTextContainer: {
    width: 370,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: "center",
    marginTop: "35%",
},
  bottomText: {
    fontSize: 12,
    color: "#4A5568",
    letterSpacing: 0.3,
  },
  bottomTextLink: {
    paddingLeft: 10,
    fontSize: 12,
    color: "#455AF7",
    letterSpacing: 0.3,
  },
});

export default LoginScreen;
