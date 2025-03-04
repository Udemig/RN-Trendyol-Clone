import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import ProductItem from '../../components/products/productItem';
import {getAllProducts} from '../../store/actions/productsActions';
import Categories from '../../widgets/categories';
import {Colors} from '../../theme/colors';

const ProductList: React.FC = () => {
  const {products, pending} = useSelector((state: RootState) => state.products);
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts({category: selectedCategory}));
  }, [selectedCategory]);

  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      {pending ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center'}}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProductList;
