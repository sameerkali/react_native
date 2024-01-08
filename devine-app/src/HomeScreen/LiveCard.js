import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { allData } from '../LiveScreen/LiveScreenData';
import { useNavigation } from '@react-navigation/native';

const Card = ({ image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`mt-5 relative`}>
      <View style={tw`bg-white border-red-500 border-2 rounded-xl w-12 absolute z-20 left-4 top-2 flex-row items-baseline`}>
        <View style={tw`h-2 w-2 rounded-full bg-red-500 m-1`}></View>
        <Text style={{ color: 'red', fontSize: 10, fontWeight: '500' }}>Live</Text>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const LiveCard = () => {
  const data = allData;
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();

  const scrollToPrevious = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToIndex({ index: 0, animated: true });
    }
  };

  const scrollToNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View>
      <View style={tw`flex-row mt-7`}>
        <View
          style={{
            flexGrow: 1,
            borderBottomWidth: 1,
            borderBottomColor: '#048C8C',
            padding: 5,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={tw`font-medium`}>Live Puja</Text>
          <TouchableOpacity onPress={() => navigation.navigate('live')}>
            <Text style={tw`font-medium`}>see all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-row justify-center items-center`}>
        <TouchableOpacity onPress={scrollToPrevious}>
          <FontAwesome name={'angle-left'} size={30} color={'#048C8C'} />
        </TouchableOpacity>
        <FlatList
          data={data}
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => (
            <Card
              image={item.image}
              onPress={() => navigation.navigate('live')}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity onPress={scrollToNext}>
          <FontAwesome name={'angle-right'} size={30} color={'#048C8C'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LiveCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
    marginHorizontal: 8,
    zIndex: 1,
    width: 200,
  },
  image: {
    width: '100%', // Use 100% width to fill the container
    height: 120,
    borderRadius: 8, // Adjust as needed
  },
});
