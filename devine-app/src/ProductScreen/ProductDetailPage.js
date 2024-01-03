import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {BaseUrl} from '../BaseUrl';
import {useRoute} from '@react-navigation/native';

const ProductDetailPage = () => {
  const route = useRoute();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const productId = route.params?.productId;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BaseUrl}getNewProductbyID/${productId}`,
        );
        const result = await response.json();

        if (result && result.data) {
          setProductData(result.data[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (productId) {
      fetchData();
    }
  }, [route.params?.productId]);

  const handleButtonPress = () => {
    console.log('====================================');
    // Add your logic for button press here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product detail </Text>
      {productData && (
        <>
          <Image source={{uri: productData.image}} style={styles.image} />
          <Text>{productData.name}</Text>
          <Text>{productData.price}</Text>
          <Text>{productData.quantity}</Text>
          <Text>{productData.unit_id}</Text>
          {/* Add more text components for other properties as needed */}
        </>
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
