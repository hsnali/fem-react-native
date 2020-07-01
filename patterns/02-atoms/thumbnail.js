import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Thumbnail = ({ color }) => (
  <View style={[styles.thumbnail, { backgroundColor: color }]} />
);

const styles = StyleSheet.create({
  thumbnail: {
    width: 70,
    height: 70,
    // marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});

export default Thumbnail;
