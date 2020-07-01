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
      keyExtractor={(color) => color.name}
      renderItem={({ item }) => {
        const { name, code } = item;
        return <ColorBox name={name} code={code} />;
      }}
    />
  </View>
);

export default Palette;
