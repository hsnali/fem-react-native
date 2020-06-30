import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Palette } from '@molecules/palette';
import { COLORS } from './constants';

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
