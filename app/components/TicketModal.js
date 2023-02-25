import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";

const TicketModal = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{ alignSelf: "flex-end", fontWeight: "700" }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.x}>X</Text>
            </Pressable>
            <Text style={{ fontWeight: "600" }}>Ticket</Text>
            <Image
              style={styles.image}
              source={require("../../assets/QRCode.png")}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  modalView: {
    width: "90%",
    height: "45%",
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
  x: {
    width: 20,
    height: 20,
  },
  image: {
    width: 240,
    height: 240,
    marginTop: 24,
    borderRadius: 8,
    borderColor: "#455AF7",
    borderWidth: 6,
  },
});

export default TicketModal;
