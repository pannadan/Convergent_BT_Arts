import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/app/(homeStackScreens)/home';  // Adjust the import path as needed
import Groups from '@/app/(homeStackScreens)/groups';  // Adjust the import path as needed
import CameraScreen from '@/app/(homeStackScreens)/camera';  // Adjust the import path as needed


const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Groups" component={Groups} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
