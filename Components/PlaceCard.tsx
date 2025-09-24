import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, RADIUS} from '../Components/theme';

interface Props {
  image: string;
  title: string;
  onPress: () => void;
}

export const PlaceCard: React.FC<Props> = ({image, title, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{uri: image}} style={styles.img} />
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 12,
    borderRadius: RADIUS,
    overflow: 'hidden',
    backgroundColor: COLORS.background,
    elevation: 2,
  },
  img: {width: '100%', height: 100},
  title: {padding: 8, fontWeight: '600', color: COLORS.text},
});
