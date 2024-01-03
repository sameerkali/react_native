/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Component/Header'
import tw from 'tailwind-react-native-classnames'


const ErrorPage = () => {
  return (
    <SafeAreaView style={tw`flex-grow`}>
        <Header/>
      <View style={tw`justify-center items-center flex flex-grow`}>
        <Text style={[tw`font-bold text-3xl`, {color:'#035B5B'}]}>Comming Soon !</Text>
      </View>
    </SafeAreaView>
  )
}

export default ErrorPage

