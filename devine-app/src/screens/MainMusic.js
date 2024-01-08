// import React, { useEffect, useState } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   ActivityIndicator,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import TrackPlayer, {
//   useTrackPlayerEvents,
//   usePlaybackState,
//   useProgress,
//   Event,
//   State,
// } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';
// // import { BaseUrl } from '../BaseUrl';
// // import { getUrlFromPath } from 'path-to-your-module';
// import { setupPlayer } from './trackPlayerServices';

// function Header() {
//   const [info, setInfo] = useState({});

//   useEffect(() => {
//     setTrackInfo();
//   }, []);

//   useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
//     if (event.state === State.nextTrack) {
//       setTrackInfo();
//     }
//   });

//   async function setTrackInfo() {
//     const track = await TrackPlayer.getCurrentTrack();
//     const info = await TrackPlayer.getTrack(track);
//     setInfo(info);
//   }

//   return (
//     <View>
//       {info.artwork && (
//         <Image source={{ uri: info.artwork }} style={styles.artwork} />
//       )}

//       <Text style={styles.songTitle}>{info.title}</Text>
//       <Text style={styles.artistName}>{info.artist}</Text>
//     </View>
//   );
// }

// function TrackProgress() {
//   const { position, duration } = useProgress(200);

//   function format(seconds) {
//     const mins = parseInt(seconds / 60).toString().padStart(2, '0');
//     const secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
//     return `${mins}:${secs}`;
//   }

//   return (
//     <View>
//       <Text style={styles.trackProgress}>
//         {format(position)} / {format(duration)}
//       </Text>
//     </View>
//   );
// }

// function Playlist() {
//   const [queue, setQueue] = useState([]);
//   const [currentTrack, setCurrentTrack] = useState(0);

//   async function loadPlaylist() {
//     const queue = await TrackPlayer.getQueue();
//     setQueue(queue);
//   }

//   useEffect(() => {
//     loadPlaylist();
//   }, []);

//   useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
//     if (event.state === State.nextTrack) {
//       TrackPlayer.getCurrentTrack().then((index) => setCurrentTrack(index));
//     }
//   });

//   function PlaylistItem({ index, title, isCurrent }) {
//     function handleItemPress() {
//       TrackPlayer.skip(index);
//     }

//     return (
//       <TouchableOpacity onPress={handleItemPress}>
//         <Text
//           style={{
//             ...styles.playlistItem,
//             ...{ backgroundColor: isCurrent ? '#666' : 'transparent' },
//           }}>
//           {title}
//         </Text>
//       </TouchableOpacity>
//     );
//   }

//   async function handleShuffle() {
//     const shuffledQueue = [...queue].sort(() => Math.random() - 0.5);
//     await TrackPlayer.reset();
//     await TrackPlayer.add(shuffledQueue);
//     loadPlaylist();
//   }

//   return (
//     <View>
//       <View style={styles.playlist}>
//         <FlatList
//           data={queue}
//           renderItem={({ item, index }) => (
//             <PlaylistItem
//               index={index}
//               title={item.title}
//               isCurrent={currentTrack === index}
//             />
//           )}
//         />
//       </View>
//       <Controls onShuffle={handleShuffle} />
//     </View>
//   );
// }

// function Controls({ onShuffle }) {
//   const playerState = usePlaybackState();

//   async function handlePlayPress() {
//     if (await TrackPlayer.getState() === State.Playing) {
//       TrackPlayer.pause();
//     } else {
//       TrackPlayer.play();
//     }
//   }

//   return (
//     <View style={styles.controlsContainer}>
//       <Icon.Button
//         name="arrow-left"
//         size={28}
//         backgroundColor="transparent"
//         onPress={() => TrackPlayer.skipToPrevious()}
//       />
//       <Icon.Button
//         name={playerState.state === State.Playing ? 'pause' : 'play'}
//         size={28}
//         backgroundColor="transparent"
//         onPress={handlePlayPress}
//       />
//       <Icon.Button
//         name="arrow-right"
//         size={28}
//         backgroundColor="transparent"
//         onPress={() => TrackPlayer.skipToNext()}
//       />
//       <Icon.Button
//         name="random"
//         size={28}
//         backgroundColor="transparent"
//         onPress={onShuffle}
//       />
//     </View>
//   );
// }

// function MainMusic() {
//   const [isPlayerReady, setIsPlayerReady] = useState(false);
//   const [mantras, setMantras] = useState([]);

//   useEffect(() => {
//     async function setup() {
//       const isSetup = await setupPlayer();
//       setIsPlayerReady(isSetup);

//       const currentQueue = await TrackPlayer.getQueue();
//       if (isSetup && currentQueue.length <= 0) {
//         await addTracks();
//       }
//     }

//     setup();
//   }, []);

//   // useEffect(() => {
//   //   fetchMantras();
//   // }, []);

//   // async function fetchMantras() {
//   //   try {
//   //     const response = await axios.get(`${BaseUrl}/getAllMantras`);
//   //     // console.log(response,'response');
//   //     // console.log(`${BaseUrl}/getAllMantras`,'djjdbbdjd');
//   //     if (response.data.data) {
//   //       const formattedMantras = response.data.data.map((mantra) => ({
//   //         ...mantra,
//   //         audioUrl: getUrlFromPath(mantra.URL),
//   //         artWorkUrl: getUrlFromPath(mantra.artWork),
//   //       }));

//   //       setMantras(formattedMantras);

//   //       formattedMantras.forEach((mantra, index) => {
//   //         console.log(`Mantra ${index + 1}:`, mantra);
//   //       });
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching mantras:', error);
//   //   }
//   // }

//   if (!isPlayerReady) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <ActivityIndicator size="large" color="#bbb" />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header />
//       <TrackProgress />
//       <Playlist />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#112',
//   },
//   songTitle: {
//     fontSize: 32,
//     marginTop: 20,
//     color: '#ccc',
//   },
//   artistName: {
//     fontSize: 24,
//     color: '#888',
//   },
//   playlist: {
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   playlistItem: {
//     fontSize: 16,
//     paddingTop: 8,
//     paddingBottom: 8,
//     paddingLeft: 16,
//     paddingRight: 16,
//     borderRadius: 4,
//   },
//   trackProgress: {
//     marginTop: 20,
//     textAlign: 'center',
//     fontSize: 24,
//     color: '#eee',
//   },
//   artwork: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   controlsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20,
//   },
// });

// export default MainMusic;














import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import TrackPlayer, {
  useTrackPlayerEvents,
  usePlaybackState,
  useProgress,
  Event,
  State
} from 'react-native-track-player';
import axios from 'axios';
import { BaseUrl } from '../BaseUrl';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setupPlayer, addTracks } from './trackPlayerServices';

function Header() {
  const [info, setInfo] = useState({});
  useEffect(() => {
    setTrackInfo();
  }, []);

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], (event) => {
    if(event.state == State.nextTrack) {
      setTrackInfo();
    }
  });

  async function setTrackInfo() {
    const track = await TrackPlayer.getActiveTrackIndex();
    const info = await TrackPlayer.getTrack(track);
    setInfo(info);
  }

  return (
        <View>
          {info.artwork && (
            <Image source={{ uri: info.artwork }} style={styles.artwork} />
          )}
    
          <Text style={styles.songTitle}>{info.title}</Text>
          <Text style={styles.artistName}>{info.artist}</Text>
        </View>
      );
    }
    

function TrackProgress() {
  const { position, duration } = useProgress(200);

  function format(seconds) {
    let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  return(
    <View>
      <Text style={styles.trackProgress}>
        { format(position) } / { format(duration) }
      </Text>
    </View>
  );
}

function Playlist() {
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  async function loadPlaylist() {
    const queue = await TrackPlayer.getQueue();
    setQueue(queue);
  }

  useEffect(() => {
    loadPlaylist();
  }, []);

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], (event) => {
    if(event.state == State.nextTrack) {
      TrackPlayer.getActiveTrackIndex().then((index) => setCurrentTrack(index));
    }
  });

  function PlaylistItem({index, title, isCurrent}) {

    function handleItemPress() {
      TrackPlayer.skip(index);
    }

    return (
      <TouchableOpacity onPress={handleItemPress}>
        <Text
          style={{...styles.playlistItem,
            ...{backgroundColor: isCurrent ? '#666' : 'transparent'}}}>
        {title}
        </Text>
      </TouchableOpacity>
    );
  }

    async function handleShuffle() {
        const shuffledQueue = [...queue].sort(() => Math.random() - 0.5);
        await TrackPlayer.reset();
        await TrackPlayer.add(shuffledQueue);
        loadPlaylist();
      }

    return (
    <View>
      <View style={styles.playlist}>
        <FlatList
          data={queue}
          renderItem={({ item, index }) => (
            <PlaylistItem
              index={index}
              title={item.title}
              isCurrent={currentTrack === index}
            />
          )}
        />
      </View>
      <Controls onShuffle={handleShuffle} />
    </View>
  );
}

function Controls({ onShuffle }) {
  const playerState = usePlaybackState();

  async function handlePlayPress() {
    if(await TrackPlayer.getState() == State.Playing) {
      TrackPlayer.pause();
    }
    else {
      TrackPlayer.play();
    }
  }

  return(
    <View style={{flexDirection: 'row',
      flexWrap: 'wrap', alignItems: 'center'}}>
        <Icon.Button
          name="arrow-left"
          size={28}
          backgroundColor="transparent"
          onPress={() => TrackPlayer.skipToPrevious()}/>
        <Icon.Button
          name={playerState == State.Playing ? 'pause' : 'play'}
          size={28}
          backgroundColor="transparent"
          onPress={handlePlayPress}/>
          
        <Icon.Button
          name="arrow-right"
          size={28}
          backgroundColor="transparent"
          onPress={() => TrackPlayer.skipToNext()}/>
        <Icon.Button
          name="random"
          size={28}
          backgroundColor="transparent"
          onPress={onShuffle}/>
    </View>
  );
}
function MainMusic() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [mantras, setMantras] = useState([]);

  useEffect(() => {
    async function setup() {
      const isSetup = await setupPlayer();
      setIsPlayerReady(isSetup);

      const currentQueue = await TrackPlayer.getQueue();
      if (isSetup && currentQueue.length <= 0) {
        await addTracks();
      }
    }

    setup();
  }, []);

  useEffect(() => {
    fetchMantras();
  }, []);

  async function fetchMantras() {
    try {
      const response = await axios.get(`${BaseUrl}/getAllMantras`);
      // console.log(response.data.data,'responsenjnfgmmbgnmgmf .gf');
      // const formattedMantras = response.data.data.map((mantra) =>console.log(mantra.artWork,'mantra'));
      if (response.data.data) {
        const formattedMantras = response.data.data.map((mantra) => ({
          ...mantra,
          audioUrl: getUrlFromPath(mantra.URL),
          artWorkUrl: getUrlFromPath(mantra.artWork),
        }));
        setMantras(formattedMantras);

        formattedMantras.forEach((mantra, index) => {
          // console.log(`Mantra ${index + 1}:`, mantra);
        });
      }
    } catch (error) {
      // console.error('Error fetching mantras:', error);
    }
  }

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TrackProgress />
      <Playlist />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#112',
    },
    songTitle: {
      fontSize: 32,
      marginTop: 20,
      color: '#ccc',
    },
    artistName: {
      fontSize: 24,
      color: '#888',
    },
    playlist: {
      marginTop: 20,
      marginBottom: 20,
    },
    playlistItem: {
      fontSize: 16,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 4,
    },
    trackProgress: {
      marginTop: 20,
      textAlign: 'center',
      fontSize: 24,
      color: '#eee',
    },
    artwork: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      marginBottom: 10,
      borderRadius: 10,
    },
    controlsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
});

export default MainMusic;




