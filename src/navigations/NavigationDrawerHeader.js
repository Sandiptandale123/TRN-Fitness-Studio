import React, { useState } from 'react';
// import {useRoute} from '@react-navigation/native';
// import {useSelector, useDispatch} from 'react-redux';
// import {addMultiImageAction} from '../redux/action/addImageAction';
// import {clearGalleryImageAction} from '../redux/action/galleryAction';

//Import all required component
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export const NavigationLeftHeader = props => {
    const toggleDrawer = () => {
        props.navigation.openDrawer();
    };

    const goBack = () => {
        props.navigation.goBack();
    };

    // const goBackCreateEventScreen = () => {
    //   props.navigation.navigate('CreateEventScreen');
    // };
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // zIndex:-1,
            }}>
            {props.menu ? (
                <TouchableOpacity style={{ marginLeft: 25 }} onPress={toggleDrawer}>
                    {/* <Image source={MENU_LEFT_LOGO} /> */}
                    <Text>dj</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

export const NavigationRightHeader = props => {
    const toggleDrawer = () => {
        props.navigation.openDrawer();
    };

    const goBack = () => {
        props.navigation.goBack();
    };


    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // zIndex:-1,
            }}>
            {props.home ? (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        style={{ marginLeft: 20, height: 40, justifyContent: 'center', alignItems: 'center' }}
                    // onPress={toggleDrawer}
                    >
                        {/* <Image
                            resizeMode='contain'
                            source={require('../assets/images/app_logo.jpg')}
                            style={{ height: 25, width: 25, alignSelf: 'center', tintColor: '#000000' }}
                        /> */}
                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontSize: 22,
                                fontFamily: 'Montserrat-Medium',
                                // marginTop: 5,
                                textAlign: 'center',
                                alignSelf: 'center',
                            }}>
                            Today, 04 Dec
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : props.workoutplan ? (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        style={{ marginLeft: 20, height: 40, justifyContent: 'center', alignItems: 'center' }}
                    // onPress={toggleDrawer}
                    >
                        {/* <Image
                            resizeMode='contain'
                            source={require('../assets/images/app_logo.jpg')}
                            style={{ height: 25, width: 25, alignSelf: 'center', tintColor: '#000000' }}
                        /> */}
                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontSize: 22,
                                fontFamily: 'Montserrat-Medium',
                                // marginTop: 5,
                                textAlign: 'center',
                                alignSelf: 'center',
                            }}>
                            Workout Plan
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : props.dietplan ? (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        style={{ marginLeft: 20, height: 40, justifyContent: 'center', alignItems: 'center' }}
                    // onPress={toggleDrawer}
                    >
                        {/* <Image
                            resizeMode='contain'
                            source={require('../assets/images/app_logo.jpg')}
                            style={{ height: 25, width: 25, alignSelf: 'center', tintColor: '#000000' }}
                        /> */}
                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontSize: 22,
                                fontFamily: 'Montserrat-Medium',
                                // marginTop: 5,
                                textAlign: 'center',
                                alignSelf: 'center',
                            }}>
                            Explore
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : props.account ? (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        style={{ marginLeft: 20, height: 40, justifyContent: 'center', alignItems: 'center' }}
                    // onPress={toggleDrawer}
                    >
                        {/* <Image
                                resizeMode='contain'
                                source={require('../assets/images/app_logo.jpg')}
                                style={{ height: 25, width: 25, alignSelf: 'center', tintColor: '#000000' }}
                            /> */}
                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontSize: 22,
                                fontFamily: 'Montserrat-Medium',
                                // marginTop: 5,
                                textAlign: 'center',
                                alignSelf: 'center',
                            }}>
                            My Account
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : null}
        </View>
    );
};

export const NavigationCenterHeader = props => {
    return (
        <View>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',

                    // width: Dimensions.get('window').width - 15,
                }}>
                {props.homeHeaderTab ? (
                    <>
                        {/* <Image
                            source={require('../assets/images/app_logo.jpg')}
                            style={{
                                width: 20,
                                height: 25,
                                //  marginLeft:-90,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            resizeMode={'contain'}
                        /> */}
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center', marginRight: -300
                        }}>
                            <Icon name="calendar-outline" size={30} color="#AB750C" />
                        </View>
                        {/* <Text
                            style={{
                                color: '#3D99A7',
                                fontSize: 16,
                                fontFamily: 'Montserrat-Bold',
                                // marginTop: 5,
                                textAlign: 'center',
                                alignSelf: 'center',
                            }}>
                            Testimonials
                        </Text> */}
                    </>
                ) : null
                }
            </View>
        </View>
    );
};