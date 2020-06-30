import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { ColorBox } from './patterns/atoms/colorBox';

const colours = [
  'Cyan: #2aa198',
  'Blue: #268bd2',
  'Magenta: #d33682',
  'Orange: #cb4b16',
];

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.bold}>
          Here are some boxes of different colours
        </Text>

        {colours.map((color) => {
          const [name, hex] = color.split(': ');

          return <ColorBox key={name} name={name} color={hex} />;
        })}
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
