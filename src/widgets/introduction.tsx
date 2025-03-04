import React from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import {height, width} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../utils/routes';
const Introduction: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTSLIST)}
      style={styles.container}>
      <Image
        source={require('../assets/images/ramazan.jpg')}
        style={{
          width: width - 15,
          height: height * 0.2,
          resizeMode: 'stretch',
          borderRadius: 8,
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default Introduction;
