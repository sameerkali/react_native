import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';
import { BaseUrl } from '../BaseUrl';
import { useRoute } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const ProductDetailPage = () => {
  const route = useRoute();
  const [productData, setProductData] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const productId = route.params?.id;

    console.log('ProductDetailPage - productId:', productId);

    const fetchData = async () => {
      try {
        const response = await fetch(`${BaseUrl}/getNewProductbyID/${productId}`);
        const result = await response.json();

        console.log('ProductDetailPage - API response:', result);

        if (response.ok && result.data) {
          setProductData(result.data);
        } else {
          console.warn('Product details not found.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (productId) {
      console.log('ProductDetailPage - Fetching data...');
      fetchData();
    } else {
      console.warn('ProductDetailPage - No productId found in route params.');
    }
  }, [route.params?.id]);

  const handleButtonPress = () => {
    console.log('ProductDetailPage - Button pressed');
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  console.log('ProductDetailPage - Rendered with productData:', productData);

  return (
    <View style={tw`flex-1 bg-white`}>
      {productData ? (
        <>
          <Image source={{ uri: productData.image }} style={tw`w-full h-96 mb-4`} />
          <Text style={tw`text-3xl font-bold ml-5`}>{productData.name}</Text>
          <Text style={tw`text-lg font-bold ml-5`}>{productData.price}</Text>
          <Text style={tw`text-lg font-bold ml-5`}>{productData.quantity}</Text>
          <Text style={tw`text-lg font-bold ml-5`}>{productData.unit_id}</Text>
          {/* Add more text components for other properties as needed */}
        </>
      ) : (
        <Text>No data received for the product.</Text>
      )}

      <TouchableOpacity style={tw`bg-blue-500 w-56 py-6 ml-6 mt-4 rounded`} onPress={handleButtonPress}>
        <Text style={tw`text-white text-base text-center`}>Add To Product</Text>
      </TouchableOpacity>

      <Modal
        visible={isPopupVisible}
        transparent
        animationType="slide"
        onRequestClose={handlePopupClose}
      >
        <View style={styles.popupContainer}>
          <Text style={styles.popupText}>Product added successfully!</Text>
          <TouchableOpacity style={styles.closeButton} onPress={handlePopupClose}>
            <Text style={tw`text-blue-500`}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default ProductDetailPage;
