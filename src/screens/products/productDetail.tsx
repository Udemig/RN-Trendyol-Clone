import React, {useEffect} from 'react';
import {Text, StyleSheet, ScrollView, Image, View} from 'react-native';
import {RouteType} from '../routes/RouteType';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../store/actions/productsActions';
import {RootState} from '../../store';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import Button from '../../components/ui/button';
import Rate from '../../components/products/rate';
import FavoritesButton from '../../components/favorites/favoritesButton';
import FreeCargo from '../../components/badges/freeCargo';
import Discount from '../../components/badges/discount';
import Delivery from '../../components/badges/delivery';
import {addCart} from '../../store/slice/cartSlice';

type Props = RouteType<'ProductDetail'>;

const ProductDetail: React.FC<Props> = ({route}) => {
  const {productId} = route.params;
  const {product} = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetail({id: productId}));
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FavoritesButton product={product} />
          <Image source={{uri: product.image}} style={styles.image} />
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.title}>{product?.title}</Text>
          {product.rating && <Rate size="large" rating={product?.rating} />}
          <Text style={styles.description}>{product?.description}</Text>
          <View style={{flexDirection: 'row'}}>
            <FreeCargo />
            <Discount />
            <Delivery />
          </View>
        </ScrollView>
      </View>
      <View style={styles.priceContainer}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}>
          <Text style={styles.price}>{product?.price} TL</Text>
          <Text style={styles.info}>Kargo Bedava</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button
            title="Sepete Ekle"
            onPress={() => dispatch(addCart(product))}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    height: height * 0.1,
    borderTopWidth: 0.5,
    borderColor: Colors.GRAY,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
  },
  category: {
    fontSize: 18,
    color: Colors.PRIMARY,
    marginVertical: 10,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  price: {
    fontSize: 18,
    color: Colors.PRIMARY,
    fontWeight: '600',
  },
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  info: {
    fontSize: 12,
    color: Colors.GREEN,
    fontWeight: '600',
  },
});

export default ProductDetail;
