import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

export default () => {
  return (
    <View style={styles.container}>
      <CustomButton text="Say hello" onPress={() => alert("hello!")} />
      <CustomButton
        text="Say goodbye"
        onPress={() => alert("goodbye!")}
        buttonStyle="#4dc2c2"
      />
    </View>
  );
};

const CustomButton = ({
  text,
  buttonStyle,
  onPress,
}: {
  text: string;
  buttonStyle?: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonStyle || "#ff637c" }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#181818", // Black background for a modern look
  },
  button: {
    alignSelf: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 8, // Rounded corners for a modern feel
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase", // Modern text styling
  },
});
