/* eslint-disable prettier/prettier */
import React,{useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

import Ionicons from 'react-native-vector-icons/Ionicons';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
const NavData=[
{name:'My Bookings',link:'#'},
{name:'Manage Address',link:'ManageAddress'},
{name:'My Wallet',link:'#'},
{name:'My Rating',link:'#'},
{name:'Refer & Earn',link:'#'},
{name:'Manage Payment Options',link:'#'},
{name:'Register As Pandit',link:'panditForm'},
{name:'Settings',link:'#'},
{name:'About',link:'#'},
{name:'Share',link:'#'},
{name:'Rate',link:'#'},
{name:'Scheduled Booking',link:'#'}
]

export default function NavModal({
  setModalVisible,
  isModalVisible,
}) {
    const navigation= useNavigation();
  //const [value,setValue]=useState([])
  const[data, setData]= useState('');
  //const layout = useWindowDimensions();
//   const readData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('token');
//       setValue(value)
//      console.log(value)
//     } catch (e) {
//       alert('Failed to fetch the input from storage');
//     }}

//     useEffect(()=>{  
//         readData();
//       axios.get(`${baseUrl}getUserData`,{ headers: {"Authorization" : `Bearer ${value}`} 
//   }).then((response)=>{
//       console.log(response.data)
//       setData(response.data.user)
//   }).catch((error)=>{console.log(error)})
//   },[])

  return (
    <SafeAreaView style={tw`flex-grow`}>
         <Modal
      style={{padding: 0, margin: 0}}
      isVisible={isModalVisible}
      onBackdropPress={() => {
        setModalVisible(false);
      }}
      animationIn={'slideInLeft'}
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection={'left'}
      backdropColor={'black'}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View
          style={{
            backgroundColor: '#f2f3f4',
            flex: 1 / 1.2,
            flexDirection: 'column',
          }}>
           
            <View
            style={{
             // backgroundColor: '#211c58',
              backgroundColor:'#035B5B',
              padding: 10,
              paddingTop: 25,
            }}>
            <View
              style={{
                justifyContent: 'start ',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
            
              <TouchableOpacity onPress={()=>{setModalVisible(false)}}>
              <Ionicons name={'arrow-back'} color={'white'} size={25}/>
              </TouchableOpacity>
           
            </View>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',gap:10,paddingVertical:10}} onPress={()=>{ setModalVisible(false); }}>
    <View style={tw`flex-row items-center`}>
        <FontAwesome name={'user-circle'} size={25} color={'white'}/>
    <Text style={{fontSize:16, color:'white', paddingLeft:5}}> Verified Customer</Text>
    </View>
<Feather name={'chevron-right'} size={25} color={'white'}/>
    </TouchableOpacity>
          </View>
        <ScrollView>  
          
            

<View style={{paddingHorizontal:20,paddingVertical:10, backgroundColor:'white', borderRadius:10,margin:10}}>
    
    <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',gap:10 }} onPress={()=>{navigation.navigate('InfoAndSettings'), setModalVisible(false); }}>
    
<Text style={{fontSize:14, color:'#4D4D4D'}}> Help Center</Text>
<Feather name={'chevron-right'} size={18} color={'#9999'}/>

    </TouchableOpacity>
</View>

<View style={{paddingHorizontal:20,paddingVertical:10, backgroundColor:'white', borderRadius:10,margin:10, marginVertical:2}}>
    {NavData.map((data, index)=>{return( <TouchableOpacity key={index} 
    style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',gap:10, paddingVertical:8,borderColor:'white', borderBottomColor:'#e5e5e5', borderWidth:1, }} 
    onPress={()=>{navigation.navigate(data.link), 
    setModalVisible(false); }}>
    
    <Text style={{fontSize:14, color:'#4D4D4D'}}>{data.name}</Text>
    <Feather name={'chevron-right'} size={18} color={'#9999'}/>
    
        </TouchableOpacity>)})}
        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:8 }} onPress={()=>{navigation.navigate('#'), setModalVisible(false); }}>
    
    <Text style={{fontSize:14, color:'#4D4D4D'}}> Logout</Text>
    <Feather name={'chevron-right'} size={18} color={'#9999'}/>
    
        </TouchableOpacity>
  
</View>


            </ScrollView>
          


          </View>   
          
        </View>


        {/* <Button title="Hide modal" onPress={toggleModal} /> */}
     
    </Modal>
    </SafeAreaView>
   
  );
}
