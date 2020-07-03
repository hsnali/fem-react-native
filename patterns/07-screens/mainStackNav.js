import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Local
import { Home } from '@screens/home';
import { ColorPalette } from '@screens/colorPalette';

const MainStack = createStackNavigator();

export const MainStackNav = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNav;
