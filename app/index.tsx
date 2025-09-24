import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/templeHome.png")}
      style={styles.bg}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Explore Tamil Nadu</Text>
        <Text style={styles.subtitle}>A state rich in culture & heritage</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.replace("/Home")}
        >
          <Text style={styles.btnText}>Let’s Go →</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "center", alignItems: "center" },
  overlay: { alignItems: "center", paddingHorizontal: 30 },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#f0f0f0",
    textAlign: "center",
    marginBottom: 40,
  },
  btn: {
    backgroundColor: "#e63946",
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 30,
  },
  btnText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
