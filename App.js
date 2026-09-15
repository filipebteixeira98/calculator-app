import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/HomeScreen';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { ConverterScreen } from './src/screens/ConverterScreen';

import { colors } from './src/styles/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'Calculator' }} />
        <Stack.Screen name="Converter" component={ConverterScreen} options={{ title: 'Converter' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}