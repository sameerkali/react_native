/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import { Link } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'


const SignUp = ({setPage}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] = useState('')
const [error,setError] = useState(false)
console.log(email,'nmv n nmv');
  console.log(password,'hfhjhd');

const handleSignup = ()=>{
 if(email!==''&& password===confirm && password!==''){
  axios.post(`${BaseUrl}/signUp`,{email:email, password:password}).then((response)=>{if(response.status===201||response.status===200){
    setPage('login')
  }})
.catch((error)=>{console.log(error)}) 
 }else{
  setError(true)
 }

}
  return (
    <View style={tw`flex-grow`}>
    <View style={tw`pt-10 flex-grow flex-row`}>
   <TextInput style={tw`border border-gray-300 flex-grow p-2 rounded-lg`} placeholder="Email"  placeholderTextColor='#000000' onChangeText={(text)=>{setEmail(text)}} value={email} onFocus={()=>setError(false)}/>
   
   </View>
   <View style={tw`pt-6 flex-grow flex-row`}>
   <TextInput style={tw`border border-gray-300 flex-grow p-2 rounded-lg`} placeholder="Create Password"  placeholderTextColor='#000000' onChangeText={(text)=>{setPassword(text)}} value={password} onFocus={()=>setError(false)} />
   </View>
   <View style={tw`pt-6 flex-grow flex-row`}>
   <TextInput style={tw`border border-gray-300 flex-grow p-2 rounded-lg`} placeholder="Confirm Password"  placeholderTextColor='#000000' onChangeText={(text)=>{setConfirm(text)}} value={confirm} onFocus={()=>setError(false)} secureTextEntry={true}/>

   </View>
 
   {error && <Text style={tw`text-red-700 text-center mt-5`}>*please check all the fields</Text> }
   <View style={tw`pt-1 flex-grow flex-row justify-center items-center`}>
  
       <Link to={'/'} style={{ color: '#048C8C',fontWeight:'600' }}>Forgot Password?</Link>
   </View>

   <View style={tw`pt-6 flex-grow flex-row justify-center items-center`}>
       <TouchableOpacity style={tw`flex-grow rounded-lg`} onPress={handleSignup}>
       <LinearGradient colors={['#048C8C', '#035B5B']} style={tw`flex justify-center text-center items-center flex-grow p-2 rounded-lg `}  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
         <Text style={tw`text-white font-semibold`}>SignUp</Text>
         </LinearGradient>
       </TouchableOpacity>
   </View>
   <View style={tw`pt-6 flex-grow flex-row justify-center items-center`}>
       <Text style={tw`text-black text-center`}>Already have an account?</Text><TouchableOpacity onPress={()=>{setPage('login')}}>
           <Text style={{ color: '#048C8C' }}>Login</Text>
       </TouchableOpacity>
   </View>
 </View>
  )
}

export default SignUp
