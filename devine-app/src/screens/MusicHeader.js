import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MusicFullScreen from './MusicFullScreen';
import axios from 'axios';
import { BaseUrl } from '../BaseUrl';

const MusicHeader = () => {
    const [mant, setMant] = useState([]);
    conosole.log(mant  ,'deeksha')

    // useEffect(() => {
    //     const fetchMantras = async () => {
    //         try {
    //             const response = await axios.get(`${BaseUrl}/getAllMantras`);
    //             console.log(response, 'resphjfhnjnfj');
    //             if (response.data.data) {
    //                 const formattedMantras = response.data.data.map((mantra) => ({
    //                     ...mantra,
    //                     audioUrl: getUrlFromPath(mantra.URL),
    //                     artWorkUrl: getUrlFromPath(mantra.artWork),
    //                 }));

    //                 setMant(formattedMantras);

    //                 formattedMantras.forEach((mantra, index) => {
    //                     console.log(`Mantra ${index + 1}:`, mantra);
    //                 });
    //             }
    //         } catch (error) {
    //             console.error('Error fetching mantras:', error);
    //         }
    //     };

    //     fetchMantras();
    // }, []);

    // const getUrlFromPath = (filePath) => {
    //     const baseUrl = BaseUrl;
    //     const relativePath = filePath.replace(/\\/g, '/');
    //     const encodedPath = encodeURIComponent(relativePath);
    //     return `${baseUrl}/${encodedPath}`;
    // };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>Music App</Text>
            </View>
            <FlatList
                data={mant}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <MusicFullScreen item={item} index={index} data={mant} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60,
        backgroundColor: '#fff',
        width: '100%',
        elevation: 5,
        justifyContent: 'center',
    },
    logo: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FF0D0D',
        marginLeft: 20,
    },
});

export default MusicHeader;
