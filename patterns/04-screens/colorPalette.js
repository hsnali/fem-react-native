import React from 'react';
import { View, StyleSheet } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';
import { Palette } from '@root/patterns/03-molecules/palette';
import { SOLARISED } from '@base/constants/colors';

export const ColorPalette = ({ route: { params } }) => (
  <View style={utilStyles.container}>
    <Palette title={params.name} colors={params.colors} />
  </View>
);

export default ColorPalette;
