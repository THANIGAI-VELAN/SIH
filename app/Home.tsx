import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';

import { useFonts, Ovo_400Regular } from '@expo-google-fonts/ovo';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const exploreImages = [
  require('../assets/images/temple1.png'),
  require('../assets/images/temple2.png'),
  require('../assets/images/temple3.png'),
];

const placeList = [
  { name: 'Madurai', img: require('../assets/images/temple1.png') },
  { name: 'Chennai', img: require('../assets/images/temple2.png') },
  { name: 'Thanjore', img: require('../assets/images/temple3.png') },
  { name: 'Odisha', img: require('../assets/images/temple4.jpg') },
  
];
const carouselData = [
    { id: 1, image: require("../assets/images/temple1.png") },
    { id: 2, image: require("../assets/images/temple2.png") },
    { id: 3, image: require("../assets/images/temple3.png") },
  ];


export default function HomeScreen() {
   const scrollX = useRef(new Animated.Value(0)).current;
 
  const [fontsLoaded] = useFonts({ Ovo_400Regular });
  const scaleAnim = useRef(new Animated.Value(1)).current;

  if (!fontsLoaded) return null;

  const renderExploreItem = ({ item }: any) => (
    <TouchableOpacity activeOpacity={0.8}>
      <Image source={item} style={styles.carouselImage} />
    </TouchableOpacity>
  );

  const handlePressIn = () => {
    Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi ! Traveller</Text>
        <Image source={require('../assets/images/profile.png')} style={styles.profile} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={22} color="#fff" style={styles.searchIcon} />
        <TextInput
          placeholder="Search by City or State"
          placeholderTextColor="#ccc"
          style={styles.searchInput}
        />
      </View>

      {/* Explore Carousel */}
       {/* Explore */}
      <Text style={styles.sectionTitle}>Explore</Text>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        style={styles.carousel}
      >
        {carouselData.map((item) => (  
           <View key={item.id} style={styles.carouselCard}>
            <Image source={item.image} style={styles.carouselImage} />
          </View>
        ))}
      </Animated.ScrollView>
   

      {/* Places Row */}
      <Text style={styles.sectionTitle}>Places</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.placesRow}>
        {placeList.map((p, idx) => (
          <View key={idx} style={styles.placeItem}>
            <Image source={p.img} style={styles.placeCircle} />
            <Text style={styles.placeText}>{p.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Featured Cards */}
      {placeList.map((p, idx) => (
        <TouchableOpacity
          key={idx}
          activeOpacity={0.9}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.featureContainer}
          
        >
          <Animated.View style={[styles.featureInner, { transform: [{ scale: scaleAnim }] }]}>
            <Image source={p.img} style={styles.featureImage} />
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>{p.name}</Text>
              <Text style={styles.featureDesc} numberOfLines={3}>
                Discover ancient architecture and rich heritage with vibrant traditions.
              </Text>
              <Text style={styles.seeMore}>Tap to see more</Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 32,
    fontFamily: 'Ovo_400Regular',
    color: '#222',
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000000',
    borderWidth: 1,
   
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e3d36',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  searchIcon: { marginRight: 6 },
  searchInput: {
    flex: 1,
    color: '#fff',
    padding: 0,
    fontSize: 16,
  },
  sectionTitle: {
    fontFamily: 'Ovo_400Regular',
    fontSize: 20,
    color: '#333',
    marginBottom: 12,
  },
  
   carousel: { marginBottom: 20 },
  carouselCard: {
    width: width * 0.8,
    height: 180,
    marginRight: 15,
    borderRadius: 20,
    borderWidth: 0.5,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 1.6,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  carouselImage: { 
    width: "100%", 
    height: "100%",
    resizeMode: "cover",
    borderRadius: 15,
    backgroundColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
    
    },
  placeCard: {
     backgroundColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#eee",
  },

  placesRow: { marginBottom: 20 },
  placeItem: { alignItems: 'center', marginRight: 16 },
  placeCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ddd',
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#000000',

  },
  placeText: {
    fontFamily: 'Ovo_400Regular',
    fontSize: 14,
    color: '#444',
  },
  featureContainer: {
    marginBottom: 20,
  },
  featureInner: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    overflow: 'hidden',
  },
  featureImage: {
    width: 130,
    height: 140,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  featureContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  featureTitle: {
    fontSize: 18,
    fontFamily: 'Ovo_400Regular',
    marginBottom: 6,
    color: '#222',
  },
  featureDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
    marginBottom: 4,
  },
  seeMore: {
    fontSize: 14,
    color: '#1a73e8',
    fontWeight: '500',
  },
});
