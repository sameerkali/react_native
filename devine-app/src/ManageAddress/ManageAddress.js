/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from '../Component/Header';
import tw from 'tailwind-react-native-classnames';
import axios from 'axios';
import { BaseUrl } from '../BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ManageAddress = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [token, setToken] = useState('');
  useEffect(() => {
    readData();
  }, []);
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      setToken(value)
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  useEffect(() => {
    if(token){
      fetchAddressData();
    }
  }, [token]); 
  const fetchAddressData = async () => {
    try {
      const apiUrl = `${BaseUrl}/getAddressByUserId`;
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.status);

      const resp = await response.data;
      setAddress(resp.data.address || '');
      setCity(resp.data.city || '');
      setState(resp.data.state || ''); 
      setCountry(resp.data.country || ''); 
    } catch (error) {
      console.error('Error:nmfndmn', error);
    }
  };

  const handleUpdateAddress = async () => {
    try {
      const apiUrl = `${BaseUrl}/updateAddress`;
      const data = {
        address: address,
        city: city,
        state: state,
        country: country
      };
      const response = await axios.post(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 200) {
      const successMessage = response.data.message;
     navigation.navigate('Home');
     Alert.alert(successMessage);
    }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={tw`flex-grow`}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[tw`mx-3 my-3 flex`, { gap: 3 }]}>
          <Text style={tw`text-black text-center font-medium text-lg text-gray-800`}>Edit Address</Text>
          <Text style={tw`text-gray-700 mt-2`}>Address</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2`}
            placeholder=''
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <Text style={tw`text-gray-700 mt-2`}>City</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2`}
            placeholder=''
            value={city}
            onChangeText={(text) => setCity(text)}
          />
          <Text style={tw`text-gray-700 mt-2`}>State</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2`}
            placeholder=''
            value={state}
            onChangeText={(text) => setState(text)}
          />
          <Text style={tw`text-gray-700 mt-2`}>Country</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2`}
            placeholder=''
            value={country}
            onChangeText={(text) => setCountry(text)}
          />

          <TouchableOpacity
            style={[{ backgroundColor: '#048C8C' }, tw`rounded-md p-2 mt-5`]} onPress={handleUpdateAddress}
          >
            <Text style={tw`text-center text-white font-medium`}>Update Address</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageAddress;
