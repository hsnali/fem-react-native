import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local
import { MainStackNav } from '@screens/mainStackNav';
import { PaletteModal } from '@screens/paletteModal';

// Constants
const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackNav}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="PaletteModal" component={PaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
