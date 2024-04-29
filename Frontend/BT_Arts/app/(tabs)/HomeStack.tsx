import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/app/(homeStackScreens)/home';  // Adjust the import path as needed
import Groups from '@/app/(homeStackScreens)/groups';  // Adjust the import path as needed
import CameraScreen from '@/app/(homeStackScreens)/camera';  // Adjust the import path as needed


const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle: {backgroundColor: '#d79957', },
      headerTintColor: '#FFFFFF', // Set the color of the header title and icons
      headerTitleStyle: {
        fontWeight: 'bold', // Optional: adjust the font weight of the header title
      },
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Groups" component={Groups} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
