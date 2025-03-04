import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import ProductItem from '../../components/products/productItem';

const Favorites: React.FC = () => {
  const {favorites} = useSelector((state: RootState) => state.favorites);
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={favorites}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorites;
