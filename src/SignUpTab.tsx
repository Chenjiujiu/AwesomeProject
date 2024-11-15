/**
 * @format
 * 注册控件
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
interface PropsType {}

const SignUpTab: React.FC<PropsType> = () => {

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
  emailWrapper: {
    position: 'relative',
  },
  formWrapper: {
    marginBottom: 13,
  },
});
export default SignUpTab;
