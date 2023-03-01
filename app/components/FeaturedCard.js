import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const FeaturedCard = ({ onPress, event }) => {
  const date = new Date(event.date);
  const options = { month: "long" };
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <ImageBackground
          style={styles.image}
          source={{ uri: event.eventPhotoURL}}
          imageStyle={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
        >
          <View style={styles.date}>
            <Text style={{ fontWeight: "700", fontSize: 14 }}>
              {date.getDay()}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 10 }}>
              {new Intl.DateTimeFormat("en-US", options).format(
                date.getMonth()
              ).slice(0,3)}
            </Text>
          </View>
        </ImageBackground>
        <Text
          style={{
            marginTop: 12,
            marginLeft: 16,
            fontWeight: "700",
            fontSize: 16,
          }}
        >
          {event.name}
        </Text>
        <Text
          style={{
            marginLeft: 16,
            fontWeight: "400",
            fontSize: 14,
            color: "#718096",
          }}
        >
          📍{event.city}
        </Text>
      </Pressable>
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
