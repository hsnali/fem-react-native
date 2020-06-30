import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Palette } from '@molecules/palette';

const COLORS = [
  { name: 'Base03', code: '#002b36' },
  { name: 'Base02', code: '#073642' },
  { name: 'Base01', code: '#586e75' },
  { name: 'Base00', code: '#657b83' },
  { name: 'Base0', code: '#839496' },
  { name: 'Base1', code: '#93a1a1' },
  { name: 'Base2', code: '#eee8d5' },
  { name: 'Base3', code: '#fdf6e3' },
  { name: 'Yellow', code: '#b58900' },
  { name: 'Orange', code: '#cb4b16' },
  { name: 'Red', code: '#dc322f' },
  { name: 'Magenta', code: '#d33682' },
  { name: 'Violet', code: '#6c71c4' },
  { name: 'Blue', code: '#268bd2' },
  { name: 'Cyan', code: '#2aa198' },
  { name: 'Green', code: '#859900' },
];

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.bold}>
          Here are some boxes of different colours
        </Text>
        <Palette title="Solarized" colors={COLORS} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  bold: {
    fontWeight: '700',
  },
});

export default App;
