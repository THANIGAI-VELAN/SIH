import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { useRouter } from "expo-router";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TempleDetail() {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const historyText =
    "Chennimalai Murugan Temple is an ancient hill temple dedicated to Lord Muruga. " +
    "It is renowned for its rich heritage, beautiful architecture, and religious significance. " +
    "The temple is believed to have been constructed during the Sangam period and stands as a " +
    "symbol of Tamil culture and devotion. Pilgrims climb hundreds of steps to reach the sanctum. " +
    "Festivals like Thaipusam attract thousands of devotees every year, celebrating with music, rituals, and grand processions.";

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Image */}
      <Image
        source={require("../assets/images/temple1.png")}
        style={styles.topImage}
        resizeMode="cover"
      />

      {/* AR View Button */}
      <Pressable style={styles.arButton} onPress={() => router.push("/ARView")}>
        <Ionicons name="cube-outline" size={20} color="#fff" style={{ marginRight: 6 }} />
        <Text style={styles.arText}>AR View</Text>
      </Pressable>

      {/* Title & Description */}
      <View style={styles.content}>
        <Text style={styles.title}>Chennimalai Murugan 
          Temple:</Text>
        <Text style={styles.description}>
          A sacred hilltop temple known for its architectural beauty and spiritual
          significance. Famous for its breathtaking sunrise views.
        </Text>

        {/* History Section */}
        <View style={styles.historyContainer}>
          <Pressable style={styles.historyHeader} onPress={toggleExpand}>
            <Text style={styles.historyTitle}>History</Text>
            <Ionicons
              name={expanded ? "chevron-up" : "chevron-down"}
              size={22}
              color="#333"
            />
          </Pressable>
          <Text numberOfLines={expanded ? undefined : 3} style={styles.historyText}>
            {historyText}
          </Text>
          {!expanded && (
            <Text style={styles.seeMore} onPress={toggleExpand}>
              See More
            </Text>
          )}
        </View>

        {/* Map View */}
        <Text style={[styles.title, { marginBottom: 12 }]}>Location</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 11.2104, // Example coordinates
              longitude: 77.5440,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
           
            <Marker
              coordinate={{ latitude: 11.2104, longitude: 77.5440 }}
              title="Chennimalai Murugan Temple"
              description="Historic Murugan temple on a hill"
            />
          </MapView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topImage: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  arButton: {
    position: "absolute",
    top: 210,
    right: 20,
    backgroundColor: "#1c3d32",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  arText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  content: { padding: 16 },
  title: { fontSize: 24, fontWeight: "700", color: "#222", marginBottom: 8 },
  description: { fontSize: 16, color: "#555", marginBottom: 20 },
  historyContainer: {
    backgroundColor: "#f8f8f8",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  historyTitle: { fontSize: 20, fontWeight: "600", color: "#333" },
  historyText: { fontSize: 15, color: "#555", lineHeight: 22 },
  seeMore: { color: "#007aff", marginTop: 6, fontWeight: "500" },
  mapContainer: {
    height: 250,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  map: { flex: 1 },
});
