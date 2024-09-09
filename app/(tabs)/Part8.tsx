import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Keyboard,
  Animated,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
} from 'react-native';

const Part8 = () => {
  const { width, height } = useWindowDimensions();
  const orientation = width > height ? 'landscape' : 'portrait';
  const imageHeight = orientation === 'landscape' ? height * 0.4 : height * 0.3;
  const buttonSize = orientation === 'landscape' ? { width: 150, height: 50 } : { width: 120, height: 40 };

  const [text, setText] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const animatedPadding = useRef(new Animated.Value(0)).current;

  const { width: screenWidth } = useWindowDimensions();
  const buttonWidth = screenWidth / 2;

  const [orientation7, setOrientation] = useState('portrait');
  const [statusBarStyle, setStatusBarStyle] = useState('dark-content');
  const [statusBarBackgroundColor, setStatusBarBackgroundColor] = useState('#ffffff');

  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const [isPortrait, setIsPortrait] = useState(true);

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
      if (orientation7 === 'landscape') {
        setStatusBarStyle('light-content');
        setStatusBarBackgroundColor('#000000');
      } else {
        setStatusBarStyle('dark-content');
        setStatusBarBackgroundColor('#ffffff');
      }
    } else {
      if (orientation7 === 'landscape') {
        setStatusBarStyle('light-content');
        setStatusBarBackgroundColor('#000000');
      } else {
        setStatusBarStyle('dark-content');
        setStatusBarBackgroundColor('#ffffff');
      }
    }
  }, [orientation7]);

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
  const imageHeight2 = imageWidth / imageAspectRatio;

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
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./home.png')} 
        style={{
          width: imageWidth,
          height: imageHeight2,
          marginBottom: 20,
        }}
        resizeMode="contain"
      />
      <View style={[styles.container3, isPortrait ? styles.portraitContainer : styles.landscapeContainer]}>
      <View style={styles.buttonContainer3}>
        <Button title="Button 1" onPress={() => console.log('Button 1 pressed')} />
      </View>
      <View style={styles.buttonContainer3}>
        <Button title="Button 2" onPress={() => console.log('Button 2 pressed')} />
      </View>
      <View style={styles.buttonContainer3}>
        <Button title="Button 3" onPress={() => console.log('Button 3 pressed')} />
      </View>
      <View style={styles.buttonContainer3}>
        <Button title="Button 4" onPress={() => console.log('Button 4 pressed')} />
      </View>
    </View>

      <View style={styles.container1}>
        <View style={[styles.buttonContainer1, { width: buttonWidth }]}>
          <Button title="Button 1" onPress={() => console.log('Button 1 pressed')} />
        </View>
        <View style={[styles.buttonContainer1, { width: buttonWidth }]}>
          <Button title="Button 2" onPress={() => console.log('Button 2 pressed')} />
        </View>
      </View>

      <View style={styles.container6}>
        <View style={styles.buttonContainer6}>
          <Button
            title="Gumayusiuuuuuuuu"
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

      <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={Platform.OS === 'ios' ? '#ffffff' : '#FFCCCC'}
        
      />
      <Text style={styles.text}>Định hướng: {orientation7}</Text>
    </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animated.View style={[styles.container4, { paddingBottom: animatedPadding }]}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type something here"
              value={text}
              onChangeText={setText}
              style={styles.textInput}
            />
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
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


  container4: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    marginBottom:100,
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
    width:300,
    borderColor: "#000000",
    borderWidth: 1,
    fontSize:20,
  },
  btnContainer: {
    marginTop: 12
  },


  container1: {
    flex: 1,
    flexDirection: 'row',
    marginTop:50,
  },
  buttonContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
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
  buttonContainer6: {
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

  container7: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  container3: {
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
  buttonContainer3: {
    margin: 10, 
  },
});

export default Part8;
