import React from "react";
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

const HomeScreen = () => {
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
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
          </ScrollView>
          <Text style={styles.featuredTitle}>Popular Events</Text>
          <View style={{marginBottom: 80}}>
          <PopularEventCard />
          <PopularEventCard />
          <PopularEventCard />
          <PopularEventCard />
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
