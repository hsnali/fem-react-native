import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Thumbnail = ({ color }) => (
  <View style={[styles.thumbnail, { backgroundColor: color }]} />
);

const styles = StyleSheet.create({
  thumbnail: {
    padding: 20,
    marginRight: 10,
  },
});

export default Thumbnail;
