/**
 * @format
 * Everything页面
 * */

import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EverythingScreen: React.FC<any> = memo(
  () => {
    return (
      <SafeAreaView edges={['right', 'left']}>
        <View>
          <Text>EverythingScreen</Text>
        </View>
      </SafeAreaView>
    );
  },
);
export default EverythingScreen;
