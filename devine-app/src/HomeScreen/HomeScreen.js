/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import HeaderTwo from '../Component/HeaderTwo';
import NavModal from '../Component/NavModal';
import tw from 'tailwind-react-native-classnames';
import ProductCard from './ProductCard';
import LiveCard from './LiveCard';
import BookCard from './BookCard';

const HomeScreen = () => {
  const [toggle, setToggle] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={tw`flex-grow bg-white `}>
      <View>
        <HeaderTwo
          toggle={toggle}
          setToggle={setToggle}
          toggleModal={toggleModal}
        />

        <NavModal
          setModalVisible={setModalVisible}
          isModalVisible={isModalVisible}
        />
      </View>

      <ScrollView style={tw`flex-grow`} showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row`}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/501646778/photo/ganesha.jpg?s=1024x1024&w=is&k=20&c=rkILUjW7qdBl-maX47quQECN-RtVtHGRJTJ9shbPcgY=',
            }}
            style={{height: 350, objectFit: 'cover', flex: 1}}
          />
        </View>
        <ProductCard name={'Product'} id={1} />
        <LiveCard />
        <BookCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
