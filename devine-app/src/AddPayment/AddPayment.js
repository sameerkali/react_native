/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView ,ScrollView} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Header from '../Component/Header';

const AddPayment = () => {
  return (
    <SafeAreaView style={tw`flex-grow`}>
           <Header/>
           <ScrollView showsVerticalScrollIndicator={false}>
           <View style={[tw`mx-3 my-3 flex`,{gap:3}]}>
      <Text style={tw`text-black text-center font-medium text-lg text-gray-800`}>Add Payment</Text>

            </View>
           </ScrollView>
    </SafeAreaView>
  );
};

export default AddPayment; 