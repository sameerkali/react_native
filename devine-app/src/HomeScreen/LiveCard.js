/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity,Image, StyleSheet ,FlatList} from 'react-native'
import React,{useRef} from 'react'
import tw from 'tailwind-react-native-classnames'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Card = ({image ,name}) => {
  return (
    <View style={tw`mt-5 relative`}>
      <View style={tw`bg-white border-red-500 border-2 rounded-xl w-12 absolute z-20 left-4 top-2 flex-row items-baseline`}>
        <View style={tw`h-2 w-2 rounded-full bg-red-500 m-1`}></View>
        <Text style={{color:'red', fontSize:10, fontWeight:'500'}}>Live</Text>
      </View>
       <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
    
      <View style={{backgroundColor:'#048C8C', justifyContent:'center', alignItems:'center', padding:1}}>
    <Text style={tw`text-white text-xs font-semibold`}>{name}</Text>

     </View>
    </View>
  
    </View>
   
  );
};

const LiveCard= () => {
  const data = [
    { id: '1',  image: 'https://plus.unsplash.com/premium_photo-1689620815896-b61fdab3d733?auto=format&fit=crop&q=80&w=2264&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Amrita tv'},
    { id: '2', image:'https://plus.unsplash.com/premium_photo-1692291542935-fb2b17b83879?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHYlMjBjaGFubmVsfGVufDB8fDB8fHww',name:'Jagran tv'},
    { id: '3',image: 'https://media.istockphoto.com/id/1578373464/photo/woman-reading-hindu-religious-book-bhagavad-gita.jpg?s=1024x1024&w=is&k=20&c=rJx3E7buUa3lwYlo9wyfdZkkSyaE4hPxeHMW2mVTVHM=',name:'Amrita tv'},
  ];
  const scrollViewRef = useRef(null);

  const scrollToPrevious = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToIndex({ index: 0, animated: true });
    }
  };
  const scrollToNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  
  return (
    <View>
        <View style={tw`flex-row mt-7`} >
        <View style={{flexGrow:1,borderBottomWidth:1,
             borderBottomColor:'#048C8C' , padding:5,paddingHorizontal:10, flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={tw`font-medium`}>Live Temples</Text>
          <TouchableOpacity>
          <Text style={tw`font-medium`}>see all</Text>
          </TouchableOpacity>

        </View>
        
    </View>
    <View style={tw`flex-row justify-center items-center`}>
  
    <TouchableOpacity onPress={scrollToPrevious}>
        <FontAwesome name={'angle-left'} size={30} color={'#048C8C'}/>
        </TouchableOpacity>
      <FlatList
        data={data}
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => <Card name={item.name} image={item.image} />}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity  onPress={scrollToNext} >
      <FontAwesome name={'angle-right'} size={30} color={'#048C8C'}/>
        </TouchableOpacity>
    
    </View>
   
    </View>
    
  )
}

export default LiveCard
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
    marginHorizontal: 8,
   zIndex:1,
   


width: 200,
  },
  image: {
    width:'auto',
    height: 120,
    
   
  },
 
});