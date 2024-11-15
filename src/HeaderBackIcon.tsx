/**
 * @format
 * 返回
 */

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HeaderBackIcon: React.FC = () => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  const onPressHandle = () => navigation.goBack();
  return (
    <>
      {canGoBack ? (
        <TouchableOpacity
          onPress={onPressHandle}
          // hitSlop={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};
export default HeaderBackIcon;
