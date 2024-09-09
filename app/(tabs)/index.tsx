import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use Expo icons or any other icon library

import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';
import Part7 from './Part7';
import Part8 from './Part8';


const Stack = createNativeStackNavigator();

const projects = [
  { name: 'Part1', title: 'Part1', icon: 'reorder-four' },
  { name: 'Part2', title: 'Part2', icon: 'reorder-four' },
  { name: 'Part3', title: 'Part3', icon: 'reorder-four' },
  { name: 'Part4', title: 'Part4', icon: 'reorder-four' },
  { name: 'Part5', title: 'Part5', icon: 'reorder-four' },
  { name: 'Part6', title: 'Part6', icon: 'reorder-four' },
  { name: 'Part7', title: 'Part7', icon: 'reorder-four' },
  { name: 'Part8', title: 'Part8', icon: 'reorder-four' },
];

function Home({ navigation }: { navigation: any }) {
  const renderProject = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.name)}
    >
      <Ionicons name={item.icon} size={32} color="#fff" />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gumayusiuuuuuuuu</Text>
      <FlatList
        data={projects}
        renderItem={renderProject}
        keyExtractor={(item) => item.name}
        numColumns={2} 
      />
    </View>
  );
}

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Part1" component={Part1} />
        <Stack.Screen name="Part2" component={Part2} />
        <Stack.Screen name="Part3" component={Part3} />
        <Stack.Screen name="Part4" component={Part4} />
        <Stack.Screen name="Part5" component={Part5} />
        <Stack.Screen name="Part6" component={Part6} />
        <Stack.Screen name="Part7" component={Part7} />
        <Stack.Screen name="Part8" component={Part8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33CCFF', 
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    margin: 8,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 10,
  },
});