import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BaseUrl } from '../BaseUrl';
import { useRoute } from '@react-navigation/native';

const ProductDetailPage = () => {
  const route = useRoute();
  const [productData, setProductData] = useState(null);
  const [noDataReceived, setNoDataReceived] = useState(false);

  useEffect(() => {
    const productId = route.params?.productId;
    
    if (productId) {
      console.log('Product ID received:', productId); // Log the product ID
      fetchData(productId);
    } else {
      console.log('Product ID is undefined. Showing mock data.');
      // Show mock data here if needed
      setProductData({
        name: 'Mock Product',
        price: 0,
        quantity: 0,
        unit_id: 'N/A',
        image: 'https://icon-library.com/images/no-data-icon/no-data-icon-10.jpg',
      });
    }
  }, [route.params?.productId]);

  const fetchData = async (productId) => {
    try {
      const response = await fetch(`${BaseUrl}getNewProductbyID/${productId}`);
      const result = await response.json();

      if (result && result.data) {
        setProductData(result.data[0]);
      } else {
        setNoDataReceived(true);
        console.log('No data received for product ID:', productId);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonPress = () => {
    console.log('====================================');
    // Add your logic for button press here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product detail </Text>
      {noDataReceived ? (
        <Text>No data received for this product</Text>
      ) : (
        productData && (
          <>
            <Image source={{ uri: productData.image }} style={styles.image} />
            <Text>{productData.name}</Text>
            <Text>{productData.price}</Text>
            <Text>{productData.quantity}</Text>
            <Text>{productData.unit_id}</Text>
            {/* Add more text components for other properties as needed */}
          </>
        )
      )}
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Add To Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProductDetailPage;
