import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native'
import { BaseUrl } from '../BaseUrl';

function PhysicalPuja() {
  const navigation = useNavigation();
  const [physicalPoojas, setPhysicalPoojas] = useState([]);

  useEffect(() => {
    fetch(${BaseUrl}/getAllPhysicalPooja)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setPhysicalPoojas(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={tw`bg-white p-4 m-2 rounded-md shadow-md flex-1`} onPress={() => handlePress(item)}>
    <Image source={{ uri: item.image }} style={tw`w-full h-60 mb-4 rounded-md`} />
    <Text style={tw`text-lg font-bold`}>{item.name}</Text>
    <Text style={tw`text-base text-gray-500`}>Price: {item.price}</Text>
  </TouchableOpacity>
  );

  const handlePress = (item) => {
    console.log('Item pressed:', item);
    navigation.navigate('physicalPoojaDetail', { physicalPoojaId: item.physical_Pooja_id });
  };

  return (
    <View style={tw`flex-1 p-10 bg-gray-100`}>
      <Text style={tw`text-xl font-bold mb-6`}>Imperson Pooja</Text>
      <FlatList
        data={physicalPoojas}
        keyExtractor={(item) => item.physical_Pooja_id.toString()}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}

export default PhysicalPuja;