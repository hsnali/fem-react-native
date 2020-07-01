import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local
import { Home } from '@root/patterns/04-screens/home';
import { ColorPalette } from '@root/patterns/04-screens/colorPalette';

// Constants
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     paddingHorizontal: 20,
//   },
//   bold: {
//     fontWeight: '700',
//   },
// });

export default App;
