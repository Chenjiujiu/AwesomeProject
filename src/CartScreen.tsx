/**
 * @format
 * 购物车页面
 */

import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CartScreen: React.FC<any> = memo(
  () => {
    return (
      <SafeAreaView edges={['right', 'left']}>
        <View>
          <Text>Cart</Text>
        </View>
      </SafeAreaView>
    );
  },
);
export default CartScreen;
