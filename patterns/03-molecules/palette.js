import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';

import { ColorBox } from '@root/patterns/02-atoms/colorBox/colorBox';

export const Palette = ({ title, colors }) => (
  <View>
    <Text style={utilStyles.subHeading}>{title}</Text>
    <FlatList
      data={colors}
      keyExtractor={(color) => color.colorName}
      renderItem={({ item }) => <ColorBox {...item} />}
    />
  </View>
);

export default Palette;
