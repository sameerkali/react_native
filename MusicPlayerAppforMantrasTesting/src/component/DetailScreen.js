// SongDetailsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';

const DetailsScreen = ({ route }) => {
  const { song } = route.params;

  const handlePlayPause = async () => {
    const isPlaying = await TrackPlayer.getState() === TrackPlayer.STATE_PLAYING;

    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: song.id.toString(),
        url: song.url,
        title: song.title,
        artist: song.artist,
        artwork: song.artwork,
      });
      await TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.artist}>{song.artist}</Text>
      <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
        <Text style={styles.playButtonText}>Play / Pause</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  artist: {
    fontSize: 18,
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
