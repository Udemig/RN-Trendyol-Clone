import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Categories from '../../widgets/categories';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Introduction from '../../widgets/introduction';
import BestSeller from '../../widgets/bestSeller';
import PopulerProducts from '../../widgets/populerProducts';

const Home: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <Introduction />
          <BestSeller />
          <PopulerProducts />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
