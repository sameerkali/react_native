import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../HomeScreen/HomeScreen';
import ProductScreen from '../ProductScreen/ProductScreen';
import CartScreen from '../CartScreen/CartScreen';
import MusicFullScreen from '../screens/MusicFullScreen';
import LiveScreen from '../LiveScreen/LiveScreen';
import ErrorPage from '../ErrorPages/ErrorPage';
import MusicHeader from '../screens/MusicHeader';
import MainMusic from '../screens/MainMusic';
import PujaOption from '../pujaDetail/pujaOption';

const Tab = createBottomTabNavigator();

function Footer() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#048C8C',
        tabBarInactiveTintColor: '#090826',
        tabBarIconStyle: { marginBottom: 0 },
        tabBarStyle: { paddingBottom: 5, borderTopColor: '#090826', borderTopWidth: 2, paddingTop: 5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Home</Text>,
          tabBarIcon: ({ color, size, focused }) => <AntDesign name={'home'} color={color} size={18} />,
        }}
      />
      <Tab.Screen
        name="Mantra"
        component={MainMusic}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Mantra</Text>,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="hands-pray" color={color} size={18} />,
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Shop</Text>,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="shopping-outline" color={color} size={18} />,
        }}
      />
      <Tab.Screen
        name="live"
        component={LiveScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Live</Text>,
          tabBarIcon: ({ color, size, focused }) => <MaterialIcons name="live-tv" color={color} size={18} />,
        }}
      />
      <Tab.Screen
        name="Puja"
        component={PujaOption}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Puja</Text>,
          tabBarIcon: ({ color, size, focused }) => <AntDesign name={'shoppingcart'} color={color} size={18} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default Footer;
