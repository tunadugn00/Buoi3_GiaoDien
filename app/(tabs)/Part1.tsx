import React from 'react';
import { View, Button, StyleSheet, useWindowDimensions } from 'react-native';

const Part1 = () => {
  const { width: screenWidth } = useWindowDimensions();
  const buttonWidth = screenWidth / 2;

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="Button 1" onPress={() => console.log('Button 1 pressed')} />
      </View>
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="Button 2" onPress={() => console.log('Button 2 pressed')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


}

);

export default Part1;