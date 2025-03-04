import React, {useEffect} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../store/index';
import {getAllCategories} from '../store/actions/categoriesActions';
import CategoryItem from '../components/categoies/categoryItem';
import {height} from '../utils/constants';

const Categories: React.FC<Props> = ({navigation, route}) => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories({}));
  }, []);
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
};

export default Categories;
