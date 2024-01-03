import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  Image,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Header from '../Component/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { dataTwo } from './MockDataDetails';

const ProductCard = ({ dataTwo }) => {
  const layout = useWindowDimensions();
  const cardWidth = (layout.width - 40) / 2;
  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <View style={tw`p-2 flex-row`}>
        <View
          style={[
            tw.style('flex-row justify-center items-center flex-grow'),
            { backgroundColor: '#00abab' },
          ]}>
          <Image source={{ uri: dataTwo.image }} style={styles.image} />
        </View>
      </View>
      <View style={tw`flex justify-center items-center`}>
        <View>
          <Text style={tw`font-medium`}>{dataTwo.productName}</Text>
          <Text style={tw`text-gray-500 text-xs`}>{dataTwo.category}</Text>
          <View style={tw`flex-row items-baseline`}>
            <FontAwesome name={'rupee'} color={'#048C8C'} />
            <Text style={[tw.style('font-medium'), { color: '#048C8C' }]}>
              {dataTwo.cost}
            </Text>
          </View>
        </View>
      </View>
      <View style={tw`flex-row mt-1`}>
        <View
          style={[
            tw.style(`flex-grow p-1 flex-row justify-center items-center`),
            { backgroundColor: '#048C8C' },
          ]}>
          <Ionicons name={'cart-outline'} color={'white'} size={18} />
          <Text style={tw`text-white text-sm font-medium mx-3`}>
            ADD TO CARD 
          </Text>
        </View>
      </View>
    </View>
  );
};

const ProductCategory = ({ route }) => {
  const id = route.params;

  return (
    <SafeAreaView style={tw`flex-grow bg-white `}>
      <View>
        <Header />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`pt-2`}>
        <View style={tw`flex flex-row flex-wrap justify-between p-4`}>
          {dataTwo.map((info, index) => (
            <ProductCard key={index} dataTwo={info} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#048C8C',
    zIndex: 1,
    marginBottom: 10, // Adjust margin as needed
  },
  image: {
    width: '100%', // Adjust to fill the container
    height: 160,
  },
});


