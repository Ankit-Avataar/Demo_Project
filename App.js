import { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>Avataar</Text>
      <Text style = {styles.services}>Services</Text>
      <Text style = {styles.available}>ADVANCED LASER FACIALS</Text>
      <Text style = {styles.available}>PERMANENT HAIR REDUCTION</Text>
      <Text style = {styles.available}>SKIN REPAIR</Text>
      <Text style = {styles.available}>WEIGHT LOSS</Text>
      <Text style = {styles.available}>DIET PLANS</Text>
      <Text style = {styles.available}>FACE SURGERIES</Text>
    </View>
  );
}

const User = (props) => {
  return (
    <View>
    <Text>He is a {props.designation} and his name is {props.name}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    flex: 1,
    marginTop: 80,
    color: 'black',
    fontSize: 80,
  },
  services: {
    flex: 1,
    color: 'black',
    fontSize: 40,
  },
  available: {
    flex: 1,
    color: '#fff',
    fontSize: 25,
    backgroundColor: 'blue',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 2,
  }
});
