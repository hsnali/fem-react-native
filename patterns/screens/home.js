import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';

export const Home = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.push('ColorPalette')}>
      <Text>Solarized</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
});

export default Home;
