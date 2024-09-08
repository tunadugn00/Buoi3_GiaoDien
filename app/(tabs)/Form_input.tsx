import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  const handlePress = () => {
    alert(`Hello, ${name}!`);
    setName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <Text style={styles.label}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        autoCapitalize="words"
        autoCorrect={false}
        placeholderTextColor="#bbb"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Say Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000', // Black background for a modern look
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff', // White text for contrast
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#fff', // White text for contrast
  },
  input: {
    backgroundColor: '#1c1c1c', // Dark background for the input
    padding: 15,
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    color: '#fff', // White text inside input
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  button: {
    backgroundColor: '#007BFF', // Modern blue for the button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
