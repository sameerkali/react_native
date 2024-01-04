/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Touchable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Component/Header';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BaseUrl} from '../BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

const AddressScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [token, setToken] = useState('');
  useEffect(() => {
    readData();
  }, []);
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  const handleCreateAddress = async () => {
    try {
      const apiUrl = `${BaseUrl}/createAddress`;
      const data = {
        name: name,
        address: address,
        city: city,
        state: state,
        zipCode: pinCode,
        country: country,
        phone: number,
      };
      const response = await axios.post(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Response:', response.status);
      if (response.status === 201) {
        const successMessage = response.data.message;
        navigation.navigate('AddPayment');
        Alert.alert(successMessage);
        console.log(successMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={tw`flex-grow`}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[tw`mx-3 my-3 flex`, {gap: 3}]}>
          <Text
            style={tw`text-black text-center font-medium text-lg text-gray-800`}>
            Add Address
          </Text>
          <Text style={tw`text-gray-700`}>Name</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2 `}
            placeholder=""
            value={name}
            onChangeText={text => setName(text)}
          />
          <Text style={tw`text-gray-700 mt-2`}>Number</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2`}
            placeholder=""
            value={number}
            onChangeText={text => setNumber(text)}
          />
          <Text style={tw`text-gray-700 mt-2`}>PinCode</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2`}
            placeholder=""
            value={pinCode}
            onChangeText={text => setPinCode(text)}
          />
          <Text style={tw`text-gray-700 mt-2`}>Address</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2`}
            placeholder=""
            value={address}
            onChangeText={text => setAddress(text)}
          />
          <Text style={tw`text-gray-700 mt-2`}>City</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2`}
            placeholder=""
            value={city}
            onChangeText={text => setCity(text)}
          />
          <Text style={tw`text-gray-700 mt-2`}>State</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2`}
            placeholder=""
            value={state}
            onChangeText={text => setState(text)}
          />
          <Text style={tw`text-gray-700 mt-2`}>Country</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-md p-2`}
            placeholder=""
            value={country}
            onChangeText={text => setCountry(text)}
          />

          <TouchableOpacity
            style={[{backgroundColor: '#048C8C'}, tw`rounded-md p-2 mt-5`]}
            onPress={handleCreateAddress}>
            <Text style={tw`text-center text-white font-medium`}>
              Add Address
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressScreen;
