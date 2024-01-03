/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import HeaderTwo from '../Component/HeaderTwo';
import NavModal from '../Component/NavModal';
import tw from 'tailwind-react-native-classnames';
import ProductCard from '../HomeScreen/ProductCard';

const ProductScreen = () => {
  const [toggle, setToggle] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const ProductCategory = [
    {id: 1, name: 'Mantra’s & Arti’s '},
    {id: 2, name: 'Pooja Samagri'},
    {id: 3, name: 'Yantra'},
  ];

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

      <ScrollView
        style={tw`flex-grow mb-10`}
        showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row`}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/501646778/photo/ganesha.jpg?s=1024x1024&w=is&k=20&c=rkILUjW7qdBl-maX47quQECN-RtVtHGRJTJ9shbPcgY=',
            }}
            style={{height: 120, objectFit: 'cover', flex: 1}}
          />
        </View>
        {ProductCategory.map((info, index) => {
          return (
            <View key={index} style={tw`mb-2`}>
              <ProductCard name={info.name} id={info.id} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;
