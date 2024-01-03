/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {BaseUrl} from '../BaseUrl';
import axios from 'axios';
const Tab = ({item, setActiveTab, activeTab, setId, data, index}) => {
  const handleClick = () => {
    setId(data[index].category_id), setActiveTab(item);
  };
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={tw.style(
        'mx-1  p-1 px-2 rounded-md',
        activeTab === item
          ? {backgroundColor: '#048C8C'}
          : 'border border-gray-300 ',
      )}>
      <Text
        style={tw.style(
          activeTab === item
            ? 'text-white font-medium'
            : 'text-gray-600 font-medium',
        )}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};
const Card = ({image, productName, category, cost, instock}) => {
  return (
    <View style={tw`mt-5`}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1180950303/photo/praying-hands-with-faith-in-religion-and-belief-in-god-on-dark-background-power-of-hope-or.webp?s=1024x1024&w=is&k=20&c=AoDwKX7Yv4cz5fqvUgF45hZ4wteDsfCpjkK6MLw1LUU=',
          }}
          style={[styles.image, tw.style('m-1')]}
        />
        <Text style={tw`font-semibold text-xs text-gray-600 pt-1 mx-1 h-5`}>
          {productName}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: 'gray',
            paddingTop: 1,
            marginHorizontal: 6,
          }}>
          {category}
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
              Add to Card
            </Text>
          ) : (
            <Text style={tw`text-white text-xs font-semibold`}>
              Out of Stock
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};
const BookCard = () => {
  const [activeTab, setActiveTab] = useState('');
  const [id, setId] = useState('');
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`${BaseUrl}/getAllCategories`)
      .then(response => {
        if (response.status === 200 || 201) {
          console.log(response, 'response');
          // console.log(response.data)
          setCategory(response.data.data);
          setActiveTab(category[0]?.category_name);
          setId(category[0].category_id);
        } else console.log('network issue');
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    id !== '' &&
      axios.get(`${BaseUrl}/getProductbyCategoryID/${id}`).then(response => {
        if (response.status === 200 || response.status === 201) {
          setData(response.data.data);
        }
      });
  }, [id]);
  let skillData = [];
  category.length !== 0 &&
    category.map((info, index) => {
      skillData.push(info.category_name);
    });

  // const data = [
  //     { id: '1', productName: 'Switchwords Course Book -',category:'Course Book', image: 'https://images.unsplash.com/photo-1532732883790-3acf4e1c8cae?auto=format&fit=crop&q=80&w=2274&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', instock:true ,cost:'1500'},
  //     { id: '2', productName: 'Switchwords Course Book -', category:'Course Book',image: 'https://media.istockphoto.com/id/1476747730/photo/catholic-rosary-and-crucifix-laying-on-leather-bound-holy-bible-close-up-christian.jpg?s=1024x1024&w=is&k=20&c=kctTcI68Paaj1CfkctfTBNo_LFo2UGdH3uO87Loz6GA=', instock:true,cost:'1500'},
  //     { id: '3', productName: 'Switchwords Course Book -', category:'Course Book',image: 'https://media.istockphoto.com/id/1578373464/photo/woman-reading-hindu-religious-book-bhagavad-gita.jpg?s=1024x1024&w=is&k=20&c=rJx3E7buUa3lwYlo9wyfdZkkSyaE4hPxeHMW2mVTVHM=', instock:false,cost:'200' },
  //   ];
  const scrollViewRef = useRef(null);

  const scrollToPrevious = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToIndex({index: 0, animated: true});
    }
  };
  const scrollToNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  };

  return (
    <View style={tw`mb-14`}>
      <View style={tw`flex-row mt-5 `}>
        <View
          style={{
            flexGrow: 1,
            borderBottomWidth: 1,
            borderBottomColor: '#048C8C',
            padding: 5,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}>
          <Text style={tw`font-medium`}>Book Pooja</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductCategory', id);
            }}>
            <Text style={tw`font-medium`}>see all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={skillData}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item, index}) => (
          <Tab
            item={item}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setId={setId}
            index={index}
            data={category}
          />
        )}
        keyExtractor={index => index}
      />
      <View style={tw`flex-row justify-center items-center`}>
        <TouchableOpacity onPress={scrollToPrevious}>
          <FontAwesome name={'angle-left'} size={30} color={'#048C8C'} />
        </TouchableOpacity>
        {data.length !== 0 && (
          <FlatList
            data={data}
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({item}) => (
              <Card
                title={item.name}
                image={item.image}
                productName={item.name}
                category={activeTab}
                instock={item.instock}
                cost={item.rs}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}

        <TouchableOpacity onPress={scrollToNext}>
          <FontAwesome name={'angle-right'} size={30} color={'#048C8C'} />
        </TouchableOpacity>
        {data.length === 0 && <Text style={tw`text-center`}>No Product</Text>}
      </View>
    </View>
  );
};

export default BookCard;
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
    borderWidth: 4,
    borderColor: '#048C8C',
  },
});
