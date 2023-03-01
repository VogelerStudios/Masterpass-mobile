import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeEventNavigator from "../HomeEventNavigation";
import CreateEventScreen from "../screens/CreateEventScreen";
import TicketScreen from "../screens/TicketScreen";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Tickets") {
            iconName = "copy";
          } else if (route.name === "Events") {
            iconName = "add-circle-outline";
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
      <Tab.Screen name="Home" component={HomeEventNavigator} />
      <Tab.Screen name="Tickets" component={TicketScreen} />
      <Tab.Screen name="Events" component={CreateEventScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
