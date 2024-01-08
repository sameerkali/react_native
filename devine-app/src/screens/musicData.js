// export const playerDeeksha = [
//   {
//   id: '1',
//   url: require('../../assets/audio/om.mp3'),
//   title: 'new',
//   artist: 'descripstion',
//   artwork: require('../../assets/img/img2.jpg'),
//   duration: 60,
// },
//     {
//       id: '2',
//       url: require('../../assets/audio/om.mp3'),
//       title: 'Modern Chillout',
//       artist: 'penguinmusic',
//       artwork: require('../../assets/img/img2.jpg'),
//       duration: 66,
//     },
//     {
//       id: '3',
//       url: require('../../assets/audio/josh.mp3'),
//       title: 'Powerful Beat',
//       artist: 'penguinmusic',
//       artwork: require('../../assets/img/img3.jpg'),
//       duration: 73,
//     }
//   ]



// // // YourComponent.js
// // import React, { useEffect } from 'react';
// // import { View, Text, Button } from 'react-native';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { setData } from '../redux/action';
// // import { BaseUrl } from '../BaseUrl';


// // const musicData = () => {
// //   const dispatch = useDispatch();
// //   const { data, error } = useSelector((state) => state);
// //   console.log(data ,'datanjnjmf')

// //   const fetchData = async () => {
// //     try {
// //       const response = await fetch(`${BaseUrl}/getAllMantras`);
// //       console.log(response,'responsenjnfkjnfkjnfkj');
// //       const result = await response.json();
// //       console.log(result ,'results')
// //       // dispatch(setData(result));
// //     } catch (err) {
// //       // dispatch(setError(err.message));
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   return (
// //     <View>
// //       <Text>{error ? `Error: ${error}` : 'Data fetched successfully!'}</Text>
// //       {data && (
// //         <View>
// //           <Text>Data:</Text>
// //           <Text>{JSON.stringify(data)}</Text>
// //         </View>
// //       )}
// //       <Button title="Fetch Data" onPress={fetchData} />
// //     </View>
// //   );
// // };

// // export default musicData;
