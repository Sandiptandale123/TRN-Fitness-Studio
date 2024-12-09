/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the eye icon
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
const LoginScreen = ({ navigation }) => {
  const [checked, setChecked] = useState('trainer');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // Function to handle login action
  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    // Example hardcoded login check
    if (username === 'admin' && password === '123456') {
      //Alert.alert('Success', 'Login successful!');
      navigation.replace('Home'); // Replace this with your Home screen navigation
    } else {
      Alert.alert('Error', 'Invalid username or password.');
    }
  };

  return (
    <View style={{
      flex: 1, // Full height of the screen
      justifyContent: 'center', // Center items vertically
      alignItems: 'center', // Center items horizontally
      backgroundColor: '#000000', // Optional background color
    }}>
      <Image
        source={require('../assets/images/app_logo.jpg')} // Replace with your image URL
        style={styles.loginImage}
        resizeMode="contain" // Options: 'cover', 'contain', 'stretch', etc.
      />

      {/* <Text style={styles.result}>Selected: {checked}</Text> */}
      {/* Username Field */}
      <View style={styles.searchSection}>
        <Icon2 name="user" size={20} color="#FFF" style={{ marginLeft: 20 }} />
        <TextInput
          style={styles.input1}
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize='none'
          placeholderTextColor={'white'}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={[styles.searchSection, { marginTop: 20 }]}>
        <Icon name="password" size={20} color="#FFF" style={{ marginLeft: 20 }} />
        <TextInput
          style={styles.input1}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize='none'
          secureTextEntry={true}
          placeholderTextColor={'white'}
          underlineColorAndroid="transparent"
        />
      </View>
      {/* Password Field */}

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Additional Buttons (Optional) */}
      {/* <TouchableOpacity style={{
        width: '100%',
        alignItems: 'flex-end',
        marginRight: 20
      }} onPress={() => navigation.navigate('Register')}>
        < Text style={[styles.linkText, { textDecorationLine: 'underline' }]}>Register</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={{
        width: '100%',
        alignItems: 'flex-end',
        marginRight: 20
      }} onPress={() => Alert.alert('Info', 'Forgot Password')}>
        < Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity> */}

    </View >

  );
}

const styles = StyleSheet.create({
  loginImage: {
    height: 200,
    width: 200,
    justifyContain: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: -40
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContain: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',

  },
  // input: {
  //   flex: 1,
  //   padding: 10,
  //   fontSize: 16,
  // },
  inputContainer: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  iconContainer: {
    marginLeft: 10,
  },

  button: {
    width: '60%',
    backgroundColor: '#FFA800',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    marginTop: 30
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  linkText: {
    color: '#D2C26F',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'flex-end',
    fontFamily: 'Montserrat-Bold',
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1E20',
    width: '90%',
    borderRadius: 20
  },
  searchIcon: {
    padding: 10,
  },
  input1: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    backgroundColor: '#1D1E20',
    color: '#FFF',
    borderRadius: 20,
    height: 50,
    fontFamily: 'Montserrat-Bold',
  },
});

export default LoginScreen;
