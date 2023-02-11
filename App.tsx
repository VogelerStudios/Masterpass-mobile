import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Urbanist_700Bold } from "@expo-google-fonts/urbanist";

export default function App() {
  // Reference: https://www.npmjs.com/package/@expo-google-fonts/urbanist
  let [fontsLoaded] = useFonts({
    Urbanist_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  <View style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Urbanist_700Bold",
  },
});
