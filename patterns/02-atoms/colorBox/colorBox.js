import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ColorBox = ({ name, code }) => {
  const textColor = {
    color:
      parseInt(code.replace('#', ''), 16) > 0xffffff / 1.1 ? '#222' : '#eee',
  };
  return (
    <View style={[styles.container, { backgroundColor: code }]}>
      <Text style={[styles.color, textColor]}>
        {name}: {code}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  color: {
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default ColorBox;
