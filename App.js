import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', marginTop: 80}}>Handle text input</Text>
      <Text style={{fontSize: 30, textAlign: 'center', marginTop: 80}}>Your name is: {name}</Text>
      <TextInput 
      style = {styles.textInput}
      placeholder='Enter Your Name' 
      value={name}
      onChangeText={(text)=>setName(text)}/>
      <Button title='Clear Input Value' onPress={()=>setName('')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
  fontSize: 18, 
  color: 'black', 
  borderWidth: 2, 
  borderColor: 'blue', 
  margin: 10
  }
})
