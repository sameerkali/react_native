import React, { useState, useEffect } from 'react';
import { View, Button, Image, Text } from 'react-native';
import Sound from 'react-native-sound';
import ImagePicker from 'react-native-image-picker';

const Mantra = () => {
  const [sound, setSound] = useState(null);
  const [artwork, setArtwork] = useState(null);
  const [songURL, setSongURL] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Fetch the JSON data from the provided URL
    fetch('http://143.110.188.54:7000/getAllMantras')
      .then(response => response.json())
      .then(data => {
        const { URL, artWork } = data;
        setSongURL(URL);
        setArtwork(artWork);

        // Initialize the sound object
        const soundFile = new Sound(URL, null, error => {
          if (error) {
            console.error('Failed to load sound', error);
            return;
          }
          setSound(soundFile);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Clean up sound on component unmount
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, []);

  const play = () => {
    if (sound) {
      sound.play(success => {
        if (success) {
          console.log('Successfully played the sound');
        } else {
          console.log('Failed to play the sound');
        }
        setIsPlaying(success);
      });
    }
  };

  const pause = () => {
    if (sound) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  const pickImage = () => {
    // Open the image picker to select artwork
    ImagePicker.showImagePicker({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setArtwork(response.uri);
      }
    });
  };

  return (
    <View>
      {artwork && <Image source={{ uri: artwork }} style={{ width: 200, height: 200 }} />}
      <Text>Song: {songURL}</Text>
      <Button title={isPlaying ? 'Pause' : 'Play'} onPress={isPlaying ? pause : play} />
      <Button title="Pick Artwork" onPress={pickImage} />
    </View>
  );
};

export default Mantra;
