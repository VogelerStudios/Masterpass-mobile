import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import TicketScreen from "../screens/TicketScreen";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Tickets") {
            iconName = "copy";
          } else if (route.name === "Settings") {
            iconName = "settings-sharp";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#455AF7",
        tabBarInactiveTintColor: "#CACACA",
        tabBarStyle: {
          position: "absolute",
          height: 80,
          elevation: 0,
          backgroundColor: "#FFFFFF",
          borderTopColor: "#FFFFFF",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tickets" component={TicketScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
