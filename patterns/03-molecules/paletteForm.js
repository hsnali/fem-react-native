import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';
import { COLORS } from '@base/constants/colors';
import { Separator } from '@atoms/separator';
import { ColorToggle } from '@molecules/colorToggle';

export const PaletteForm = (props) => {
  const [form, setForm] = useState({
    name: '',
    colors: [],
  });

  useEffect(() => {
    console.log('Form Data', form);
  }, [form]);

  return (
    <View>
      <Text style={[utilStyles.subHeading, utilStyles.flushHorizontal]}>
        Name of your colour palette
      </Text>
      <TextInput
        style={utilStyles.textField}
        value={form.name}
        onChangeText={(name) => setForm((state) => ({ ...state, name }))}
      />

      <FlatList
        data={COLORS}
        keyExtractor={(color) => color.colorName}
        renderItem={({ item }) => <ColorToggle {...item} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

export default PaletteForm;
