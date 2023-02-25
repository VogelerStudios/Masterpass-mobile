import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CheckoutModal from "../components/CheckoutModal";
import PrimaryButton from "../components/PrimaryButton";

const EventScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        style={styles.topImage}
        source={require("../../assets/Image-3.png")}
      />
      <ScrollView>
      <CheckoutModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        <View style={styles.details}>
          <Text style={styles.info}>2000s Latin Night</Text>
          <Text style={styles.date}>📆 28 Feb - 7:00 PM</Text>
          <Text style={styles.location}>📍 Miami Beach</Text>
        </View>
        <View style={styles.organizer}>
          <Image
            style={styles.user}
            source={require("../../assets/User.png")}
          />
          <View>
            <Text style={styles.userName}>John Smith</Text>
            <Text style={styles.role}>Organizer</Text>
          </View>
        </View>
        <View style={[styles.loginWithLine, { marginLeft: 40 }]} />
        <Text style={styles.eventDescription}>
          Morbi tincidunt pulvinar fames aliquam eti quis volutpat id purus. Dui
          nec eu tortor interdum ultricies viverra feugiat tristique a.
        </Text>
        <Image style={styles.map} source={require("../../assets/Map-2.png")} />
      </ScrollView>
      <PrimaryButton
        title={"Buy Ticket $40"}
        style={{ alignSelf: "center", marginBottom: 40 }}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0FA",
    position: "relative",
  },
  topImage: {
    height: 320,
    width: "100%",
    position: "absolute",
  },
  details: {
    width: 370,
    height: 140,
    alignSelf: "center",
    marginTop: 260,
    backgroundColor: "#FFF",
    borderRadius: 8,
    alignItems: "flex-start",
  },
  info: {
    width: 280,
    marginTop: 20,
    marginLeft: 16,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    color: "#1A202C",
  },
  date: {
    marginTop: 16,
    marginLeft: 16,
    fontSize: 12,
  },
  location: {
    marginTop: 4,
    marginLeft: 16,
    fontSize: 12,
  },
  eventDescription: {
    width: 370,
    marginTop: 24,
    fontWeight: "400",
    fontSize: 14,
    color: "#718096",
    alignSelf: "center",
  },
  map: {
    width: 370,
    height: 120,
    marginTop: 24,
    alignSelf: "center",
  },
  organizer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 28,
    marginBottom: 16,
  },
  user: {
    width: 44,
    height: 44,
    marginRight: 12,
  },
  loginWithLine: {
    borderBottomColor: "#E2E8F0",
    borderBottomWidth: 2,
    marginTop: 14,
    height: 1,
    marginRight: 28,
  },
  userName: {
    fontWeight: "700",
    fontSize: 14,
    color: "#1A202C",
  },
  role: {
    fontSize: 12,
    color: "#718096",
  },
});

export default EventScreen;
