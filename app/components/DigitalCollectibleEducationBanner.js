import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const DigitalCollectibleEducationBanner = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/dgbannerbackground.png")}
      >
        <Text style={styles.title}>
          Unlock the full power of your digital tickets{" "}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 28,
          }}
        >
          <Image
            style={styles.play}
            source={require("../../assets/play.png")}
          />
          <Text style={styles.text}>Learn more about NFTs</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignSelf: "center",
    borderRadius: 8,
  },
  image: {
    width: 370,
    height: 150,
    borderRadius: 8,
    justifyContent: "center",
  },
  play: {
    width: 20,
    height: 20,
    marginLeft: 24,
  },
  title: {
    width: 220,
    marginLeft: 24,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    color: "#FFFFFF",
  },
  text: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default DigitalCollectibleEducationBanner;
