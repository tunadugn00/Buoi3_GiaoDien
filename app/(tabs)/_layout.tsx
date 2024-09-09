import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="Part1"
        options={{
          title: 'Part1',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'star' : 'star-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="Part2"
        options={{
          title: 'Part2',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'star' : 'star-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="Part3"
        options={{
          title: 'Part3',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'star' : 'star-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="Part4"
        options={{
          title: 'Part4',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'star' : 'star-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Part5"
        options={{
          title: 'Part5',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'star' : 'star-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Part6"
        options={{
          title: 'Part6',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'star' : 'star-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Part7"
        options={{
          title: 'Part7',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'star' : 'star-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Part8"
        options={{
          title: 'Part8',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'star' : 'star-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
    
      
    
  );
}
