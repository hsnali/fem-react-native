import React from 'react';
import { View, StyleSheet } from 'react-native';

// Local
import { Palette } from '@molecules/palette';
import { COLORS } from '@root/constants';

export const ColorPalette = (props) => (
  <View style={styles.container}>
    <Palette title="Solarised" colors={COLORS} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
});

export default ColorPalette;
