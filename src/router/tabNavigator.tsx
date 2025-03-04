import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import {TABNAVIGATOR} from '../utils/routes';
import {Colors} from '../theme/colors';
import TabIcon from '../components/router/tabIcon';
import HeaderRight from '../components/router/headerRight';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const Tab = createBottomTabNavigator();
const TabNavigator: React.FC = () => {
  const {cart} = useSelector((state: RootState) => state.cart);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.BLACK,
        tabBarIcon: ({size, focused, color}) => {
          return (
            <TabIcon
              route={route}
              size={size}
              focused={focused}
              color={color}
            />
          );
        },
        headerRight: () => {
          return <HeaderRight />;
        },
      })}>
      <Tab.Screen name={TABNAVIGATOR.HOME} component={Home} />
      <Tab.Screen name={TABNAVIGATOR.SEARCH} component={Search} />
      <Tab.Screen name={TABNAVIGATOR.FAVORITES} component={Favorites} />
      <Tab.Screen
        options={{
          tabBarBadge: cart?.length,
        }}
        name={TABNAVIGATOR.CART}
        component={Cart}
      />
      <Tab.Screen name={TABNAVIGATOR.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
