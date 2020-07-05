import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import random from 'lodash-es/random';

// Local
import { utilStyles } from '@base/styles/utils';
import { COLORS } from '@base/constants/colors';
import { Separator } from '@atoms/separator';
import { ColorToggle } from '@molecules/colorToggle';

export const PaletteForm = ({ handleSave }) => {
  const [form, setForm] = useState({
    id: random(10000),
    paletteName: '',
    colors: [],
  });

  const handleToggleChange = ({ colorName, hexCode, isEnabled }) => {
    const colors = form.colors.filter((color) => color.colorName !== colorName);
    if (isEnabled) colors.push({ colorName, hexCode });
    setForm((state) => ({ ...state, colors }));
  };

  const saveForm = () => {
    handleSave(form);
  };

  return (
    <View style={utilStyles.flexOne}>
      <Text style={[utilStyles.subHeading, utilStyles.flushHorizontal]}>
        Name of your colour palette
      </Text>
      <TextInput
        style={utilStyles.textField}
        value={form.paletteName}
        onChangeText={(paletteName) =>
          setForm((state) => ({ ...state, paletteName }))
        }
      />

      <FlatList
        data={COLORS}
        keyExtractor={(color) => color.colorName}
        renderItem={({ item }) => (
          <ColorToggle {...item} handleChange={handleToggleChange} />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <TouchableOpacity onPress={saveForm}>
        <Text style={[utilStyles.buttonPrimary]}>Save palette</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaletteForm;
