import React from "react";
import EventScreen from "./screens/EventScreen";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const HomeEventNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="EventScreen"
        component={EventScreen}
        options={{
          headerShown: true,
          title: "Event Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeEventNavigator;
