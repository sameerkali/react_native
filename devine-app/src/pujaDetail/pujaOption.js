import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function PujaOption() {
    const navigation = useNavigation();
  const handleVirtualPujaPress = () => {
    navigation.navigate('Virtual Puja');
  };

  const handlePhysicalPujaPress = () => {
    navigation.navigate('Physical Puja');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={handleVirtualPujaPress}>
        <Image source={require('../../assets/img/livepuja.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Virtual Puja</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={handlePhysicalPujaPress}>
        <Image source={require('../../assets/img/physicalpuja.jpg')} style={styles.cardImage} />
        <Text style={styles.cardText}>Physical Puja</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 20,
        alignItems: 'center',
      },
      card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: 400,
        alignItems: 'center',
        elevation: 2,
        marginBottom: 20,
      },
      cardImage: {
        width: 250,
        height: 250,
        marginBottom: 10,
        resizeMode: 'cover',
      },
      cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
});

export default PujaOption;
