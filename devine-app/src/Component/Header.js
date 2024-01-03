/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import tw from 'tailwind-react-native-classnames';
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import {logo} from '../../assets/logo.png';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient colors={['#048C8C', '#035B5B']}  style={tw`py-3 px-2`} >
        <View style={tw`flex flex-row justify-between items-center`}>
           <TouchableOpacity onPress={()=>{navigation.goBack()}}>
         <AntDesign name={'arrowleft'} color='white' size={20}/>
      </TouchableOpacity>
      <View >
         <Image  source={require('../../assets/Group.png')} style={tw`h-6 w-20`}/>
      </View>
      <View></View>
        </View>
        
      </LinearGradient>
    
    </View>
  );
};

export default Header;
var styles = StyleSheet.create({
 
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});