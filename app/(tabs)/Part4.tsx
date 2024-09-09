import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  Animated,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';

const Part4 = () => {
  const [text, setText] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const animatedPadding = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
        Animated.timing(animatedPadding, {
          toValue: e.endCoordinates.height,
          duration: 250,
          useNativeDriver: false
        }).start();
      }
    );

    const keyboardWillHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
        Animated.timing(animatedPadding, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false
        }).start();
      }
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={[styles.container, { paddingBottom: animatedPadding }]}>
        <View style={styles.header}>
          <Button title="Button 1" onPress={() => console.log('Button 1 pressed')} />
          <Button title="Button 2" onPress={() => console.log('Button 2 pressed')} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type something here"
            value={text}
            onChangeText={setText}
            style={styles.textInput}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button title="Submit" onPress={() => console.log('Submit pressed')} />
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputContainer: {
    marginVertical: 20,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
  btnContainer: {
    marginTop: 12
  }
});

export default Part4;