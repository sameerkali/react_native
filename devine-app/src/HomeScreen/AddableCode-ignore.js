import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import axios from 'axios';
import {BaseUrl} from '../BaseUrl';
import {useNavigation, useRoute} from '@react-navigation/native';

const PhysicalPoojaDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [poojaDetail, setPoojaDetail] = useState(null);

  useEffect(() => {
    const physicalPoojaId = route.params?.physicalPoojaId;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/getPhysicalPooja/${physicalPoojaId}`,
        );
        setPoojaDetail(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (physicalPoojaId) {
      fetchData();
    }
  }, [route.params?.physicalPoojaId]);

  const handleButtonPress = () => {
    navigation.navigate('LocationPooja');
    // console.log('Button pressed!');
  };

  return (
    <View style={tw`flex-1 p-4 bg-white`}>
      <Text style={tw`text-xl font-bold mb-6`}>InPerson Pooja Detail</Text>

      {poojaDetail ? (
        <>
          {poojaDetail.image && (
            <Image
              source={{uri: poojaDetail.image}}
              style={tw` h-96 mb-4 rounded-md`}
            />
          )}
          <Text style={tw`text-3xl font-bold mb-2`}>{poojaDetail.name}</Text>
          <Text style={tw`text-base text-2xl text-gray-500 mb-4`}>
            Price: {poojaDetail.price}$
          </Text>
          {/* Add any other details you want here */}
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Book Pooja</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={tw`text-base`}>Loading...</Text>
      )}
    </View>
  );
};

const styles = {
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default PhysicalPoojaDetail;
