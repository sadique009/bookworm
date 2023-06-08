import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IonIcon from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import HomeScreen from './src/Screens/HomeScreen';
import Favourites from './src/Screens/Favourites';
import BookCategory from './src/Screens/BookCategory';
import BookDetail from './src/Screens/BookDetail';
import SearchScreen from './src/Screens/SearchScreen';
import Settings from './src/Screens/Settings';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';

import axios from 'axios';

import Dummy from './src/Screens/Dummy';

const Tab = createBottomTabNavigator();
const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: 'black',
          tabBarIcon: () => (
            <IonIcon name="home-outline" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarActiveTintColor: 'black',

          tabBarIcon: () => (
            <FontistoIcon name="bookmark" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarActiveTintColor: 'black',

          tabBarIcon: () => (
            <IonIcon name="settings-outline" size={25} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Stack = createNativeStackNavigator();

export default function Navigation() {
  // const [booksData, setBooksData] = useState([]);

  // const request = category => {
  //   axios
  //     .get(`${baseUrl}?q=${category}`)
  //     .then(response => {
  //       setBooksData(response.data.items);
  //       setFilteredData(response.data.items);
  //       // console.log(response.data.items);
  //       // navigation.navigate('Dummy', {booksData: booksData});
  //       navigation.navigate('BookCategory', {booksData});
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="TabScreen"
          component={TabRoutes}
        />

        {/* <Stack.Navigator initialRouteName="TabScreen"> */}
        {/* <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="TabScreen"
          component={TabRoutes}
          // initialParams={booksData }
        /> */}
        {/* <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
        <Stack.Screen name="BookCategory" component={BookCategory} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="Dummy" component={Dummy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
