import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // ✅ Correct import

export default function App() {
  return (
    <View style={styles.container}>
      
  <StatusBar barStyle="light-content" backgroundColor="#FFA851" hidden={false} /> 

      <View style={styles.imageBackground}>
        <Image
          source={require('./assets/fruit.png')} 
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/Ellipse 1.png')} 
          style={styles.secondImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.title}>Get The Freshest Fruit Salad Combo</Text>
        <Text style={styles.subtitle}>We deliver the best and juicy Fruit in the town.!!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    flex: 1,
    backgroundColor: '#FFA851',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  image: {
    width: 220,
    height: 220,
  },
  secondImage: {
    width: 200,
    height: 10,
  },
  bottomSection: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA851',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
