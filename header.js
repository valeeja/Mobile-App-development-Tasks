import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>I AM HEADER</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "yellow", // Change color as needed
    justifyContent:'center',
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
  },
});
