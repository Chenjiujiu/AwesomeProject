/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStackNavigator from './src/RootStackNavigator.tsx';

const App = (): React.JSX.Element => {
  const navigationRef = useNavigationContainerRef();
  return (
    <>
            <NavigationContainer
              ref={navigationRef}
            >
                {/*安全区包装器*/}
                <SafeAreaProvider>
                  <>
                    {/*根路由*/}
                    <RootStackNavigator />
                  </>
                </SafeAreaProvider>
            </NavigationContainer>
    </>
  );
};

export default App;
