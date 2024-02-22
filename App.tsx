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
import Registration from './src/components/Registration';
import UserList from './src/components/UserList';

const App = () => {
  return (
    <View style={styles.Container}>
      <Registration />
      
      <UserList />
    </View>
  );
};


  

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  
});
export default App;
