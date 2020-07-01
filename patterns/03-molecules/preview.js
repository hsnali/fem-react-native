import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';
import { Thumbnail } from '@atoms/thumbnail';

const getSubset = (items = [], length = 5) =>
  items.slice(0, items.length < length ? items.length : length);

export const Preview = ({ navigation, screen, name, colors }) => {
  console.log('*****', colors);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(screen, {
          name,
          colors,
        })
      }
    >
      <View style={utilStyles.spacer}>
        <Text style={utilStyles.sectionHeading}>{name}</Text>
        <FlatList
          data={getSubset(colors, 5)}
          keyExtractor={(color) => color.name}
          horizontal={true}
          renderItem={({ item }) => <Thumbnail color={item.code} />}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Preview;
