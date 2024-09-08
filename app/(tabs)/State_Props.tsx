import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default () => {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Press Count</Text>
        <Text style={styles.count}>{pressCount} time(s)</Text>
        <TouchableOpacity style={styles.button} onPress={() => setPressCount((prevPressCount) => prevPressCount + 1)}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Shadow for Android
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  count: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
