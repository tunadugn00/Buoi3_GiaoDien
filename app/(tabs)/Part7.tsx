import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const Part7 = () => {
  const [orientation, setOrientation] = useState('portrait');
  const [statusBarStyle, setStatusBarStyle] = useState('dark-content');
  const [statusBarBackgroundColor, setStatusBarBackgroundColor] = useState('#ffffff');

  useEffect(() => {
    const updateLayout = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'Ngang' : 'Dọc');
    };
    updateLayout();
    const subscription = Dimensions.addEventListener('change', updateLayout);
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      if (orientation === 'landscape') {
        setStatusBarStyle('light-content');
        setStatusBarBackgroundColor('#000000');
      } else {
        setStatusBarStyle('dark-content');
        setStatusBarBackgroundColor('#ffffff');
      }
    } else {
      if (orientation === 'landscape') {
        setStatusBarStyle('light-content');
        setStatusBarBackgroundColor('#000000');
      } else {
        setStatusBarStyle('dark-content');
        setStatusBarBackgroundColor('#ffffff');
      }
    }
  }, [orientation]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={Platform.OS === 'ios' ? '#ffffff' : '#FFCCCC'}
        
      />
      <Text style={styles.text}>Định hướng: {orientation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default Part7;
