/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback } from 'react';
import {
    SafeAreaView,
    ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
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
import { RadioButton } from 'react-native-paper';
const RegisterScreen = ({ navigation }) => {
    const [checked, setChecked] = useState('trainer');
    const [gender, setGender] = useState('');
    const [trainerInfo, setTrainerInfo] = useState({
        trainerName: '',
        trainerMobile: '',
        trainerAddress: '',
        trainerUsername: '',
        trainerPassword: '',
        trainerGender: 'male'
    })
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // Function to handle login action
    const hendleRegister = () => {
        Alert.alert('Error', JSON.stringify(trainerInfo));
    };
    // Use useCallback to prevent re-creation of the handler
    const handleGenderChange = useCallback((value) => {
        setTrainerInfo({ ...trainerInfo, trainerGender: value })
    }, [trainerInfo.trainerGender]);

    return (
        <KeyboardAvoidingView
            style={{
                flex: 1, // Full height of the screen
                justifyContent: 'center', // Center items vertically
                alignItems: 'center', // Center items horizontally
                backgroundColor: '#000000', // Optional background color
            }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust based on platform
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollView}>
                    <View >
                        <Image
                            source={require('../assets/images/app_logo.jpg')} // Replace with your image URL
                            style={styles.loginImage}
                            resizeMode="contain" // Options: 'cover', 'contain', 'stretch', etc.
                        />
                        {/* Username Field */}
                        <View style={{ flexDirection: 'row', justifyContain: 'center', alignItems: 'center', alignSelf: 'center', width: '90%', marginVertical: 10, }}>
                            <View style={{ width: '30%' }}>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: '#D2C26F',
                                    fontFamily: 'Montserrat-Medium',
                                }}>Name: </Text>
                            </View>
                            <TextInput
                                placeholder=""
                                value={trainerInfo.trainerName}
                                onChangeText={text => setTrainerInfo({ ...trainerInfo, trainerName: text })}
                                style={styles.input}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContain: 'center', alignItems: 'center', alignSelf: 'center', width: '90%', marginVertical: 10, }}>
                            <View style={{ width: '30%' }}>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: '#D2C26F',
                                    fontFamily: 'Montserrat-Medium',
                                }}>Mobile No: </Text>
                            </View>
                            <TextInput
                                placeholder=""
                                value={trainerInfo.trainerMobile}
                                keyboardType='number-pad'
                                maxLength={10}
                                onChangeText={text => setTrainerInfo({ ...trainerInfo, trainerMobile: text })}
                                style={styles.input}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContain: 'center', alignItems: 'center', alignSelf: 'center', width: '90%', marginVertical: 10, }}>
                            <View style={{ width: '30%' }}>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: '#D2C26F',
                                    fontFamily: 'Montserrat-Medium',
                                }}>Address: </Text>
                            </View>
                            <TextInput
                                placeholder=""
                                value={trainerInfo.trainerAddress}
                                onChangeText={text => setTrainerInfo({ ...trainerInfo, trainerAddress: text })}
                                style={styles.input}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContain: 'center', alignItems: 'center', alignSelf: 'center', width: '90%', marginVertical: 10, }}>
                            <View style={{ width: '30%' }}>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: '#D2C26F',
                                    fontFamily: 'Montserrat-Medium',
                                }}>Gender: </Text>
                            </View>
                            <View>
                                <View style={styles.radioGroup}>
                                    <View style={styles.radioItem}>
                                        <RadioButton
                                            value="male"
                                            status={trainerInfo.trainerGender === 'male' ? 'checked' : 'unchecked'}
                                            onPress={() =>
                                                handleGenderChange('male')}
                                        />
                                        <Text style={{ color: 'white', fontFamily: 'Montserrat-Medium', }}>Male</Text>
                                    </View>

                                    <View style={styles.radioItem}>
                                        <RadioButton
                                            value="female"
                                            status={trainerInfo.trainerGender === 'female' ? 'checked' : 'unchecked'}
                                            onPress={() => handleGenderChange('female')}
                                        />
                                        <Text style={{ color: 'white', fontFamily: 'Montserrat-Medium', }}>Female</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContain: 'center', alignItems: 'center', alignSelf: 'center', width: '90%', marginVertical: 10, }}>
                            <View style={{ width: '30%' }}>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: '#D2C26F',
                                    fontFamily: 'Montserrat-Medium',
                                }}>Username: </Text>
                            </View>
                            <TextInput
                                placeholder=""
                                value={trainerInfo.trainerUsername}
                                onChangeText={text => setTrainerInfo({ ...trainerInfo, trainerUsername: text })}
                                style={styles.input}
                            />
                        </View>
                        {/* Password Field */}
                        <View style={{ flexDirection: 'row', justifyContain: 'center', alignItems: 'center', alignSelf: 'center', width: '90%', marginVertical: 10 }}>
                            <View style={{ width: '30%' }}>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: '#D2C26F',
                                    fontFamily: 'Montserrat-Medium',
                                }}>Password: </Text>
                            </View>
                            {/* Password Input */}
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={[styles.input, { borderWidth: 0, paddingLeft: 0 }]}
                                    placeholder=""
                                    value={trainerInfo.trainerPassword}
                                    onChangeText={text => setTrainerInfo({ ...trainerInfo, trainerPassword: text })}
                                    secureTextEntry={!isPasswordVisible} // Toggle password visibility
                                />
                                {/* Eye Icon */}
                                <TouchableOpacity
                                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                    style={styles.iconContainer}
                                >
                                    <Icon
                                        name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                                        size={24}
                                        color="#888"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Login Button */}
                        <TouchableOpacity style={styles.button} onPress={hendleRegister}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>

                        {/* Additional Buttons (Optional) */}
                        <TouchableOpacity style={{
                            width: '100%',
                            alignItems: 'flex-end',
                            marginRight: 20
                        }} onPress={() => navigation.navigate('Login')}>
                            < Text style={[styles.linkText, { textDecorationLine: 'underline' }]}>Go to Login</Text>
                        </TouchableOpacity>
                    </View >
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    loginImage: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        justifyContain: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
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
    radioGroup: {
        flexDirection: 'row',
        width: '100%',
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedGender: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
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
        width: '30%',
        backgroundColor: '#D2C26F',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
    },
    linkText: {
        color: '#D2C26F',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'flex-end',
        fontFamily: 'Montserrat-Bold',
    },

});

export default RegisterScreen;
