import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {authentication} from './firebase/firebase';
import {signOut} from 'firebase/auth';
import auth from '@react-native-firebase/auth';

import {firebase} from './firebase/firebase';

const Settings = ({navigation, route}) => {
  const [user, setUser] = useState();
  const dataRef = firebase.firestore().collection('name');

  const logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            navigation.replace('LoginScreen');
            // auth()
            //   .signOut()
            //   .then(() => navigation.replace('LoginScreen'))
            //   .catch(error => {
            //     console.log(error);
            //     if (error.code === 'auth/no-current-user')
            //       navigation.replace('LoginScreen');
            //     else Alert.alert(error);
            //   });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.main}>
      <Image
        source={require('../../assets/genres/profile_pic.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.name1}>Your Profile</Text>
      <View style={styles.desc}>
        <Text style={styles.name}>Name : Annonymous</Text>
        <Text style={styles.name}>E-mail id : msn@gmail.com </Text>
        <Text style={styles.name}>Address : xyz street</Text>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => logout()}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E6FFFD',
  },
  name: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 4,
  },
  profileImage: {
    width: 300,
    height: 250,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 45,
    padding: 20,
  },
  desc: {
    alignItems: 'flex-start',
    borderColor: 'black',
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    margin: 25,
  },

  name1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  submitButton: {
    margin: 8,
    backgroundColor: 'black',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 14,
    borderRadius: 10,
    width: 250,
    elevation: 6,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export default Settings;
