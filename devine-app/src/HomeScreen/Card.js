import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';

const Card = ({image, productName, cost, instock, id, categoryName}) => {
  const navigation = useNavigation();

  return (
    <View style={tw`mt-5`}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetailPage', {id});
          console.log(id);
        }}>
        <View style={styles.card}>
          <Image
            source={{uri: image}}
            style={[styles.image, tw.style('m-0')]}
          />
          <Text style={tw`font-semibold text-xs text-gray-600 pt-1 mx-1`}>
            {productName}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: 'gray',
              paddingTop: 1,
              marginHorizontal: 4,
            }}>
            {categoryName}
          </Text>
          <View style={tw`flex-row items-baseline mx-1 mb-1`}>
            <FontAwesome name={'rupee'} color={'#048C8C'} />
            <Text style={{color: '#048C8C', fontSize: 12, paddingTop: 0.5}}>
              {cost}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#048C8C',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 1,
            }}>
            {instock ? (
              <Text style={tw`text-white text-xs font-semibold`}>
                Add to Cart
              </Text>
            ) : (
              <Text style={tw`text-white text-xs font-semibold`}>
                Out of Stock
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    shadowColor: '#9999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#048C8C',
    width: 120,
  },
  image: {
    width: 'auto',
    height: 100,
    borderWidth: 1,
    borderColor: '#048C8C',
  },
});

export default Card;
