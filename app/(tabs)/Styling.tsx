import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f2f5",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#7ce0f9",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

const Square: React.FC<{ text: string; bgColor?: string }> = ({
  text,
  bgColor = "#7ce0f9",
}) => {
  return (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <Square text="1" />
      <Square text="2" bgColor="#222831" />
      <Square text="3" />
      <Square text="4" bgColor="#393E46" />
      <Square text="5" bgColor="#808080" />
      <Square text="6" bgColor="#00ADB5" />
      <Square text="7" />
      <Square text="8" bgColor="#FF2E63" />
      <Square text="9" bgColor="#0F4C75"/>
    </View>
  );
};
