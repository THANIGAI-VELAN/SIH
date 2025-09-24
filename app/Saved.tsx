import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const places = [
  {
    id: "1",
    title: "Chennimalai Temple",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate lorem vel interdum aliquet.",
    image: require("../assets/images/temple1.png"),
  },
  {
    id: "2",
    title: "Mahabalipuram",
    description:
      "Ancient rock-cut marvels, beautiful shore temples and stories carved in stone await you here.",
    image: require("../assets/images/temple2.png"),
  },
];

export default function Saved() {
  const router = useRouter();

  const renderPlace = ({ item }: { item: typeof places[0] }) => (
    <Pressable
      onPress={() => router.push({ pathname: "/Details", params: { id: item.id } })}
      style={styles.card}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.arButton}>
            <Text style={styles.arText}>AR View</Text>
          </View>
        </View>
        <Text style={styles.cardDesc} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.seeMore}>See More...</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Saved Places</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#fff" style={{ marginHorizontal: 6 }} />
        <TextInput
          placeholder="Search by City or State"
          placeholderTextColor="#d9d9d9"
          style={styles.input}
        />
      </View>

      {/* Places List */}
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={renderPlace}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 10,
    color: "#000",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c3d32",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    paddingVertical: 0,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  arButton: {
    backgroundColor: "#1c3d32",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  arText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  cardDesc: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  seeMore: {
    color: "#007aff",
    fontSize: 14,
    marginTop: 4,
    fontWeight: "500",
  },
});
