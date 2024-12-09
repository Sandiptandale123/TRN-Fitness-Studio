import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
const AccountScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Text>Account Screen</Text>
            <View style={{
                alignItems: 'center',
                alignContent: 'center', alignSelf: 'center',
                width: 100,
                height: 100,
                borderRadius: 50,
                // borderWidth: 1,
                // borderColor: '#7E8693',
                // borderStyle: 'solid',
                justifyContent: 'center',
                marginRight: 10,
                marginTop: 50,
                backgroundColor: '#222222'
            }}>
                <Text style={[styles.titleText1, { fontSize: 16, fontFamily: 'Montserrat-Medium', marginHorizontal: 0 }]}>S</Text>
            </View>
            <View style={{
                alignItems: 'center',
                alignContent: 'center', alignSelf: 'center',
            }}>
                <Text style={[styles.titleText1, { fontSize: 16, fontFamily: 'Montserrat-Medium', marginTop: 10 }]}>Sandip</Text>
                <Text style={[styles.titleText1, { fontSize: 12, fontFamily: 'Montserrat-Medium', marginTop: 10 }]}>sandipmk112@gmail.com</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#222222', paddingHorizontal: 10, paddingVertical: 20, borderRadius: 10, borderColor: '#373737', borderWidth: 1, marginHorizontal: 10 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', }}>
                    <Text style={[styles.titleText1, { fontSize: 12, fontFamily: 'Montserrat-Medium', }]}>ACTIVE PLAN</Text>
                    <Text style={[styles.titleText1, { fontSize: 12, fontFamily: 'Montserrat-Medium', marginTop: 10 }]}>free plan</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', }}>
                    <Text style={[styles.titleText1, { fontSize: 12, fontFamily: 'Montserrat-Medium', }]}>03 Dec - 05 Dec 2024</Text>
                    <Text style={[styles.titleText1, { fontSize: 12, fontFamily: 'Montserrat-Medium', marginTop: 10 }]}>3 Days</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#222222', paddingHorizontal: 10, paddingVertical: 20, marginHorizontal: 10, justifyContent: 'space-between' }}>
                <Icon1 name="user-alt" size={20} color="#FFFFFF" />
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat-Medium', marginTop: -5 }}>My Profile</Text>
                <Icon name="right" size={20} color="#AB750C" />
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#222222', paddingHorizontal: 10, paddingVertical: 20, marginHorizontal: 10, justifyContent: 'space-between' }}
                onPress={() => { navigation.navigate('Diet Plans') }}>
                <Icon2 name="food" size={20} color="#FFFFFF" />
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat-Medium', marginTop: -5 }}>Diet Plans</Text>
                <Icon name="right" size={20} color="#AB750C" />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#222222', paddingHorizontal: 10, paddingVertical: 20, marginHorizontal: 10, justifyContent: 'space-between' }}
                onPress={() => { navigation.navigate('Workout Plans') }}>
                <Icon3 name="sports-gymnastics" size={20} color="#FFFFFF" />
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat-Medium', marginTop: -5 }}>Workout Plans</Text>
                <Icon name="right" size={20} color="#AB750C" />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#222222', paddingHorizontal: 10, paddingVertical: 20, marginHorizontal: 10, justifyContent: 'space-between' }}>
                <Icon2 name="yoga" size={20} color="#FFFFFF" />
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat-Medium', marginTop: -5 }}>About TRN Fitness Studio</Text>
                <Icon name="right" size={20} color="#AB750C" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
    },
    titleText1: {
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        marginHorizontal: 10
    }
});

export default AccountScreen;
