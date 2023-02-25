import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const FeaturedCard = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/featuredPlaceholder.jpg")}
        imageStyle={{borderTopRightRadius: 8, borderTopLeftRadius:8}}
      >
        <View style={styles.date}>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>28</Text>
          <Text style={{ fontWeight: "400", fontSize: 10 }}>Feb</Text>
        </View>
      </ImageBackground>
      <Text style={{ marginTop:12, marginLeft:16, fontWeight: "700", fontSize: 16 }}>
        Wynwood Collector's Party
      </Text>
      <Text style={{ marginLeft:16, fontWeight: "400", fontSize: 14, color:"#718096" }}>📍Miami</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 240,
    marginTop: 14,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    marginLeft: 24,
  },
  image: {
    height: 160,
    alignItems: "flex-end",
  },
  date: {
    width: 48,
    height: 48,
    marginTop: 14,
    marginRight: 14,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
});

export default FeaturedCard;
