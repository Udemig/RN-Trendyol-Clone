import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';
import {width} from '../../utils/constants';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {AUTHNAVIGATOR} from '../../utils/routes';
import {addFavorite} from '../../store/slice/favoriteSlice';
import { addFavoriteOther } from '../../store/slice/productSlice';
const FavoritesButton: React.FC<ProductItemProps> = ({product}) => {
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const checklogin = () => {
    if (!isLogin) {
      Alert.alert(
        'Giriş Yap',
        'Lütfen favorilere eklemeden önce giriş yapınız',
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
    } else {
      dispatch(addFavorite(product));
      dispatch(addFavoriteOther(product));
    }
  };
  return (
    <TouchableOpacity onPress={checklogin} style={styles.container}>
      <Icon
        name={product.isFavorite ? 'heart' : 'heart-outline'}
        size={20}
        color={Colors.PRIMARY}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width * 0.072,
    height: width * 0.072,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    right: 5,
    top: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: Colors.WHITE,
  },
});

export default FavoritesButton;
