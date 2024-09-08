import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light background for contrast
    padding: 20,
  },
  scrollView: {
    flexDirection: 'column',
    flexWrap: 'wrap', // Ensures items wrap to next line
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10, // Space between squares
    borderRadius: 10, // Rounded corners for a modern look
    shadowColor: "#000", // Shadow for 3D effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  text: {
    color: "#fff", // White text for contrast
    fontWeight: 'bold',
  },
});

const Square: React.FC<{ text: string; bgcolor?: string }> = ({ text, bgcolor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgcolor }]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const data = Array.from({ length: 15 }, (_, index) => index + 1);

export default () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {data.map((item, index) => (
          <Square key={item} text={`Square ${item}`} bgcolor={index % 2 === 0 ? "#4a90e2" : "#50e3c2"} />
        ))}
      </ScrollView>
    </View>
  );
};
