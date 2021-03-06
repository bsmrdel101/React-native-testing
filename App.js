import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import SuppliesList from './screens/SuppliesList';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home screen */}
        <Stack.Screen
          name="Home"
          component={ Home }
          options={{ headerShown: false }}
        />
        {/* Supplies screen */}
        <Stack.Screen
          name="Supplies"
          component={ SuppliesList }
          options={{ title: 'Supplies' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;