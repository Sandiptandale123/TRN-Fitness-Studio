import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleText}>MY WORKOUT PLAN</Text>

            <View style={styles.viewStyle}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={[styles.titleText1, { fontSize: 16, fontFamily: 'Montserrat-SemiBold', }]}>Fat Loss 4 Days (Beginner)</Text>
                    <Text style={[styles.titleText1, { color: '#7E8693', marginVertical: 5 }]}>Week 1 . Day 1</Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    alignContent: 'center', alignSelf: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    borderWidth: 1,
                    borderColor: '#7E8693',
                    borderStyle: 'solid',
                    justifyContent: 'center',
                    marginRight: 10
                }}>
                    <Text style={[styles.titleText1, { fontSize: 16, fontFamily: 'Montserrat-Medium', marginHorizontal: 0 }]}>0%</Text>
                </View>
            </View>
            <ImageBackground resizeMode='stretch' source={require('../../assets/images/push_up.jpg')} style={{ height: 250, margin: 10 }} imageStyle={{ borderRadius: 20, }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'flex-start', width: '100%', borderRadius: 20, paddingBottom: 20, paddingLeft: 10 }}>
                    <Text style={{ color: 'white', fontSize: 22, fontFamily: 'Montserrat-SemiBold', }}>PUSH (Chest/Delts/Triceps/Core)</Text>
                    <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Montserrat-Medium', }}>1 hr 30 mins .Fully Body,Legs,Shoulders</Text>
                </View>
            </ImageBackground>

            <Text style={styles.titleText}>MY DIET PLAN</Text>
            <ImageBackground resizeMode='stretch' source={require('../../assets/images/diet_icon.jpeg')} style={{ height: 250, margin: 10, marginBottom: 50, }} imageStyle={{ borderRadius: 20, }}
            >
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'flex-start', width: '100%', borderRadius: 20, paddingBottom: 0, paddingLeft: 10 }}>
                    <Text style={{ color: 'white', fontSize: 22, fontFamily: 'Montserrat-SemiBold', }}>0 <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Montserrat-Medium', }}>/2546 cals</Text></Text>
                    <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Montserrat-Medium', marginBottom: 5 }}>POg .FOg .COg</Text>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        marginTop: 60
    },
    viewStyle: {
        backgroundColor: '#1D1E20',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 10,
        height: 80,
        flexDirection: 'row'
    },
    titleText: {
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        marginLeft: 20,
        marginVertical: 20
    },
    titleText1: {
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        marginHorizontal: 10
    }
});

export default HomeScreen;
