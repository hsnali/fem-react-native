import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';

// Local
import { FRONTEND_MASTERS, RAINBOW, SOLARISED } from '@base/constants/colors';
import { utilStyles } from '@base/styles/utils';
import { Preview } from '@molecules/preview';

const sections = [
  {
    key: 'fem',
    title: 'Frontend Masters',
    colors: FRONTEND_MASTERS,
  },
  {
    key: 'rain',
    title: 'Rainbow',
    colors: RAINBOW,
  },
  {
    key: 'sola',
    title: 'Solarised',
    colors: SOLARISED,
  },
];

export const Home = ({ navigation }) => (
  <View style={utilStyles.container}>
    <FlatList
      data={sections}
      renderItem={({ item }) => (
        <Preview
          navigation={navigation}
          screen="ColorPalette"
          name={item.title}
          colors={item.colors}
        />
      )}
    />
  </View>
);

export default Home;
