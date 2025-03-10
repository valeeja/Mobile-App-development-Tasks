import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet} from "react-native";
import{Text} from "react-native"
;import {View} from "react-native";
import { StatusBar } from "expo-status.bar";
export default function NEW() {
    const [count, setCountt] = useState(0); 
  
    return (
      <View style={styles.container}>
        <Header />

        <Text style={[styles.text, {color:count < 5 ? "red" : "green"}]}>
          Counter: {count}
        </Text>

        <Button title="PRESS TO INCREASE ME" onPress={() => setCountt(count + 2)} />
      <View style={styles.buttonSpacing} />
    
      <Button title="PRESS TO DECREASE ME" onPress={() => setCountt(count - 2)} />
      <View style={styles.buttonSpacing} />

      <Button title="RESET ME" onPress={() => setCountt(0)} />
      <StatusBar style="auto" />

    </View>
    );
}

  


