import React from 'react';
import { View, Text } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';

import { PaletteForm } from '@molecules/paletteForm';

export const PaletteModal = () => (
  <View style={utilStyles.container}>
    <PaletteForm />
  </View>
);

export default PaletteModal;
