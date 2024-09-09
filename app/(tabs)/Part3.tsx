import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';

const Part3 = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const handleOrientationChange = ({ window: { width, height } }) => {
      setIsPortrait(height > width);
    };
    handleOrientationChange({ window: Dimensions.get('window') });
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={[styles.container, isPortrait ? styles.portraitContainer : styles.landscapeContainer]}>
      <View style={styles.buttonContainer}>
        <Button title="Button 1" onPress={() => console.log('Button 1 pressed')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 2" onPress={() => console.log('Button 2 pressed')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 3" onPress={() => console.log('Button 3 pressed')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 4" onPress={() => console.log('Button 4 pressed')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  portraitContainer: {
    flexDirection: 'column',
  },
  landscapeContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    margin: 10, 
  },
});

export default Part3;
