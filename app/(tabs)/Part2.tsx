import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { ScaledSize } from 'react-native';

const Part2 = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const updateDimensions = ({ window }) => {
      setDimensions(window);
    };
    const subscription = Dimensions.addEventListener('change', updateDimensions);
    return () => {
      subscription?.remove(); 
    };
  }, []);

  const imageAspectRatio = 16 / 9;
  const imageWidth = dimensions.width * 0.8;
  const imageHeight = imageWidth / imageAspectRatio;

  return (
    <View style={styles.container}>
      <Image
        source={require('./home.png')} 
        style={{
          width: imageWidth,
          height: imageHeight,
          marginBottom: 20,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Part2;
