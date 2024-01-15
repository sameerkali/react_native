

// import TrackPlayer, { Event, RepeatMode, State } from 'react-native-track-player';

// export async function setupPlayer() {
//   try {
//     const playbackState = await TrackPlayer.getPlaybackState();
//     if (playbackState !== null) {
//       return true;
//     }
//   } catch (error) {
//     console.error('Error checking playback state: (musicPlayerServices.js)', error);
//   }

//   try {
//     await TrackPlayer.setupPlayer();
//     return true;
//   } catch (error) {
//     console.error('Error setting up player: (musicPlayerServices.js)', error);
//     throw error; // Re-throw the error for further handling
//   }
// }

// export async function addTrack() {
//   try {
//     const response = await fetch('https://backend.divinezone.in/getAllMantras');
//     if (!response.ok) {
//       throw new Error('Failed to fetch data: (musicPlayerServices.js)');
//     }

//     const data = await response.json();
//     console.log('Fetched Data:', data); // Log the fetched data

//     // Assuming that the API response is an array of tracks, modify this accordingly
//     const tracks = data.map((item) => ({
//       id: item.id.toString(),
//       url: item.audio_url,
//       title: item.title,
//       artist: item.artist,
//       artwork: item.image_url,
//     }));

//     await TrackPlayer.reset(); // Clear the existing tracks
//     await TrackPlayer.add(tracks);
//     await TrackPlayer.setRepeatMode(RepeatMode.Queue);
//   } catch (error) {
//     console.error('Error adding tracks:', error);
//     throw error;
//   }
// }

// export async function playbackService() {
//   TrackPlayer.addEventListener(Event.RemotePause, async () => {
//     await TrackPlayer.pause();
//   });

//   TrackPlayer.addEventListener(Event.RemotePlay, async () => {
//     const playbackState = await TrackPlayer.getPlaybackState();
//     if (playbackState !== State.Playing) {
//       await TrackPlayer.play();
//     }
//   });

//   TrackPlayer.addEventListener(Event.RemoteNext, async () => {
//     await TrackPlayer.skipToNext();
//   });

//   TrackPlayer.addEventListener(Event.RemotePrevious, async () => {
//     await TrackPlayer.skipToPrevious();
//   });
// }
