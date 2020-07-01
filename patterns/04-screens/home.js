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
    name: 'Frontend Masters',
    colors: FRONTEND_MASTERS,
  },
  {
    key: 'rain',
    name: 'Rainbow',
    colors: RAINBOW,
  },
  {
    key: 'sola',
    name: 'Solarised',
    colors: SOLARISED,
  },
];

export const Home = ({ navigation }) => (
  <View style={utilStyles.container}>
    <FlatList
      data={sections}
      renderItem={({ item }) => (
        <Preview
          onPress={() =>
            navigation.navigate('ColorPalette', {
              ...item,
            })
          }
          navigation={navigation}
          screen="ColorPalette"
          name={item.name}
          colors={item.colors}
        />
      )}
    />
  </View>
);

export default Home;
