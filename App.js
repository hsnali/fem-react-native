import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

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
        <Text style={styles.text}>
          Here are some boxes of different colours
        </Text>

        {colours.map((color) => {
          const [name, hex] = color.split(':');
          return (
            <View
              style={[{ backgroundColor: hex.trim() }, styles.colorContainer]}
            >
              <Text style={styles.colorItem}>
                {name}: {hex}
              </Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  text: {
    fontWeight: '700',
  },
  colorContainer: {
    marginVertical: 3,
    padding: 5,
    borderRadius: 2,
  },
  colorItem: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});

export default App;
