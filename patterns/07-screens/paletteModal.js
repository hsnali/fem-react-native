import React from 'react';
import { View } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';
import { PaletteForm } from '@components/paletteForm';

export const PaletteModal = ({ navigation }) => (
  <View style={utilStyles.container}>
    <PaletteForm
      handleSave={(palette) => navigation.navigate('Home', { palette })}
    />
  </View>
);

export default PaletteModal;
