import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const CategorySelector = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.itemBox}>🏀 Sports</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.itemBox}>🎸 Concerts</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.itemBox}>🎨 Art</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.itemBox}>🕺 Nightlife</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.itemBox}>🌎 Community</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 14,
    height: 40,
  },
  itemBox: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontWeight: "600",
    fontSize: 14,
  },
});

export default CategorySelector;
