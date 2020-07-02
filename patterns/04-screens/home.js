import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import shuffle from 'lodash-es/shuffle';

// Local
import { PALETTE_URL } from '@base/constants/api';
import { utilStyles } from '@base/styles/utils';
import { Preview } from '@molecules/preview';

export const Home = ({ navigation }) => {
  const [canvas, setCanvas] = useState({ palettes: [], loading: true });

  const getPalettes = useCallback(async () => {
    const response = await fetch(PALETTE_URL);
    setCanvas((state) => ({ ...state, loading: true }));
    if (response.ok) {
      const palettes = shuffle(await response.json());
      setCanvas({ palettes, loading: false });
    }
  }, []);

  useEffect(() => {
    getPalettes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={utilStyles.container}>
      <FlatList
        data={canvas.palettes}
        keyExtractor={(item) => item.id.toString()}
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
        refreshing={false}
        onRefresh={getPalettes}
      />
    </View>
  );
};

export default Home;
