import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const Registration = () => {
  const handlePress = () => {
    console.log('Submit button pressed');
  };

  return (
    <View>
      <Text style={styles.title}>Registration </Text>
      <ScrollView>
        <Text style={styles.usrnm}>Name</Text>
        <TextInput
          style={styles.inputcollum}
          placeholder="Masukan Nama Lengkap anda"
          placeholderTextColor="black"
          secureTextEntry={false}
        />
        <Text style={styles.pass}>Username</Text>
        <TextInput
          style={styles.inputcollum}
          placeholder="Masukan Username Anda"
          placeholderTextColor="black"
          secureTextEntry={true} 
        />
        <TouchableOpacity
          onPress={handlePress}
          style={styles.touchableOpacity}>
          <Text style={styles.touchableText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#C238CE',
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

export default Registration;
