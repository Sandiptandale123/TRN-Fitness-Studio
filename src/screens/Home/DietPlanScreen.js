import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const DietPlanScreen = () => {
    const [dietlist, setDietList] = useState(
        [
            {
                dietTitle: '3 Non Veg Meals',
                dietImage: require('../../assets/images/push_up.jpg'),
                dietCalaries: "(1250Kcal)",
                dietWeeks: '4 Weeks',
            },
            {
                dietTitle: 'Fat Loss 4 Days',
                dietImage: require('../../assets/images/diet_icon.jpeg'),
                dietCalaries: "Beginner",
                dietWeeks: '12 Weeks',
            },
            {
                dietTitle: 'Fat Loss 5 Days',
                dietImage: require('../../assets/images/push_up.jpg'),
                dietCalaries: "Beginner",
                dietWeeks: '12 Weeks',
            },
            {
                dietTitle: 'Fat Loss 5 Days',
                dietImage: require('../../assets/images/diet_icon.jpeg'),
                dietCalaries: "Intermediate",
                dietWeeks: '12 Weeks',
            },
        ]);

    const [proPlanlist, setProPlanList] = useState(
        [
            {
                proPlanTitle: 'Veg 1250Kcal',
                proPlanImage: require('../../assets/images/push_up.jpg'),
                proPlanWeeks: '4 Weeks',
            },
            {
                proPlanTitle: 'Veg 1250Kcal',
                proPlanImage: require('../../assets/images/diet_icon.jpeg'),
                proPlanWeeks: '10 Weeks',
            },
            {
                proPlanTitle: 'Veg 1250Kcal',
                proPlanImage: require('../../assets/images/push_up.jpg'),
                proPlanWeeks: '12 Weeks',
            },
            {
                proPlanTitle: 'Veg 1250Kcal',
                proPlanImage: require('../../assets/images/diet_icon.jpeg'),
                proPlanWeeks: '14 Weeks',
            },
        ]);

    const renderProPlansItem = ({ item, indexx }) => {
        return (
            <ImageBackground resizeMode='stretch' source={uri = item?.proPlanImage} style={{ height: 250, margin: 10, width: 250 }} imageStyle={{ borderRadius: 20, }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center', width: '100%', borderRadius: 20, paddingBottom: 10, paddingLeft: 10 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat-Medium', textAlign: 'center' }}>{item.proPlanTitle}</Text>
                    <Text style={{ color: '#A5A6A6', fontSize: 12, fontFamily: 'Montserrat-Regular', }}>{item.proPlanWeeks}</Text>
                </View>
            </ImageBackground>
        )
    }
    const renderWorkoutPlansItem = ({ item, index }) => {
        return (
            <ImageBackground resizeMode='stretch' source={uri = item?.dietImage} style={{ height: 250, margin: 10, width: 250 }} imageStyle={{ borderRadius: 20, }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center', width: '100%', borderRadius: 20, paddingBottom: 10, paddingLeft: 10 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat-Medium', }}>{item.dietTitle}</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat-Medium', }}>({item.dietCalaries})</Text>
                    <Text style={{ color: '#A5A6A6', fontSize: 12, fontFamily: 'Montserrat-Regular', }}>{item.dietWeeks}</Text>
                </View>
            </ImageBackground>
        )
    }


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleText}>Non Veg Fat Loss Diet (Men) <Icon name="right" size={15} color="#AB750C" style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 40 }} /></Text>
            <FlatList
                data={dietlist}
                renderItem={renderWorkoutPlansItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                key={dietlist}
                keyExtractor={(item, index) => index + 'id'}
            />

            <Text style={styles.titleText}>Extreme Shred Diet Plan <Icon name="right" size={15} color="#AB750C" style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 40 }} /></Text>
            <View>
                <FlatList
                    data={proPlanlist}
                    renderItem={renderProPlansItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    key={proPlanlist}
                    keyExtractor={(item, indexx) => indexx}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
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
        marginBottom: 20,
        marginTop: 80
    },
    titleText1: {
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        marginHorizontal: 10
    }
});

export default DietPlanScreen;
