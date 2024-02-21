import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Download from './Assets/be-a-Programmer.jpg';
import js from './Assets/javascript.jpeg';
import vscode from './Assets/vscode.png';

const App = () => {
  const handlePress = () => {
    alert('Welcome to RN');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
    <ScrollView>
      <Text style={styles.usrnm}>Username</Text>
      <TextInput
        style={styles.inputcollum}
        placeholder="   Masukan Username anda"
        placeholderTextColor="black"
        secureTextEntry
      />
      <Text style={styles.pass}>Password</Text>
      <TextInput
        style={styles.inputcollum}
        placeholder="   Masukan Password Anda"
        placeholderTextColor="black"
        secureTextEntry
      />
      <TouchableOpacity
          onPress={handlePress}
          style={styles.touchableOpacity}>
          <Text style={styles.touchableText}>submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    borderColor: 'black',
    borderRadius: 50,
  },
  usrnm: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 15,
    borderColor: 'black',
    borderRadius: 50,
  },
  pass: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 15,
    borderColor: 'black',
    borderRadius: 50,
  },
  inputcollum: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  touchableOpacity: {
    backgroundColor: '#ff6600',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 35,
    height: 45,
    width: 380,
  },
  touchableText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
