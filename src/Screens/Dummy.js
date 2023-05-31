import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Dummy = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      <Text>Dummy</Text>
    </View>
  );
};

export default Dummy;
