import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./app/components/Tabs";
import StartScreen from "./app/screens/StartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  if (isLogin) {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
          /> */}
          <Stack.Screen name="SignUp">
            {(props) => <SignUpScreen isLogged={isLogin} logUser={setIsLogin}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
