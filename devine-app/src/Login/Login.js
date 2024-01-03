/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import { Link, useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({setPage}) => {
  const navigation = useNavigation();
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const[err, setError]= useState(false)
    console.log(email,'nmv n nmv');
    console.log(password,'hfhjhd');
    
 const handleLogin=()=>{
 if(email!==undefined||email!=='')
 {
  let data = {
    email : email,
    password : password
  }
  console.log(data,'data---->>');
  axios.post(`${BaseUrl}/loginUser`,
    (data))
  .then((response)=>{AsyncStorage.setItem('token',response.data.token);
  navigation.navigate('tab');
})
  .catch((error)=>{console.log('Login error:', error.response.data);})
 }
 }


  return (
    <View style={tw`flex-grow`}>
    <View style={tw`pt-10 flex-grow flex-row`}>
      <TextInput
        style={tw`border border-gray-300 flex-grow p-2 rounded-lg`}
        placeholder='Email'
        placeholderTextColor='#000000'
        onChangeText={(text) => setEmail(text)}
        value={email}
        onFocus={() => setError(false)}
      />
    </View>
    <View style={tw`pt-6 flex-grow flex-row`}>
      <TextInput
        style={tw`border border-gray-300 flex-grow p-2 rounded-lg`}
        placeholder='Password'
        placeholderTextColor='#000000'
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        onFocus={() => setError(false)}
      />
    </View>
   {err &&  <Text style={tw`mt-1 text-red-600 text-xs text-center`}> Invalid Email or Password </Text>}
    <View style={tw`pt-6 flex-grow flex-row justify-center items-center`}>
        <Link to={'/'} style={{ color: '#048C8C',fontWeight:'600' }}>Forgot Password?</Link>
    </View>
    <View style={tw`pt-6 flex-grow flex-row justify-center items-center`}>
        <TouchableOpacity style={tw`flex-grow rounded-lg`} onPress={handleLogin}>
        <LinearGradient colors={['#048C8C', '#035B5B']}
         style={tw`flex justify-center text-center items-center flex-grow p-2 rounded-lg `}
           start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          >
          <Text style={tw`text-white font-semibold`}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
    </View>
    <View style={tw`pt-6 flex-grow flex-row justify-center items-center`}>
        <Text style={tw`text-black text-center`}>Dont have an account?</Text><TouchableOpacity onPress={()=>{setPage('signup')}}>
            <Text style={{ color: '#048C8C' }}>SignUp</Text>
        </TouchableOpacity>
    </View>
  </View>
   
  )
}

export default Login