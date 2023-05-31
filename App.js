// dependencies installed in this app :

// refer to package.json for details.

import React from 'react';
import MyBooksProvider from './context/MyBooksProvider';
import Navigation from './Navigation';

// const Tab = createBottomTabNavigator();
// const TabRoutes = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: () => (
//             <IonIcon name="home-outline" size={25} color="black" />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favourites"
//         component={Favourites}
//         options={{
//           tabBarLabel: 'Favourites',

//           tabBarIcon: () => (
//             <FontistoIcon name="bookmark" size={25} color="black" />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
// const Stack = createStackNavigator();
export default function App() {
  return (
    <MyBooksProvider >
      <Navigation />
    </MyBooksProvider>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="TabScreen">
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="TabScreen"
    //       component={TabRoutes}
    //     />
    //     <Stack.Screen name="BookCategory" component={BookCategory} />
    //     <Stack.Screen name="BookDetail" component={BookDetail} />
    //     <Stack.Screen name="SearchScreen" component={SearchScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
