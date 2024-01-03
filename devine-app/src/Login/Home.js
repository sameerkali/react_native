/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames';
import Header from '../Component/Header';
import LinearGradient from 'react-native-linear-gradient';
import Login from './Login';
import SignUp from './SignUp';

const Home = () => {
  
  const [page, setPage] = useState('login');
  return (
    <SafeAreaView style={tw`flex-grow bg-white`}>
     <Header/>
      <ScrollView style={tw`flex flex-col flex-grow px-5 bg-white py-14`}>
        <View style={tw`flex-grow flex-row border border-gray-300 rounded-lg`}>
          <TouchableOpacity
            style={tw`flex-grow`} onPress={()=>{setPage('login')}}>
                <LinearGradient colors={page==='login'?['#048C8C', '#035B5B']:['white','white']} style={tw`flex justify-center text-center items-center flex-grow p-2 ${page==='login'?'rounded-lg':'rounded-l-lg '}`} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                  <Text style={tw`${page==='login'?'text-white font-semibold':'text-gray-400 font-semibold'}`}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
          <TouchableOpacity style={tw`flex-grow`}  onPress={()=>{setPage('signup')}}>
          <LinearGradient colors={page==='signup'?['#048C8C', '#035B5B']:['white','white']} style={tw`flex justify-center text-center items-center flex-grow p-2 ${page==='signup'?'rounded-lg':'rounded-r-lg'}`}  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <Text style={tw`${page==='signup'?'text-white font-semibold':'text-gray-400 font-semibold'}`}>Signup</Text>
          </LinearGradient>
          </TouchableOpacity>
        </View>
{
  page==='login'?<Login setPage={setPage}/>:<SignUp setPage={setPage}/>
}
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
