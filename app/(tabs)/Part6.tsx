import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';

const Part6 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Gumayusiuuuuu</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Platform Specific Button"
          onPress={() => console.log('Button pressed')}
          color={Platform.select({
            ios: '#007AFF',  
            android: '#2196F3', 
          })}
        />
      </View>
      <Text style={styles.platformText}>
        {Platform.OS === 'ios' ? 'This is iOS' : 'This is Android'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: '#F5F5F5',
      },
      android: {
        backgroundColor: '#E0E0E0',
      },
    }),
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        fontFamily: 'Helvetica',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  buttonContainer: {
    ...Platform.select({
      ios: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
      },
      android: {
        padding: 15,
        borderRadius: 5,
        elevation: 3,
      },
    }),
  },
  platformText: {
    marginTop: 20,
    ...Platform.select({
      ios: {
        color: '#007AFF',
        fontSize: 16,
      },
      android: {
        color: '#4CAF50',
        fontSize: 20,
      },
    }),
  },
});

export default Part6;