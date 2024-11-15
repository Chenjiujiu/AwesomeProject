/**
 * @format
 * 登录页面
 */

import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import LoginTab from './LoginTab.tsx';
import SignUpTab from './SignUpTab.tsx';

const LoginScreen: React.FC<any> = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'login', title: 'SIGN IN' },
    { key: 'signUp', title: 'SIGN UP' },
  ]);
  // 渲染屏幕
  const renderScene = SceneMap({
    login: LoginTab,
    signUp: SignUpTab,
  });

  return (
    <TabView
      lazy={false}
      swipeEnabled={false}
      animationEnabled={false}
      onIndexChange={setIndex}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      initialLayout={{ width: layout.width }}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 42,
    backgroundColor: '#ffffff',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  tab: {
    height: '100%',
    minHeight: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarLabel: {
    minWidth: 100,
    textAlign: 'center',
  },
});
export default LoginScreen;
