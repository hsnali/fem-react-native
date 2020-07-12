import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';

export const AddPaletteButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={utilStyles.buttonPrimary}>Add Colour Scheme</Text>
  </TouchableOpacity>
);

export default AddPaletteButton;
