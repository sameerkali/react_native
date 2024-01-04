import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {BaseUrl} from '../BaseUrl';
import tw from 'tailwind-react-native-classnames';
import Header from '../Component/Header';
import { useNavigation } from '@react-navigation/native';

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BaseUrl}/getAllCategoryWithProduct`);
        const responseData = await response.json();

        if (
          response.ok &&
          responseData.message === 'Categories retrieved successfully.'
        ) {
          setData(responseData.data);
        } else {
          throw new Error(responseData.message || 'Failed to retrieve data.');
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

  if (error) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-red-600`}>
          Failed to load data: {error.message}
        </Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-blue-500`}>Loading data...</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 items-center bg-white`}>
      <Header />
      <FlatList
        data={data}
        keyExtractor={item =>
          item.category_id ? item.category_id.toString() : 'undefined'
        }
        renderItem={({item, id}) => (
          <View style={tw`mx-4`}>
            <Text style={tw`text-lg font-bold mb-2`}>{item.category_name}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductDetailPage', {id});
                console.log('this is id ==== (card page)' + id);
              }}>
              <FlatList
                horizontal
                data={item.newProductTables}
                keyExtractor={product =>
                  product.id ? product.id.toString() : 'undefined'
                }
                renderItem={({item: product}) => (
                  <View style={tw`border border-blue-500 p-2 m-2`}>
                    <Image
                      source={{uri: product.image}}
                      style={tw`w-32 h-32`}
                    />
                    <Text>{product.name}</Text>
                    <Text>{product.price}</Text>
                    {/* Add more properties as needed */}
                  </View>
                )}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default CategoryPage;
