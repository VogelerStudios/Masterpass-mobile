import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SocialLoginButton from "../components/SocialLoginButton";

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={require("../../assets/StartScreenTopImage.png")}
      />
      <Text style={styles.title}>Let’s Get Started</Text>
      <Text style={styles.subtitle}>
        Sign up or login into see what’s happening near you
      </Text>
      <PrimaryButton
        title={"Continue with Email"}
        onPress={() => {
          console.log("Pressed");
        }}
      />
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
      <Text style={styles.bottomText}>
        By signing up or logging in, I accept MasterPass' Terms of Service and
        Privacy Policy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative",
  },
  title: {
    marginTop: 120,
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: 0.3,
    color: "#1A202C",
  },
  subtitle: {
    width: 370,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.3,
    textAlign: "center",
    color: "#718096",
    marginTop: 10,
    marginBottom: 40,
  },
  bottomText: {
    width: 370,
    position: "absolute",
    bottom: 36,
    fontSize: 10,
    color: "#4A5568",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  topImage: {
    position: "absolute",
    height: 480,
    top: 0,
    resizeMode: "contain",
  },
});

export default StartScreen;
