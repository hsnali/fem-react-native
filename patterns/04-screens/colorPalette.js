import React from 'react';
import { View } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';
import { Palette } from '@molecules/palette';

export const ColorPalette = ({ route: { params } }) => (
  <View style={utilStyles.container}>
    <Palette title={params.name} colors={params.colors} />
  </View>
);

export default ColorPalette;
