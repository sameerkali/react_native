import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
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
  State,
} from 'react-native-track-player';
import axios from 'axios';
import { BaseUrl } from '../BaseUrl';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setupPlayer, addTracks } from './trackPlayerServices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 4,
    backgroundColor: '#112',
  },
  songTitle: {
    fontSize: 20,
    marginTop: 2,
    color: '#ccc',
  },
  artistName: {
    fontSize: 16,
    color: '#888',
  },
  playlist: {
    marginTop: 10,
    marginBottom: 10,
  },
  playlistItem: {
    fontSize: 14,
    padding: 8,
    borderRadius: 4,
    marginBottom: 4,
    backgroundColor: 'transparent',
  },
  trackProgress: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#eee',
  },
  artwork: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    marginBottom: 5,
    borderRadius: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

// Placeholder function, replace it with your actual implementation
const getUrlFromPath = (path) => {
  // Example: assuming path is a relative URL, you can prepend your base URL
  return `${BaseUrl}${path}`;
};

function Header() {
  const [info, setInfo] = useState({});

  useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
    if (event.state === State.nextTrack) {
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

  const format = (seconds) => {
    let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <View>
      <Text style={styles.trackProgress}>
        {format(position)} / {format(duration)}
      </Text>
    </View>
  );
}

function Playlist() {
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(() => {
    loadPlaylist();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
    if (event.state === State.nextTrack) {
      TrackPlayer.getCurrentTrack().then((index) => setCurrentTrack(index));
    }
  });

  const PlaylistItem = ({ index, title, isCurrent }) => {
    const handleItemPress = () => {
      TrackPlayer.skip(index);
    };

    return (
      <TouchableOpacity onPress={handleItemPress}>
        <Text
          style={{
            ...styles.playlistItem,
            ...{ backgroundColor: isCurrent ? '#666' : 'transparent' },
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const loadPlaylist = async () => {
    const queue = await TrackPlayer.getQueue();
    setQueue(queue);
  };

  const handleShuffle = async () => {
    const shuffledQueue = [...queue].sort(() => Math.random() - 0.5);
    await TrackPlayer.reset();
    await TrackPlayer.add(shuffledQueue);
    loadPlaylist();
  };

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

  const handlePlayPress = async () => {
    if (await TrackPlayer.getState() == State.Playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.controlsContainer}>
      <Icon.Button
        name="arrow-left"
        size={28}
        backgroundColor="transparent"
        onPress={() => TrackPlayer.skipToPrevious()}
      />
      <Icon.Button
        name={playerState == State.Playing ? 'pause' : 'play'}
        size={28}
        backgroundColor="transparent"
        onPress={handlePlayPress}
      />
      <Icon.Button
        name="arrow-right"
        size={28}
        backgroundColor="transparent"
        onPress={() => TrackPlayer.skipToNext()}
      />
      <Icon.Button
        name="random"
        size={28}
        backgroundColor="transparent"
        onPress={onShuffle}
      />
    </View>
  );
}

// Main function
function MainMusic() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

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

  const [mantras, setMantras] = useState([]);

  const fetchMantras = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/getAllMantras`);
      if (response.data.data) {
        const formattedMantras = response.data.data.map((mantra) => ({
          ...mantra,
          audioUrl: getUrlFromPath(mantra.URL),
          artWorkUrl: getUrlFromPath(mantra.artWork),
        }));
        setMantras(formattedMantras);
      }
    } catch (error) {
      console.error('Error fetching mantras:', error);
    }
  };

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

export default MainMusic;
