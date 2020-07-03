import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';
import { Thumbnail } from '@atoms/thumbnail';

export const ColorToggle = ({ colorName, hexCode, handleChange }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    handleChange({ colorName, isEnabled });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnabled]);

  return (
    <TouchableOpacity onPress={() => setIsEnabled(!isEnabled)}>
      <View style={utilStyles.switchFields}>
        <View style={utilStyles.rowFieldMinimal}>
          <Thumbnail color={hexCode} style={utilStyles.thumbnailSmall} />
          <Text>{colorName}</Text>
        </View>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ColorToggle;
