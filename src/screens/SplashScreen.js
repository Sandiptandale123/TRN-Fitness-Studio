import React, { useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const SplashScreen = ({ navigation }) => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.replace('Login');
    //     }, 3000); // Navigate to Login after 2 seconds
    // }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <Image
                    source={require('../assets/images/app_logo.jpg')} // Replace with your image URL
                    style={styles.fullScreenImage}
                    resizeMode="contain" // Options: 'cover', 'contain', 'stretch', etc.
                />
            </View>
            <TouchableOpacity style={{ width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFA800', height: 50, borderRadius: 20, alignSelf: 'center', marginTop: 50 }}
                onPress={() => {
                    navigation.replace('Login');
                }}>
                <Text style={styles.getStartText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', // Optional, adds a background color behind the image
    },
    fullScreenImage: {
        width: '100%',
        height: 450,
    },
    getStartText: {
        color: 'black', fontSize: 16, fontFamily: 'Montserrat-Bold',

    }
});

export default SplashScreen;
