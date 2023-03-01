import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Ticket from "../components/Ticket";

const TicketScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}> MasterPass </Text>
        <ScrollView style={{ minHeight: "100%" }}>
          <Text style={styles.header}>My Tickets</Text>
          <Ticket />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0FA",
  },
  header: {
    marginTop: 40,
    fontWeight: "700",
    fontSize: 16,
    color: "#1A202C",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  title: {
    marginTop: 12,
    marginLeft: 24,
    fontWeight: "700",
    fontSize: 24,
    color: "#455AF7",
  },
});

export default TicketScreen;
