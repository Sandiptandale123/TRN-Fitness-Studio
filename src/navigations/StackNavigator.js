import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import AccountScreen from '../screens/Home/AccountScreen';
//import SettingsScreen from '../screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DietPlanScreen from '../screens/Home/DietPlanScreen';
import WorkoutPlansScreen from '../screens/Home/WorkoutPlansScreen';
import { DietPlansHeaderOptions, HomeHeaderOptions, MyAccountHeaderOptions, WorkoutPlansHeaderOptions } from './NavigationOptions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Account') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Diet Plans') {
          iconName = focused ? 'bookmark' : 'bookmark-outline';
        } else if (route.name === 'Workout Plans') {
          iconName = focused ? 'clipboard' : 'clipboard-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        return <Ionicons name={iconName} size={size} color={focused ? '#FFA800' : '#1D1E20'} />;
      },
      tabBarActiveTintColor: '#FFA800',
      tabBarInactiveTintColor: '#1D1E20',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={HomeHeaderOptions}/>
    <Tab.Screen name="Diet Plans" component={DietPlanScreen} options={DietPlansHeaderOptions}/>
    <Tab.Screen name="Workout Plans" component={WorkoutPlansScreen} options={WorkoutPlansHeaderOptions}/>
    <Tab.Screen name="Account" component={AccountScreen} options={MyAccountHeaderOptions}/>
    {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
  </Tab.Navigator>
);

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;