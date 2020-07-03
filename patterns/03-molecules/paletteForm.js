import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

// Local
import { utilStyles } from '@base/styles/utils';

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
    </View>
  );
};

export default PaletteForm;
