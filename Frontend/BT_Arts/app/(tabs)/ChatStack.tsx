import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '@/app/(chatStackScreens)/ChatScreen';  // Adjust the import path as needed
import MessagesScreen from '@/app/(chatStackScreens)/MessagesScreen';  // Adjust the import path as needed

const Stack = createNativeStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator initialRouteName='Chats' screenOptions={{headerStyle: {backgroundColor: '#d79957', },
    headerTintColor: '#FFFFFF', // Set the color of the header title and icons
    headerTitleStyle: {
      fontWeight: 'bold', // Optional: adjust the font weight of the header title
    },
  }}>
      <Stack.Screen name="ChatScreen" component={ChatScreen} options= {{title: 'Ishaan\'s Group UT Tower'}}/>
      <Stack.Screen  name="Chats" component={MessagesScreen} options= {{title: 'Stamp Chat'}}/>
    </Stack.Navigator>
  );
}

export default ChatStack;
