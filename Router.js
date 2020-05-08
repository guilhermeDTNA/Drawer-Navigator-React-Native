import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Screen1 from './src/screens/Tela1'; // Import all your screens here
import Screen2 from './src/screens/Tela2';
import Screen3 from './src/screens/Tela3';

// The DrawerNavigator uses all the screens

export const MyDrawer = DrawerNavigator({
	Screen1: { screen: Screen1 },
	Screen2: { screen: Screen2 },
	Screen3: { screen: Screen3 },
});