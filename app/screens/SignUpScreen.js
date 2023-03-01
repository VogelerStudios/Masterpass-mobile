import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryTextInput from "../components/PrimaryTextInput";
import SocialLoginButton from "../components/SocialLoginButton";
import { createCircleWallet, createFlowWallet } from "../utils/OpenPGP";

const SignUpScreen = ({ navigation, isLogged, logUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (newText) => {
    setUsername(newText);
  };
  const handlePasswordChange = (newText) => {
    setPassword(newText);
  };
  const walletsAlert = (address, onPress) =>
    Alert.alert(
      "Flow Wallet Address:",
      address,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Continue",
          onPress: () => {
            onPress(true);
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Create an account </Text>

      <PrimaryTextInput
        placeholder="Email"
        iconName="envelope-o"
        onChangeText={handleUsernameChange}
        value={username}
        style={{ marginTop: 30 }}
      />
      <PrimaryTextInput
        placeholder="Password"
        iconName="key"
        isPassword={true}
        onChangeText={handlePasswordChange}
        value={password}
        style={{ marginTop: 12 }}
      />

      <PrimaryTextInput
        placeholder="Confirm Password"
        iconName="key"
        isPassword={true}
        onChangeText={handlePasswordChange}
        value={password}
        style={{ marginTop: 12 }}
      />

      <PrimaryButton
        title={"Sign Up"}
        onPress={async () => {
          createCircleWallet().then((circleWallet) => {
            createFlowWallet(circleWallet.data.walletId).then((response) => {
              const flowAddress = response.data.address;
              // console.info("circleWallet: ", circleWallet);
              // console.info("flowAddress: ", flowAddress);
              walletsAlert(flowAddress, logUser);
            });
          });
        }}
        style={{ marginTop: 24 }}
      />

      <View style={styles.loginWithContainer}>
        <View style={[styles.loginWithLine, { marginLeft: 40 }]} />
        <Text style={styles.loginWith}> Or sign up with </Text>
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
        <Text style={styles.bottomText}>Have an account?</Text>
        <Text
          style={styles.bottomTextLink}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 80,
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
    flexDirection: "row",
    flexWrap: "wrap",
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

export default SignUpScreen;
