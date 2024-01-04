// import React from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   useWindowDimensions,
//   Image,
// } from 'react-native';
// import tw from 'tailwind-react-native-classnames';
// import Header from '../Component/Header';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { dataTwo } from './MockDataDetails';

// const ProductCard = ({ dataTwo }) => {
//   const layout = useWindowDimensions();
//   const cardWidth = (layout.width - 40) / 2;
//   return (
//     <View style={[styles.card, { width: cardWidth }]}>
//       <View style={tw`p-2 flex-row`}>
//         <View
//           style={[
//             tw.style('flex-row justify-center items-center flex-grow'),
//             { backgroundColor: '#00abab' },
//           ]}>
//           <Image source={{ uri: dataTwo.image }} style={styles.image} />
//         </View>
//       </View>
//       <View style={tw`flex justify-center items-center`}>
//         <View>
//           <Text style={tw`font-medium`}>{dataTwo.productName}</Text>
//           <Text style={tw`text-gray-500 text-xs`}>{dataTwo.category}</Text>
//           <View style={tw`flex-row items-baseline`}>
//             <FontAwesome name={'rupee'} color={'#048C8C'} />
//             <Text style={[tw.style('font-medium'), { color: '#048C8C' }]}>
//               {dataTwo.cost}
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View style={tw`flex-row mt-1`}>
//         <View
//           style={[
//             tw.style(`flex-grow p-1 flex-row justify-center items-center`),
//             { backgroundColor: '#048C8C' },
//           ]}>
//           <Ionicons name={'cart-outline'} color={'white'} size={18} />
//           <Text style={tw`text-white text-sm font-medium mx-3`}>
//             ADD TO CARD 
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const ProductCategory = ({ route }) => {
//   const id = route.params;

//   return (
//     <SafeAreaView style={tw`flex-grow bg-white `}>
//       <View>
//         <Header />
//       </View>
//       <ScrollView showsVerticalScrollIndicator={false} style={tw`pt-2`}>
//         <View style={tw`flex flex-row flex-wrap justify-between p-4`}>
//           {dataTwo.map((info, index) => (
//             <ProductCard key={index} dataTwo={info} />
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ProductCategory;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     shadowColor: '#999',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.4,
//     shadowRadius: 2,
//     elevation: 4,
//     borderWidth: 1,
//     borderColor: '#048C8C',
//     zIndex: 1,
//     marginBottom: 10, // Adjust margin as needed
//   },
//   image: {
//     width: '100%', // Adjust to fill the container
//     height: 160,
//   },
// });




// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { BaseUrl } from '../BaseUrl';
// import CategoryCard from '../HomeScreen/Card'; // Make sure to replace with your actual CategoryCard component
// import ProductCard from '../HomeScreen/ProductCard'; // Make sure to replace with your actual ProductCard component

// const CategoryPage = ({ navigation }) => {
//   const [categories, setCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${BaseUrl}/getAllCategoryWithProduct`);
//         const data = await response.json();

//         if (response.ok && data.message === 'Categories retrieved successfully.') {
//           setCategories(data.data);
//         } else {
//           throw new Error(data.message || 'Failed to retrieve categories.');
//         }
//       } catch (err) {
//         console.error(err);
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleCategoryPress = (categoryId) => {
//     // Handle category press (if needed)
//     // For example, navigate to a category-specific page
//     console.log('Category pressed:', categoryId);
//   };

//   const handleProductPress = (productId) => {
//     // Handle product press (if needed)
//     // For example, navigate to a product details page
//     console.log('Product pressed:', productId);
//     navigation.navigate('ProductDetailPage', { productId });
//   };

//   if (error) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text style={styles.errorText}>
//           Failed to load data: {error.message}
//         </Text>
//       </View>
//     );
//   }

//   if (isLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text style={styles.loadingText}>Loading categories...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {/* Category FlatList */}
//       <FlatList
//         data={categories}
//         keyExtractor={(item) => (item.id ? item.id.toString() : 'undefined')}
//         renderItem={({ item }) => (
//           <CategoryCard
//             name={item.category_name}
//             id={item.id}
//             onPress={() => handleCategoryPress(item.id)}
//           />
//         )}
//       />

//       {/* Product FlatList */}
//       <FlatList
//         data={categories}
//         keyExtractor={(item) => (item.id ? item.id.toString() : 'undefined')}
//         renderItem={({ item }) => (
//           <ProductCard
//             image={item.image || ''}
//             productName={item.name || 'unavailable'}
//             cost={item.price || 0}
//             instock={item.quantity || 0}
//             id={item.id || 'no id available'}
//             categoryName={item.category_name || 'N/A'}
//             onPress={() => handleProductPress(item.id)}
//           />
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     color: '#048C8C',
//   },
// });

// export default CategoryPage;







import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BaseUrl } from '../BaseUrl';
import tw from 'tailwind-react-native-classnames';

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BaseUrl}/getAllCategoryWithProduct`);
        const responseData = await response.json();

        if (response.ok && responseData.message === 'Categories retrieved successfully.') {
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
      <FlatList
        data={data}
        keyExtractor={(item) => (item.id ? item.id.toString() : 'undefined')}
        renderItem={({ item }) => (
          <View style={tw`border border-blue-500 p-2 m-2`}>
            <Text>{item.category_name}</Text>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            {/* Add more properties as needed */}
          </View>
        )}
      />
    </View>
  );
};

export default CategoryPage;
