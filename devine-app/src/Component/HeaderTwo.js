/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import tw from 'tailwind-react-native-classnames';
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import {logo} from '../../assets/logo.png';
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const HeaderTwo = ({toggleModal}) => {
  const navigation= useNavigation()
  return (
    <View>
    <LinearGradient colors={['#048C8C', '#035B5B']}  style={tw`py-3 px-3`} >
      <View style={tw`flex flex-row `}>
        <View style={tw`flex-row items-center justify-center`}>
        <TouchableOpacity onPress={toggleModal} >
       <EvilIcons name={'navicon'} color='white' size={25} style={tw`pt-1`}/>
    </TouchableOpacity>
    <Text style={tw`text-white pl-2 font-bold pt-1 text-xs`}>MENU</Text>
        </View>
       
    <View style={tw`flex-grow justify-center items-center`}>
       <Image  source={require('../../assets/Group.png')} style={tw`h-6 w-20`}/>
    </View>
    <View style={tw`flex-row items-center justify-center`}>
       <AntDesign name={'search1'} color='white' size={18} style={tw`m-1`}/>
       <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
       <AntDesign name={'shoppingcart'} color='white' size={19} style={tw`m-1`}/>
       </TouchableOpacity>
      
       <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
       <EvilIcons name={'user'} color='white' size={25} style={tw`m-1`}/>

       </TouchableOpacity>
      
    </View>
      </View>
      
    </LinearGradient>
  
  </View>
  )
}

export default HeaderTwo