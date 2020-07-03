import React from 'react';
import { View, Text, Switch } from 'react-native';

// Local
import { Thumbnail } from '@atoms/thumbnail';

export const ColorToggle = ({ colorName, hexCode }) => (
  <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingVertical: 10,
      alignItems: 'center',
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        flexGrow: 0,
        flexShrink: 1,
        alignItems: 'center',
      }}
    >
      <Thumbnail
        color={hexCode}
        style={{ flexBasis: 'auto', width: 20, height: 20, marginRight: 10 }}
      />
      <Text>{colorName}</Text>
    </View>
    <Switch />
  </View>
);

export default ColorToggle;
