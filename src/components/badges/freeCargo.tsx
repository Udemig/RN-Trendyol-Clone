import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';
import { width } from '../../utils/constants';
const FreeCargo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="cube-sharp" color={Colors.GRAY} size={18} />
      <Text style={styles.text}>Kargo Bedava</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
    width:  width*0.12,
    margin: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 8,
    marginTop: 5,
  },
});

export default FreeCargo;
