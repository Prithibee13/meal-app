import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './Screens/MealsOverviewScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
    return (
    <>
      <StatusBar style='dark'></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );

}

