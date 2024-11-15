/**
 * @format
 * 个人中心
 */

import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MeScreen: React.FC<any> = memo(
  () => {
    return (
      <SafeAreaView edges={['right', 'left']}>
        <View>

          <Text>MeScreen</Text>
        </View>
      </SafeAreaView>
    );
  },
);
export default MeScreen;
