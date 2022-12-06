import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/components/home';
import Pagina2 from './src/components/pagina2';
const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Pagina 2" component={Pagina2} />
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default App;
