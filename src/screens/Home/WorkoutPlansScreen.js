import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const WorkoutPlansScreen = () => {

    const [workoutlist, setWorkoutList] = useState(
        [
            {
                workoutTitle: 'Fat Loss 3 Days',
                workoutImage: require('../../assets/images/push_up.jpg'),
                workoutType: "Beginner",
                workoutWeeks: '12 Weeks',
            },
            {
                workoutTitle: 'Fat Loss 4 Days',
                workoutImage: require('../../assets/images/diet_icon.jpeg'),
                workoutType: "Beginner",
                workoutWeeks: '12 Weeks',
            },
            {
                workoutTitle: 'Fat Loss 5 Days',
                workoutImage: require('../../assets/images/push_up.jpg'),
                workoutType: "Beginner",
                workoutWeeks: '12 Weeks',
            },
            {
                workoutTitle: 'Fat Loss 5 Days',
                workoutImage: require('../../assets/images/diet_icon.jpeg'),
                workoutType: "Intermediate",
                workoutWeeks: '12 Weeks',
            },
        ]);

    const [proPlanlist, setProPlanList] = useState(
        [
            {
                proPlanTitle: 'Extreme Shred Program',
                proPlanImage: require('../../assets/images/push_up.jpg'),
                proPlanWeeks: '10 Weeks',
            },
            {
                proPlanTitle: 'Winter Bulk Program',
                proPlanImage: require('../../assets/images/diet_icon.jpeg'),
                proPlanWeeks: '16 Weeks',
            },
            {
                proPlanTitle: 'Advanced Hypertrophy Program',
                proPlanImage: require('../../assets/images/push_up.jpg'),
                proPlanWeeks: '12 Weeks',
            },
            {
                proPlanTitle: 'Student Transformation Plan',
                proPlanImage: require('../../assets/images/diet_icon.jpeg'),
                proPlanWeeks: '12 Weeks',
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
            <ImageBackground resizeMode='stretch' source={uri = item?.workoutImage} style={{ height: 250, margin: 10, width: 250 }} imageStyle={{ borderRadius: 20, }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center', width: '100%', borderRadius: 20, paddingBottom: 10, paddingLeft: 10 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat-Medium', }}>{item.workoutTitle}</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat-Medium', }}>({item.workoutType})</Text>
                    <Text style={{ color: '#A5A6A6', fontSize: 12, fontFamily: 'Montserrat-Regular', }}>12 Weeks</Text>
                </View>
            </ImageBackground>
        )
    }


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleText}>Fat Loss Workouts (Men) <Icon name="right" size={15} color="#AB750C" style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 40 }} /></Text>
            <FlatList
                data={workoutlist}
                renderItem={renderWorkoutPlansItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                key={workoutlist}
                keyExtractor={(item, index) => index + 'id'}
            />

            <Text style={styles.titleText}>Pro Plans <Icon name="right" size={15} color="#AB750C" style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 40 }} /></Text>
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

export default WorkoutPlansScreen;
