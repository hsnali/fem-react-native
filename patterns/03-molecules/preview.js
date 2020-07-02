import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';
import { Thumbnail } from '@atoms/thumbnail';

const getSubset = (items = [], length = 5) =>
  items.slice(0, items.length < length ? items.length : length);

export const Preview = ({ paletteName, colors, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={utilStyles.spacer}>
      <Text style={utilStyles.sectionHeading}>{paletteName}</Text>
      <FlatList
        data={getSubset(colors, 5)}
        keyExtractor={(color) => color.colorName}
        horizontal={true}
        contentContainerStyle={utilStyles.previews}
        renderItem={({ item }) => <Thumbnail color={item.hexCode} />}
      />
    </View>
  </TouchableOpacity>
);

export default Preview;
