import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '@/app/(chatStackScreens)/ChatScreen';  // Adjust the import path as needed
import MessagesScreen from '@/app/(chatStackScreens)/MessagesScreen';  // Adjust the import path as needed

const Stack = createNativeStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator initialRouteName='Chats'>
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen  name="Chats" component={MessagesScreen} />
    </Stack.Navigator>
  );
}

export default ChatStack;
