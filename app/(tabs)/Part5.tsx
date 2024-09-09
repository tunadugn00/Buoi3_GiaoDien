import React, { useState, useEffect } from 'react';
import { View, Image, Button, StyleSheet, Dimensions, ScrollView } from 'react-native';

const Part5 = () => {
  const [orientation, setOrientation] = useState('portrait');
  const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const updateLayout = ({ window: { width, height } }) => {
      setScreenDimensions({ width, height });
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    // Set initial orientation
    updateLayout({ window: Dimensions.get('window') });

    // Add event listener for orientation changes
    const subscription = Dimensions.addEventListener('change', updateLayout);

    // Clean up the subscription when the component unmounts
    return () => {
      subscription?.remove();
    };
  }, []);

  const imageHeight = orientation === 'landscape' ? screenDimensions.height * 0.4 : screenDimensions.height * 0.3;
  const buttonSize = orientation === 'landscape' ? { width: 150, height: 50 } : { width: 120, height: 40 };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./home.png')}
        style={[
          styles.image,
          { height: imageHeight, width: screenDimensions.width * 0.8 }
        ]}
        resizeMode="contain"
      />
      <View
        style={[
          styles.buttonContainer,
          orientation === 'landscape' ? styles.landscapeButtons : styles.portraitButtons
        ]}
      >
        <Button
          title="Button 1"
          onPress={() => console.log('Button 1 pressed')}
          color="#841584"
        />
        <Button
          title="Button 2"
          onPress={() => console.log('Button 2 pressed')}
          color="#008CBA"
        />
        <Button
          title="Button 3"
          onPress={() => console.log('Button 3 pressed')}
          color="#4CAF50"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
  },
  portraitButtons: {
    flexDirection: 'column',
  },
  landscapeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Part5;
