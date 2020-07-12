import React from 'react';
import { View, Text } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';

export const Thumbnail = ({ color, style }) => (
  <View style={[utilStyles.thumbnail, { backgroundColor: color }, style]}>
    <Text style={utilStyles.invisible}>{color}</Text>
  </View>
);

export default Thumbnail;
