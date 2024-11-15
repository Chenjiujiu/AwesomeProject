/** @format */

import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import HomeScreen from './HomeScreen.tsx';
import EverythingScreen from './EverythingScreen.tsx';
import CartScreen from './CartScreen.tsx';
import MeScreen from './MeScreen.tsx';
import useSimpleNavigate from './UseSimpleNavigate.tsx';

const MainTab = createBottomTabNavigator<any>();
const BottomTabNavigator: React.FC = () => {
  const simpleNavigate = useSimpleNavigate();
  // 处理me页面的tabPress事件
  const handleMePress = useCallback(
    (e: any) => {
      e.preventDefault();
      simpleNavigate('Login');
    },
    [simpleNavigate],
  );
  return (
    <MainTab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <MainTab.Screen
        name="Everything"
        component={EverythingScreen}
        options={{
          tabBarLabel: 'Everything',
        }}
      />
      <MainTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Bag',
        }}
      />
      <MainTab.Screen
        name="Me"
        component={MeScreen}
        options={{
          tabBarLabel: 'Me',
        }}
        listeners={{ tabPress: handleMePress }}
      />
    </MainTab.Navigator>
  );
};

export default BottomTabNavigator;
