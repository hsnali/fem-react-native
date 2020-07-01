import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

// Local
import { ColorBox } from '@root/patterns/02-atoms/colorBox/colorBox';

export const Palette = ({ title, colors }) => (
  <FlatList
    data={colors}
    keyExtractor={(color) => color.name}
    renderItem={({ item }) => {
      const { name, code } = item;
      return <ColorBox name={name} code={code} />;
    }}
    ListHeaderComponent={<Text style={styles.title}>{title}</Text>}
  />
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Palette;
