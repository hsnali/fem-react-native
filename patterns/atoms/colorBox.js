import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ColorBox = ({ name, code }) => {
  return (
    <View style={[styles.container, { backgroundColor: code }]}>
      <Text style={styles.color}>
        {name}: {code}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 2,
  },
  color: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default ColorBox;
