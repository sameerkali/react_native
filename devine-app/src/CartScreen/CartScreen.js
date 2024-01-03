/* eslint-disable prettier/prettier */
import { View, Text ,SafeAreaView, ScrollView, TouchableOpacity,StyleSheet,Image} from 'react-native'
import React,{useState} from 'react'
import Header from '../Component/Header'
import tw from 'tailwind-react-native-classnames'
import Zocial from 'react-native-vector-icons/Zocial'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
const Card=({id})=>{
    const[quantity, setQuatity]= useState(1)
    const data = [
        { id: '1', productName: 'Switchwords Course Book -',category:'Course Book', image: 'https://images.unsplash.com/photo-1532732883790-3acf4e1c8cae?auto=format&fit=crop&q=80&w=2274&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', instock:true ,cost:'1500',quantity:0},
        { id: '2', productName: 'Switchwords Course Book -', category:'Course Book',image: 'https://media.istockphoto.com/id/1476747730/photo/catholic-rosary-and-crucifix-laying-on-leather-bound-holy-bible-close-up-christian.jpg?s=1024x1024&w=is&k=20&c=kctTcI68Paaj1CfkctfTBNo_LFo2UGdH3uO87Loz6GA=', instock:true,cost:'1500',quantity:0},
        { id: '3', productName: 'Switchwords Course Book -', category:'Course Book',image: 'https://media.istockphoto.com/id/1578373464/photo/woman-reading-hindu-religious-book-bhagavad-gita.jpg?s=1024x1024&w=is&k=20&c=rJx3E7buUa3lwYlo9wyfdZkkSyaE4hPxeHMW2mVTVHM=', instock:false,cost:'200' ,quantity:0},
      ];
      const handleDecrement=()=>{
        if(quantity>0){
            setQuatity(quantity-1)
            data[id-1].quantity=quantity;
        }
        
      }
      const handleIncrement=()=>{
      
            setQuatity(quantity+1)
            data[id-1].quantity=quantity;
      }
    return(
        <View style={[tw.style(`flex-row p-2 mx-4 my-2  rounded-md`),styles.card]}>
            <View style={tw`flex-row justify-between items-center flex-grow`}>
            <Image source={{ uri:data[id-1].image}} style={styles.image} />
           
            <View style={tw`flex-row justify-end items-center`}>
            <View style={tw`  mx-5 my-2 justify-center items-center w-24`}>
                <Text style={tw`text-xs font-medium text-gray-900`}>{data[id-1].productName}</Text>
                <Text style={tw`text-xs text-gray-500`}>{data[id-1].category}</Text>
                <View style={tw`flex-row items-baseline mx-1 mb-1`}>
                <FontAwesome name={'rupee'} color={'#048C8C'}/>
                <Text style={{color:'#048C8C', fontSize:12, paddingTop:0.5}}>{data[id-1].cost}</Text>
                 </View>
                </View>
            <View style={tw`flex-row justify-center items-center `}>
                    <TouchableOpacity style={[tw`p-1 px-2 mx-1 rounded-md`,{backgroundColor:'#048C8C'}]} onPress={handleIncrement}><Text style={tw`text-white`}>+</Text></TouchableOpacity>
                    <Text style={tw`w-4 text-center`}>{quantity}</Text>
                    <TouchableOpacity style={[tw`p-1 px-2 mx-1 rounded-md`,{backgroundColor:'#048C8C'}]} 
                    onPress={handleDecrement}><Text style={tw`text-white`}>-</Text></TouchableOpacity>
 </View>
            </View>
            </View>
        </View>
    )
}
const CartScreen = () => {
    const navigation = useNavigation()
    const cartEmpty= false
    const data=[]
    // const data = [
    //     { id: '1', productName: 'Switchwords Course Book -',category:'Course Book', image: 'https://images.unsplash.com/photo-1532732883790-3acf4e1c8cae?auto=format&fit=crop&q=80&w=2274&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', instock:true ,cost:'1500'},
    //     { id: '2', productName: 'Switchwords Course Book -', category:'Course Book',image: 'https://media.istockphoto.com/id/1476747730/photo/catholic-rosary-and-crucifix-laying-on-leather-bound-holy-bible-close-up-christian.jpg?s=1024x1024&w=is&k=20&c=kctTcI68Paaj1CfkctfTBNo_LFo2UGdH3uO87Loz6GA=', instock:true,cost:'1500'},
    //     { id: '3', productName: 'Switchwords Course Book -', category:'Course Book',image: 'https://media.istockphoto.com/id/1578373464/photo/woman-reading-hindu-religious-book-bhagavad-gita.jpg?s=1024x1024&w=is&k=20&c=rJx3E7buUa3lwYlo9wyfdZkkSyaE4hPxeHMW2mVTVHM=', instock:false,cost:'200' },
    //   ];
  return (
  <SafeAreaView style={tw`flex-grow`}>
    <Header/>
{cartEmpty && <View style={tw`flex-grow justify-center items-center px-2`}>
        <Zocial name={'cart'} color={'#048C8C'} size={150}/>
        <Text style={{fontSize:36 ,color:'#048C8C'}}> Cart is empty !</Text>
    </View> }
   {!cartEmpty &&
   <View style={tw`flex-grow bg-white`}>
     <ScrollView style={tw`flex-grow bg-white mt-7`}>
       {data.map((info,index)=>{
        return(
            <Card id={info.id} key={index}/>
        )
       })}
       </ScrollView> 
       <TouchableOpacity style={[tw`p-2 m-3 rounded-md items-center justify-center`,{backgroundColor:'#048C8C'}]} onPress={()=>{navigation.navigate('AddAddress')}}>
        <Text style={tw`text-white font-medium`}>Add Address</Text>
        </TouchableOpacity>
   
    
   </View>
   
    } 
  </SafeAreaView>
  )
}

export default CartScreen
const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      shadowColor: '#999',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 4,
   padding:2,
      zIndex:1,
    
    },
    image: {
      width:80,
      height: 80,
      borderRadius:3,
   
     
    },
   
  });
