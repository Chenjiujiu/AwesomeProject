/**
 * @format
 * 登录tab
 */

import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

interface PropsType {}

const LoginTab: React.FC<PropsType> = () => {
  return (
    <ScrollView
      bounces={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.wrapper}
      scrollEventThrottle={64}
    >
      {/*登录表单*/}
      <View style={styles.formWrapper}>
        <View
          style={{ height: 100, width: 100, backgroundColor: 'blue' }}
        ></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 28,
  },
  formWrapper: {
    marginBottom: 13,
  },
});
export default LoginTab;
