import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import CategorySelector from "../components/CategorySelector";
import DigitalCollectibleEducationBanner from "../components/DigitalCollectibleEducationBanner";
import FeaturedCard from "../components/FeaturedCard";
import PopularEventCard from "../components/PopularEventCard";
import { BASE_URL } from "@env";

const HomeScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const url =
      BASE_URL;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setEvents(json))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.title}> MasterPass </Text>
          <CategorySelector />
          <DigitalCollectibleEducationBanner />
          <Text style={styles.featuredTitle}>Featured</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            centerContent={true}
          >
            {events.slice(0, 3).map((event, i) => (
              <FeaturedCard
                key={i}
                idx={i}
                event={event}
                onPress={() => {
                  navigation.navigate("EventScreen");
                }}
              />
            ))}
          </ScrollView>
          <Text style={styles.featuredTitle}>Popular Events</Text>
          <View style={{ marginBottom: 80 }}>
            {events.slice(4, 8).map((event, i) => (
              <PopularEventCard event={event} key={i} />
            ))}
          </View>
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
  title: {
    marginTop: 12,
    marginLeft: 24,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    color: "#455AF7",
  },
  featuredTitle: {
    marginTop: 24,
    marginLeft: 24,
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 0.3,
    color: "#1A202C",
  },
});

export default HomeScreen;
