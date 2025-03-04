import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  Alert,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {AUTHNAVIGATOR} from '../../utils/routes';

const Cart: React.FC = () => {
  const navigation = useNavigation();
  const {cart, totalPrice} = useSelector((state: RootState) => state.cart);
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const checklogin = () => {
    if (!isLogin) {
      Alert.alert(
        'Giriş Yap',
        'Lütfen sepeti onaylamadan önce giriş yapınız.',
        [
          {
            text: 'İptal',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Giriş Yap',
            onPress: () => navigation.navigate(AUTHNAVIGATOR.LOGIN),
          },
        ],
      );
    }
  };
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          ListEmptyComponent={
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              Henüz Sepete Ürün Eklemediniz !
            </Text>
          }
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
        />
        {cart?.length == 0 ? null : (
          <View style={styles.priceContainer}>
            <View style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}>
              <Text style={styles.total}>Toplam</Text>
              <Text style={styles.price}>{totalPrice.toFixed(2)} TL</Text>
              <Text style={styles.info}>Kargo Bedava</Text>
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Button title="Sepeti Onayla" onPress={() => checklogin()} />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  total: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '300',
  },
  price: {
    fontSize: 16,
    color: Colors.BLACK,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 10,
    color: Colors.GREEN,
    fontWeight: '600',
  },
  priceContainer: {
    height: height * 0.08,
    borderTopWidth: 0.5,
    borderColor: Colors.GRAY,
    flexDirection: 'row',
  },
});

export default Cart;
