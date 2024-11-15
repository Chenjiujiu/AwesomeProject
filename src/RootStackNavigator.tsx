/** @format */

import React, { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator.tsx';
import LoginScreen from './LoginScreen.tsx';
import HeaderBackIcon from './HeaderBackIcon.tsx';

const RootStack = createNativeStackNavigator<any>();
const RootStackNavigator: React.FC = () => {
  const headerBack = useCallback(() => <HeaderBackIcon />, []);
  return (
    <RootStack.Navigator
      initialRouteName={'BottomTab'}
      screenOptions={{
        headerBackVisible: false,
        animation: 'slide_from_right',
        presentation: 'card',
        animationDuration: 100,
        headerTitleAlign: 'center',
        orientation: 'portrait',
        headerLeft: headerBack,
      }}
    >
      <RootStack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Group>
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShadowVisible: false,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
