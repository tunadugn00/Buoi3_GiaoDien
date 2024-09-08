import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use Expo icons or any other icon library

// Import your project components
import HelloWorld from './Part1';
import Part2 from './Part2';
import CustomComponent from './CustomComponent';
import State_Props from './State_Props';
import Styling from './Styling';
import ScrollableContent from './ScrollableContent';
import Form_input from './Form_input';
import Long_List from './Long_List';
import Part1 from './Part1';

const Stack = createNativeStackNavigator();

const projects = [
  { name: 'Part1', title: 'Part1', icon: 'reorder-four' },
  { name: 'Part2', title: 'Part2', icon: 'reorder-four' },
  { name: 'CustomComponent', title: 'Custom Component', icon: 'reorder-four' },
  { name: 'State_Props', title: 'State & Props', icon: 'reorder-four' },
  { name: 'Styling', title: 'Styling', icon: 'reorder-four' },
  { name: 'ScrollableContent', title: 'Scrollable Content', icon: 'reorder-four' },
  { name: 'Form_input', title: 'Form Input', icon: 'reorder-four' },
  { name: 'Long_List', title: 'Long List', icon: 'reorder-four' },
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
      <Text style={styles.title}>React Native Beginner Projects</Text>
      <FlatList
        data={projects}
        renderItem={renderProject}
        keyExtractor={(item) => item.name}
        numColumns={2} // Display two cards per row
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
        <Stack.Screen name="CustomComponent" component={CustomComponent} />
        <Stack.Screen name="State_Props" component={State_Props} />
        <Stack.Screen name="Styling" component={Styling} />
        <Stack.Screen name="ScrollableContent" component={ScrollableContent} />
        <Stack.Screen name="Form_input" component={Form_input} />
        <Stack.Screen name="Long_List" component={Long_List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
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



