/* eslint-disable space-infix-ops */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable no-undef */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './src/Component/Footer';
import ProductCategory from './src/ProductScreen/ProductCategory';
import CartScreen from './src/CartScreen/CartScreen';
import AddressScreen from './src/AddressScreen.js/AddressScreen';
import AddPayment from './src/AddPayment/AddPayment';
import PanditForm from './src/Form/PanditForm';
import LiveScreen from './src/LiveScreen/LiveScreen';
import ErrorPage from './src/ErrorPages/ErrorPage';
import ManageAddress from './src/ManageAddress/ManageAddress';
import Home from './src/Login/Home';
import MainMusic from './src/screens/MainMusic';
import MusicFullScreen from './src/screens/MusicFullScreen';
import MusicHeader from './src/screens/MusicHeader';
import pujaOption from './src/pujaDetail/pujaOption';
import PhysicalPuja from './src/pujaDetail/PhysicalPuja';
import VirtualPuja from './src/pujaDetail/VirtualPuja';
import ProductDetailPage from './src/ProductScreen/ProductDetailPage';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tab"  >
        <Stack.Screen name="tab" component={Footer} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="ProductCategory" component={ProductCategory} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="live" component={LiveScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddAddress" component={AddressScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddPayment" component={AddPayment} options={{ headerShown: false }} />
        <Stack.Screen name="panditForm" component={PanditForm} options={{ headerShown: false }} />
        <Stack.Screen name="ManageAddress" component={ManageAddress} options={{ headerShown: false }} />
        <Stack.Screen name="MainMusic" component={MainMusic} />
        <Stack.Screen name="MusicHeader" component={MusicHeader} />
        <Stack.Screen name="MusicFullScreen" component={MusicFullScreen} />
        <Stack.Screen name="PujaOption" component={pujaOption} />
        <Stack.Screen name="Physical Puja" component={PhysicalPuja} />
        <Stack.Screen name="Virtual Puja" component={VirtualPuja} />
        <Stack.Screen name="ProductDetailPage" component={ProductDetailPage} />
        <Stack.Screen name="NotFound" component={ErrorPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
