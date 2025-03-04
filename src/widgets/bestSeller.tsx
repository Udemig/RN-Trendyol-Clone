import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import WidgetHeader from '../components/widgets/widgetHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getBestSellerProducts} from '../store/actions/productsActions';
import {RootState} from '../store/index';
import ProductItem from '../components/products/productItem';
const BestSeller: React.FC = () => {
  const bestSellerProducts = useSelector(
    (state: RootState) => state.products.bestSellerProducts,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBestSellerProducts());
  }, []);
  return (
    <View style={styles.container}>
      <WidgetHeader title="Çok Satan Ürünler" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={bestSellerProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});

export default BestSeller;
