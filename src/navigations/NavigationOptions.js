import React, { useEffect, useState, useRef } from 'react';
// import 
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
  NavigationLeftHeader,
  NavigationRightHeader,
  NavigationCenterHeader,
} from '../navigations/NavigationDrawerHeader';
export const hideHeaderOptions = ({ navigation }) => {
    return {
        headerShown: false,
    };
};
export const loginScreenHeaderOptions = ({ navigation }) => {
    return {
      headerLeft: () => (
        <TouchableOpacity
          onPress={() =>
            //navigation.navigate('UpcomingJobsTab', { screen: 'UpcomingJobs' })
            navigation.goBack()
          }
          style={{ marginLeft: 15, }}>
          {/* <Icon name="arrow-left" size={30} color="#242424" /> */}
          <Image resizeMode='contain'
            source={require('../assets/images/app_logo.jpg')}
            style={{
              //transform: [{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }],
              width: 25,
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        // <NavigationCenterHeader navigation={navigation} login />
        'HOME'
      ),
      headerTitleAlign: 'center',
  
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTitleStyle: {
        color: '#3D99A7',
        fontSize: 16,
        //fontFamily: 'Montserrat-Bold',
        marginTop: 5,
        textAlign: 'center',
        alignSelf: 'center',
      },
    };
  };
  
  export const HomeHeaderOptions = ({ navigation }) => {
    return {
      headerLeft: () => <NavigationRightHeader navigation={navigation} home />,
      //it will hide hamburger left side default
      // headerLeft: () => <NavigationLeftHeader navigation={navigation}  />,
      //headerShown: null,
      headerTitle: () => (
        <NavigationCenterHeader navigation={navigation} homeHeaderTab />
      ),
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTransparent: true,
      headerTitleStyle: {
        color: '#36384C',
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
        marginTop: 25,
      },
    };
  };
  export const WorkoutPlansHeaderOptions = ({ navigation }) => {
    return {
      headerLeft: () => <NavigationRightHeader navigation={navigation} workoutplan />,
      //it will hide hamburger left side default
      // headerLeft: () => <NavigationLeftHeader navigation={navigation}  />,
      //headerShown: null,
      headerTitle: () => (
        <NavigationCenterHeader navigation={navigation} homeHeaderTab />
      ),
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTransparent: true,
      headerTitleStyle: {
        color: '#36384C',
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
        marginTop: 25,
      },
    };
  };

  export const DietPlansHeaderOptions = ({ navigation }) => {
    return {
      headerLeft: () => <NavigationRightHeader navigation={navigation} dietplan />,
      //it will hide hamburger left side default
      // headerLeft: () => <NavigationLeftHeader navigation={navigation}  />,
      //headerShown: null,
      headerTitle: () => (
        <NavigationCenterHeader navigation={navigation} homeHeaderTab />
      ),
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTransparent: true,
      headerTitleStyle: {
        color: '#36384C',
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
        marginTop: 25,
      },
    };
  };

  export const MyAccountHeaderOptions = ({ navigation }) => {
    return {
      headerLeft: () => <NavigationRightHeader navigation={navigation} account />,
      //it will hide hamburger left side default
      // headerLeft: () => <NavigationLeftHeader navigation={navigation}  />,
      //headerShown: null,
      headerTitle: () => (
        <NavigationCenterHeader navigation={navigation}  />
      ),
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTransparent: true,
      headerTitleStyle: {
        color: '#36384C',
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
        marginTop: 25,
      },
    };
  };