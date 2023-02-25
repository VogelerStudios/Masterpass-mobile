import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import PrimaryTextInput from "./PrimaryTextInput";

const CheckoutModal = ({ modalVisible, setModalVisible }) => {
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (newText) => {
    setCardNumber(newText);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{ alignSelf: "flex-end", fontWeight: "700" }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>X</Text>
            </Pressable>
            <Text style={{fontWeight: "600"}}> Complete Payment </Text>
            <PrimaryTextInput
              placeholder="Card Number"
              iconName="credit-card"
              onChangeText={handleCardNumberChange}
              value={cardNumber}
              style={{
                marginTop: 18,
              }}
            />
            <View
              style={{
                direction: "flex",
                flexDirection: "row",
                marginTop: 18,
                alignItems: "flex-end",
              }}
            >
              <PrimaryTextInput
                placeholder="MM/YY"
                onChangeText={handleCardNumberChange}
                value={cardNumber}
                style={{ width: "40%" }}
              />
              <PrimaryTextInput
                placeholder="CVV"
                onChangeText={handleCardNumberChange}
                value={cardNumber}
                style={{ width: "40%", marginLeft: 44 }}
              />
            </View>
            <PrimaryButton
              title={"Confirm $40"}
              onPress={() => {
                console.log("Pressed");
              }}
              style={{ marginTop: 24 }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CheckoutModal;
