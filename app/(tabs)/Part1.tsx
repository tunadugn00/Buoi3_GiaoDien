import React from 'react';
import { View, Button, Dimensions, StyleSheet } from 'react-native';

const Part1 = () => {
  // Lấy chiều rộng của màn hình
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { width: windowWidth / 2 }]}>
        <Button title="Button 1" onPress={() => {}} />
      </View>
      <View style={[styles.buttonContainer, { width: windowWidth / 2 }]}>
        <Button title="Button 2" onPress={() => {}} />
      </View>
    </View>
  );
};

// Style cho giao diện
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Sắp xếp các nút theo hàng ngang
    justifyContent: 'center', // Căn giữa các nút
    alignItems: 'center', // Căn giữa theo chiều dọc
    flex: 1,
  },
  buttonContainer: {
    margin: 10,
  },
});

export default Part1;
