import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';

const HeaderRight: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Icon name="notifications-outline" size={30} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginRight: 5,
  },
});

export default HeaderRight;
