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
    const response = await fetch(PALETTE_URL);
    if (response.ok) setPalettes(await response.json());
  }, []);

  useEffect(() => {
    getPalettes();
  });

  return (
    <View style={utilStyles.container}>
      <FlatList
        data={palettes}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>Loading...</Text>}
        renderItem={({ item }) => (
          <Preview
            {...item}
            onPress={() =>
              navigation.navigate('ColorPalette', {
                ...item,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default Home;
