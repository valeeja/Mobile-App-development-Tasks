import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./header"; // Importing Header.js

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6", // Light blue background
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#333", // Dark text color
    fontSize: 16,
  },
});
