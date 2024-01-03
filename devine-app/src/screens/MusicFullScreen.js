import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const MusicFullScreen = ({ item, index, data }) => {
  const navigation = useNavigation();
  console.log(data , 'data')

  const handlePress = () => {
    navigation.navigate('MainMusic', { data: item ,index : index });
  };

  return (
    <TouchableOpacity
      style={[
        style.container,
        { marginBottom: index === data.length - 1 ? 30 : 0 },
      ]}
      onPress={handlePress}
    >
      <Image source={item.artwork} style={style.songImage} />
      <View style={style.nameview}>
        <Text style={style.name}>{item.title}</Text>
        <Text style={style.name}>{item.artist}</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('../../assets/play.png')} style={style.play} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MusicFullScreen;

const style = StyleSheet.create({
  container: {
    width: width - 20,
    height: 100,
    elevation: 5,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  songImage: {
    width: 100,
    height: 90,
    borderRadius: 10,
    marginLeft: 7,
  },
  nameview: {
    paddingLeft: 15,
    width: '50%',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  play: {
    width: 35,
    height: 35,
  },
});
