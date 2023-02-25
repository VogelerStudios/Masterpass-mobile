import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import TicketModal from "./TicketModal";

const Ticket = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.ticketContainer}>
      <TicketModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => setModalVisible(true)}
      >
        <ImageBackground
          style={styles.image}
          imageStyle={{ resizeMode: "contain" }}
          source={require("../../assets/Ticket.png")}
        >
          <Text style={styles.eventTitle}>Disco Tehran - Goodbye Party </Text>
          <Text style={styles.date}>23 Oct - 08:00 PM</Text>
          <Text style={styles.number}>Number of Tickets: 1</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    marginTop: 18,
    alignItems: "center",
  },
  image: {
    width: 370,
    height: 140,
  },
  eventTitle: {
    width: 220,
    marginTop: 16,
    marginLeft: 16,
    fontWeight: "600",
    fontSize: 12,
    letterSpacing: 0.3,
    color: "#1A202C",
  },
  date: {
    marginTop: 8,
    marginLeft: 16,
    fontSize: 10,
    fontWeight: "400",
    color: "#A0AEC0",
  },
  number: {
    marginTop: 16,
    marginLeft: 16,
    fontSize: 10,
    fontWeight: "400",
  },
});

export default Ticket;
