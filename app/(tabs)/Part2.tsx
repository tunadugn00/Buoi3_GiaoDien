import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const Part2 = () => {
  // Lấy chiều rộng của màn hình
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.8; // 80% chiều rộng của màn hình

  return (
    <View style={styles.container}>
      <Image
        source={require('./dog.png')} // Đường dẫn local đến ảnh trong dự án
        style={[styles.image, { width: imageWidth, height: imageWidth * 0.75 }]}
      />
    </View>
  );
};

// Style cho giao diện
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    borderRadius: 10, // Làm tròn góc ảnh (tuỳ chọn)
  },
});

export default Part2;
