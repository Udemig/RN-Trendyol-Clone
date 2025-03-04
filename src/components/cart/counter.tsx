import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {CounterProps} from '../../models/ui/counterProps';
import {Colors} from '../../theme/colors';
import Icon from '@react-native-vector-icons/feather';
import {useDispatch} from 'react-redux';
import {decreaseQuantity, increaseQuantity, updateQuantity} from '../../store/slice/cartSlice';
const Counter: React.FC<CounterProps> = ({quantity, product}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch(decreaseQuantity(product))}>
        <Icon name="minus" size={20} />
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(increaseQuantity(product))}>
        <Icon name="plus" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    borderRadius: 100,
    flexDirection: 'row',
    padding: 5,
  },
  quantity: {
    color: Colors.PRIMARY,
    fontSize: 14,
    fontWeight: '500',
  },
  quantityContainer: {
    backgroundColor: Colors.SOFTORANGE,
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginHorizontal: 5,
  },
});

export default Counter;
