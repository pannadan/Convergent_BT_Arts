import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { FontAwesome5,  FontAwesome6 } from '@expo/vector-icons';
import HomeStack from '@/app/(tabs)/HomeStack'
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIcon2(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome5 name="hat-cowboy" size={24} color="black" />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        tabBarStyle: {
          backgroundColor: '#d8a46d', // Directly set your custom color here
        },
        headerStyle: {
          backgroundColor: '#d79957', // Set the background color for all headers
        },
        headerTintColor: '#FFFFFF', // Set the color of the header title and icons
        headerTitleStyle: {
          fontWeight: 'bold', // Optional: adjust the font weight of the header title
        },
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="HomeStack"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color="white" style={{ marginBottom: -10}}/>,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'My Profile',
          tabBarIcon: ({ color }) => <FontAwesome5 name="hat-cowboy" size={24} color="white" style={{ marginBottom: -10 }}/>,
        }}
      />
      <Tabs.Screen
        name="ChatStack"
        options={{
          headerShown: false,
          title: 'Messages',
          tabBarIcon: ({ color }) => <FontAwesome6 name="message" size={24} color="white" style={{ marginBottom: -10 }}/>,
        }}
      />
    </Tabs>
  );
}
