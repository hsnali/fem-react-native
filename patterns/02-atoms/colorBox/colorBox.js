import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ColorBox = ({ colorName, hexCode }) => {
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? '#222' : '#eee',
  };
  return (
    <View style={[styles.container, { backgroundColor: hexCode }]}>
      <Text style={[styles.color, textColor]}>
        {colorName}: {hexCode}
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
