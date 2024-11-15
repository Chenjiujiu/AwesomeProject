/**
 * @format
 * 简单导航
 */

import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';

const BOTTOM_TAB_SCREEN_LIST = ['Home', 'Everything', 'Cart', 'Me'];

const parseUrl = (url: string) => {
  const urlArray = url?.split('?') ?? [];
  const path = urlArray[0] || '';
  const queryString = urlArray[1] || '';
  const params = queryString
    .split('&')
    .map(param => param.split('='))
    .reduce((acc, [key, value]) => {
      if (key) acc[key] = value || '';
      return acc;
    }, {} as { [key: string]: any });
  return { path, params };
};


const useSimpleNavigate = () => {
  const navigation = useNavigation<any>();
  let currentName = '';
  let currentParams = {};
  // 判断钩子是否在导航器内部使用
  try {
    const route = useRoute();
    currentName = route?.name || '';
    currentParams = route?.params || {};
  } catch (error) {
    console.log('hook 不在导航器内部');
  }
  return useCallback(
    (
      screen: string,
      params: { [key: string]: any } = {},
      type: 'navigate' | 'push' | 'replace' | undefined = 'navigate',
    ) => {
      const { path, params: urlParams } = parseUrl(screen);
      // 判断当前路由是否相同
      if (path === currentName) {
        return;
      }
      let navigationType = type;
      if (!navigation?.[type]) {
        navigationType = 'navigate';
      }
      if (BOTTOM_TAB_SCREEN_LIST.includes(path)) {
        navigation[navigationType]('BottomTab', {
          screen: path,
          params: { ...params, ...urlParams },
        });
      } else {
        navigation[navigationType](path, { ...params, ...urlParams });
      }
    },
    [navigation],
  );
};

export default useSimpleNavigate;
