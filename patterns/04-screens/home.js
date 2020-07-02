import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { Text, FlatList } from 'react-native';

// Local
import { PALETTE_URL } from '@base/constants/api';
import { utilStyles } from '@base/styles/utils';
import { Preview } from '@molecules/preview';

export const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);

  const getPalettes = useCallback(async () => {
    console.log('getting palettes');
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (response.ok) {
      const pal = await response.json();
      console.log('got it', pal);

      setPalettes(pal);
    }
  }, []);

  useEffect(() => {
    getPalettes();
  }, [getPalettes]);

  return (
    <View style={utilStyles.container}>
      <FlatList
        data={palettes}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>Loading...</Text>}
        renderItem={({ item }) => (
          <Preview
            onPress={() =>
              navigation.navigate('ColorPalette', {
                ...item,
              })
            }
            {...item}
          />
        )}
      />
    </View>
  );
};

export default Home;
