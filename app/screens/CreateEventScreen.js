import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryTextInput from "../components/PrimaryTextInput";

const CreateEventScreen = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (newText) => {
    setCardNumber(newText);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}> MasterPass </Text>
        <ScrollView style={{ minHeight: "100%" }} showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>Create Event </Text>
          <PrimaryTextInput
            placeholder="Event Name"
            onChangeText={handleCardNumberChange}
            value={"Event Name"}
            style={{ marginTop: 24 }}
          />
          <PrimaryTextInput
            placeholder="Category"
            onChangeText={handleCardNumberChange}
            value={"Category"}
            style={{ marginTop: 24 }}
          />
          <PrimaryTextInput
            placeholder="Address"
            onChangeText={handleCardNumberChange}
            value={"Address"}
            style={{ marginTop: 24 }}
          />
          <PrimaryTextInput
            placeholder="Description"
            onChangeText={handleCardNumberChange}
            value={"Description"}
            style={{ marginTop: 24 }}
          />
          <PrimaryTextInput
            placeholder="Price"
            onChangeText={handleCardNumberChange}
            value={"Price"}
            style={{ marginTop: 24 }}
          />
          <PrimaryTextInput
            placeholder="Royalty"
            onChangeText={handleCardNumberChange}
            value={"Royalty From Resales"}
            style={{ marginTop: 24 }}
          />

          <PrimaryTextInput
            placeholder="Date"
            onChangeText={handleCardNumberChange}
            value={"Date"}
            style={{ marginTop: 24 }}
          />
          <PrimaryTextInput
            placeholder="Time"
            onChangeText={handleCardNumberChange}
            value={"Time"}
            style={{ marginTop: 24 }}
          />

          <PrimaryTextInput
            placeholder="Number of Tickets"
            onChangeText={handleCardNumberChange}
            value={"Number of Tickets"}
            style={{ marginTop: 24 }}
          />

          <PrimaryButton
            title={"Create"}
            style={{ marginTop: 24, marginBottom: 200 }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0FA",
    alignItems: "center",
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
    marginLeft: -16,
    fontWeight: "700",
    fontSize: 24,
    color: "#455AF7",
  },
});

export default CreateEventScreen;
