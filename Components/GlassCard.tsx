import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Animated,
} from 'react-native';
import { BlurView } from 'expo-blur';

type Props = {
  image: any;           // require('../assets/images/temple1.png')
  title: string;
  description: string;
  onSeeMore?: () => void;
};

export default function GlassCard({ image, title, description, onSeeMore }: Props) {
  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.shadowContainer, { transform: [{ scale }] }]}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onSeeMore}
        style={{ borderRadius: 16, overflow: 'hidden' }}
      >
        <BlurView intensity={70} tint="light" style={styles.glassCard}>
          {/* Left Image Section */}
          <Image source={image} style={styles.image} />

          {/* Right Text Section */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description} numberOfLines={2}>
              {description}
            </Text>
            <Text style={styles.seeMore}>See more</Text>
          </View>
        </BlurView>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    margin: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6, // Android shadow
  },
  glassCard: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 12,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '25%',          // one-fourth of container width
    aspectRatio: 1,
    borderRadius: 12,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
  },
  seeMore: {
    fontSize: 14,
    color: '#1E90FF',
    fontWeight: '600',
  },
});
