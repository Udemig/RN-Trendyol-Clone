import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import WidgetHeader from '../components/widgets/widgetHeader';
import {RootState} from '../store/index';
import ProductItem from '../components/products/productItem';
import {useDispatch, useSelector} from 'react-redux';
import {getPopulerProducts} from '../store/actions/productsActions';
const PopulerProducts: React.FC = () => {
  const populerProducts = useSelector(
    (state: RootState) => state.products.populerProducts,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopulerProducts());
  }, []);

  return (
    <View style={styles.container}>
      <WidgetHeader title="Popüler Ürünler" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={populerProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PopulerProducts;
