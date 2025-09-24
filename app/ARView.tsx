import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function ARView() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* --- Background placeholder for AR camera feed --- */}
      <ImageBackground
        source={require("../assets/images/temple1.png")} // Placeholder image
        style={styles.bg}
        resizeMode="cover"
      >
        {/* Overlay to darken slightly for contrast */}
        <View style={styles.overlay} />

        {/* --- Top Header with Back Arrow --- */}
        <View style={styles.header}>
          <Pressable onPress={() => router.push("/ARView")} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </Pressable>
          <Text style={styles.headerTitle}>AR View of the Temple</Text>
        </View>

        {/* --- Main Content Overlay (optional instructions) --- */}
        <View style={styles.bottomPanel}>
          <Text style={styles.infoText}>
            Point your device towards the temple surroundings to experience the
            AR model. (Placeholder screen for now)
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  bg: { width, height, justifyContent: "space-between" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  bottomPanel: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 0,
  },
  infoText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    lineHeight: 22,
  },
});
