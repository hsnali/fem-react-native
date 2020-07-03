import React from 'react';
import { View, Text, Switch } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';
import { Thumbnail } from '@atoms/thumbnail';

export const ColorToggle = ({ colorName, hexCode }) => (
  <View style={utilStyles.switchFields}>
    <View style={utilStyles.rowFieldMinimal}>
      <Thumbnail color={hexCode} style={utilStyles.thumbnailSmall} />
      <Text>{colorName}</Text>
    </View>
    <Switch />
  </View>
);

export default ColorToggle;
