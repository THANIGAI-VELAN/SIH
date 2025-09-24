import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../Components/theme';

interface Props {
  title: string;
  onBack?: () => void;
}

export const CustomNavBar: React.FC<Props> = ({title, onBack}) => (
  <View style={styles.container}>
    {onBack && (
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>{'‹'}</Text>
      </TouchableOpacity>
    )}
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.background,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  back: {fontSize: 28, marginRight: 12, color: COLORS.primary},
  title: {fontSize: 18, fontWeight: '600', color: COLORS.text},
});
