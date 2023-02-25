import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PopularEventCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/Image-2.png")}
      />
      <View>
        <Text style={styles.date}>23 Oct - 08:00 PM</Text>
        <Text style={styles.info}>Disco Tehran - Goodbye Party</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 100,
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "#FFF",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 72,
    height: 72,
    marginLeft: 12,
  },
  info: {
    width: 220,
    marginLeft: 16,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    color: "#1A202C"
  },
  date: {
    marginLeft: 16,
    fontSize: 10,
    color: "#455AF7"
  },
});

export default PopularEventCard;
