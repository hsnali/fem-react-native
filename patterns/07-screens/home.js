import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import shuffle from 'lodash-es/shuffle';

// Local
import { PALETTE_URL } from '@base/constants/api';
import { utilStyles } from '@base/styles/utils';

import { AddPaletteButton } from '@atoms/addPaletteButton';
import { Preview } from '@molecules/preview';

export const Home = ({ navigation, route: { params = {} } }) => {
  const [canvas, setCanvas] = useState({ palettes: [], isLoading: true });
  const [palettes, setPalettes] = useState([]);
  const customPalette = params.palette;

  const getPalettes = useCallback(async () => {
    const response = await fetch(PALETTE_URL);
    setCanvas((state) => ({ ...state, isLoading: true }));
    if (response.ok) {
      const palettes = shuffle(await response.json());
      setCanvas({ palettes, isLoading: false });
    }
  }, []);

  console.log('*** param colors', customPalette);

  useEffect(() => {
    const combinedPalettes = [...canvas.palettes];
    if (customPalette) combinedPalettes.unshift(customPalette);
    setPalettes(combinedPalettes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas]);

  useEffect(() => {
    getPalettes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={utilStyles.container}>
      <FlatList
        data={palettes}
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
        refreshing={canvas.isLoading}
        onRefresh={getPalettes}
      />
      <AddPaletteButton onPress={() => navigation.navigate('PaletteModal')} />
    </View>
  );
};

export default Home;
