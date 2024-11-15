/**
 * @format
 * 首页
 * */

import React, { memo } from 'react';
import {  View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen: React.FC<any> = memo(
  () => {
    return (
      <SafeAreaView edges={['right', 'left']}>
        <View>

          <Text>HomeScreen</Text>
        </View>
      </SafeAreaView>
    );
  },
);
export default HomeScreen;
