import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Card from './Card'; // Make sure this component is correctly implemented
import {useNavigation} from '@react-navigation/native';
import {BaseUrl} from '../BaseUrl';

const ProductCard = ({name, id}) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BaseUrl + '/getAllCategoryWithProduct');
        const fetchedData = await response.json();

        if (
          response.ok &&
          fetchedData.message === 'Categories retrieved successfully.'
        ) {
          setData(fetchedData.data);
        } else {
          throw new Error(
            fetchedData.message || 'Failed to retrieve categories.',
          );
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const scrollToPrevious = () => {
    if (scrollViewRef.current && data.length > 0) {
      scrollViewRef.current.scrollToIndex({index: 0, animated: true});
    }
  };

  const scrollToNext = () => {
    if (scrollViewRef.current && data.length > 0) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  };

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Failed to load data: {error.message}
        </Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  // Flatten the data to get all products
  const allProducts = data.reduce((acc, category) => {
    const products = category.newProductTables.map(product => ({
      ...product,
      category_name: category.category_name,
    }));
    return [...acc, ...products];
  }, []);

  return (
    <View>
      <View style={tw`flex-row mt-5`}>
        <View style={styles.categoryHeader}>
          <Text style={tw`font-medium`}>{name}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductCategory', {id})}>
            <Text style={tw`font-medium`}>see all</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductCategory', {id})}>
            <Text style={tw`font-medium`}>see all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-row justify-center items-center`}>
        <TouchableOpacity onPress={scrollToPrevious}>
          <FontAwesome name={'angle-left'} size={30} color={'#048C8C'} />
        </TouchableOpacity>
        <FlatList
          data={allProducts}
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item}) => (
            <Card
              image={item.image || ''}
              productName={item.name || 'unavailable'}
              cost={item.price || 0}
              instock={item.quantity || 0}
              id={item.id || 'no id available'}
              categoryName={item.category_name || 'N/A'}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableOpacity onPress={scrollToNext}>
          <FontAwesome name={'angle-right'} size={30} color={'#048C8C'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#048C8C',
  },
  categoryHeader: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#048C8C',
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductCard;
