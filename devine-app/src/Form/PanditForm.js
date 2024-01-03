/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text ,SafeAreaView,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import React,{useState, useEffect} from 'react';
import NavModal from '../Component/NavModal';
import { BaseUrl } from '../BaseUrl';
import Header from '../Component/Header';
import tw from 'tailwind-react-native-classnames';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PanditForm = () => {
  const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [data, setData]= useState([])
    const[error, setError]= useState(false);
    const[name, setName]= useState('');
    const[ skill, setSkill]= useState('');

    const[pinCode, setPinCode]= useState('')
    const[Building, setBuilding]= useState('');
    const[locality, setLocality]= useState('');
    const[city, setCity]= useState('');
  const[state, setState]= useState('');
  useEffect(()=>{  readData()},[])
  const [value,setValue]=useState([])
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      setValue(value)
   
    } catch (e) {
      alert('Failed to fetch the input from storage');
navigation.navigate('Login')
    }
  };
  const handleSubmit = () => {
    if(value===null||value===''||value===undefined){
navigation.navigate('Login')
    }else{
      const authToken = value; // Replace with your actual authentication token
  
      const requestData = {
        name: name,
        skills: skill,
        House_no: Building,
        building: Building,
        area: locality,
        city: city,
        pincode: pinCode,
        state: state,
      };
    
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
    
      axios
        .post(`${BaseUrl}/addPriestInfo`, requestData, config)
        .then((response) => {
          if(response.status===200||response.status===201){
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: <Text style={{color:'#035B5B'}}>Success</Text>,
              textBody: "Congrats! You are Registered now",
              button: <Text style={{color:'#035B5B'}}>close</Text>,
            
           
            })
          }else{
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: 'Oops!',
              textBody: "There was some issue",
              button: 'close',
              colors:['#035B5B','#035B5B'],
           
            })
          }
         
         
        })
        .catch((error) => {
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Oops!',
            textBody: "Network issue",
            button: 'close',
            colors:['#035B5B','#035B5B'],
         
          })
        });
    }
  
  };
  
    const toggleModal = () => {
     setModalVisible(!isModalVisible);
   };
   useEffect(()=>{
    axios.get(`${BaseUrl}/getAllCategories`)
    .then((response)=>{
      if(response.status===200||201){ 
  
        setData(response.data.data)
        
      }

      else(console.log('network issue'))
     }
      ).
    catch((error)=>{console.log(error)})
  },[])
   
   let skillData=[];
  data.length!==0 &&  data.map((info, index)=>{
skillData.push(info.category_name)
   })
  
  return (
    <SafeAreaView style={tw`flex-grow bg-white `}>
      <AlertNotificationRoot>
    <View >
    <Header/>

<NavModal setModalVisible={setModalVisible} isModalVisible={isModalVisible
}/>
    </View>
    <ScrollView  >
   
      <Text style={tw`text-black text-center font-medium text-lg text-gray-800 mx-3 my-3`}>Add Pandit</Text>
      <Text style={tw`text-gray-700 mx-3`}>Name</Text>
      <TextInput style={tw`border border-gray-300 rounded-md p-2 mt-2 mx-3`} placeholder=""  onChangeText={(text)=>{setName(text)}} value={name} onFocus={()=>{setError(false)}}/>
      <Text style={tw`text-gray-700 mx-3 mt-3`}>Skills</Text>
      <SelectDropdown
	data={skillData}
    buttonStyle={tw`w-80 bg-white border border-gray-300 rounded-md justify-between mx-3`}
	onSelect={(selectedItem, index) => {
    setSkill(selectedItem);
	}}
  selectedRowStyle={tw`bg-gray-200`}
    rowTextStyle={{textAlign:'left'}}
    dropdownIconPosition={'right'}

    renderDropdownIcon={isOpened => {
        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#999'} size={18} />;
      }}
      
      buttonTextStyle={{fontSize:14, textAlign:'left'}}
	buttonTextAfterSelection={(selectedItem, index) => {

		return selectedItem;
	}}
	rowTextForSelection={(item, index) => {

		return item;
	}}
/>
{/* <Text  style={tw`text-gray-700 mt-2 mx-3 mt-3`} >Number</Text>
      <TextInput style={tw`border border-gray-300 rounded-md p-2 mx-3`} placeholder=""  onChangeText={(text)=>{setNumber(text)}} value={number} onFocus={()=>{setError(false)}}/> */}
      <Text  style={tw`text-gray-700 mt-2 mx-3`} >PinCode</Text>
      <TextInput style={tw`border border-gray-300 rounded-md p-2 mx-3`} placeholder=""  onChangeText={(text)=>{setPinCode(text)}} value={pinCode} onFocus={()=>{setError(false)}}/>
      <Text  style={tw`text-gray-700 mt-2 mx-3 mt-3`} >Building</Text>
      <TextInput style={tw`border border-gray-300 rounded-md p-2 mx-3`} placeholder=""  onChangeText={(text)=>{setBuilding(text)}} value={Building} onFocus={()=>{setError(false)}}/>
      <Text  style={tw`text-gray-700  mt-3 mx-3`} >Area/Locality</Text>
      <TextInput style={tw`border border-gray-300 rounded-md p-2 mx-3`} placeholder=""  onChangeText={(text)=>{setLocality(text)}} value={locality} onFocus={()=>{setError(false)}}/>
      <Text  style={tw`text-gray-700 mt-3 mx-3`} >City</Text>
      <TextInput style={tw`border border-gray-300 rounded-md p-2 mx-3`} placeholder=""  onChangeText={(text)=>{setCity(text)}} value={city} onFocus={()=>{setError(false)}}/>
      <Text  style={tw`text-gray-700 mt-3 mx-3`} >State</Text>
      <TextInput style={tw`border border-gray-300 rounded-md p-2 mx-3`} placeholder=""  onChangeText={(text)=>{setState(text)}} value={state} onFocus={()=>{setError(false)}}/>
  {error && <Text style={tw`text-red-600 text-xs  text-center`}>Please fill all the fields</Text>}    

<TouchableOpacity style={[{backgroundColor:'#048C8C'} ,tw`rounded-md p-2 mt-5 mx-3`]} onPress={handleSubmit}>
  <Text style={tw`text-center text-white font-medium`}>Register</Text>
</TouchableOpacity>

    </ScrollView>
    </AlertNotificationRoot>
</SafeAreaView>
  );
};

export default PanditForm;
