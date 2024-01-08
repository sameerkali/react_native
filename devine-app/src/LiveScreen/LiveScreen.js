import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import tw from 'tailwind-react-native-classnames';
import HeaderTwo from '../Component/HeaderTwo';
import NavModal from '../Component/NavModal';
import {useWindowDimensions} from 'react-native';
import {data, dataTwo, dataThree, dataFour} from './LiveScreenData';
import LiveScreenCards from './LiveScreenCards';

const LiveScreen = () => {
  const [toggle, setToggle] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liveVideoId, setLiveVideoId] = useState('WtPR_BizYTk'); // Default video ID

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };

  const playNewLiveVideo = videoId => {
    setLiveVideoId(videoId);
    setIsPlaying(true);
  };

  const layout = useWindowDimensions();
  const imageWidth = layout.width / 2.2;

  return (
    <SafeAreaView style={tw`flex-grow bg-white `}>
      <View>
        <HeaderTwo
          toggle={toggle}
          setToggle={setToggle}
          toggleModal={toggleModal}
        />
        <NavModal
          setModalVisible={setModalVisible}
          isModalVisible={isModalVisible}
        />

        <ScrollView style={tw`pt-1  mb-28`}>
          <YoutubePlayer height={215} videoId={liveVideoId} />

          <View
            style={[
              tw`pt-2 border mx-1 pb-1 border-gray-300`,
              {
                borderTopColor: 'white',
                borderRightColor: 'white',
                borderLeftColor: 'white',
              },
            ]}>
            <Text
              style={[
                tw`px-3 font-bold text-2xl text-center`,
                {color: '#048C8C'},
              ]}>
              Live Tv Channels
            </Text>
          </View>
          <LiveScreenCards
            data={data}
            imageWidth={imageWidth}
            playNewLiveVideo={playNewLiveVideo}
          />
          <LiveScreenCards
            data={dataTwo}
            imageWidth={imageWidth}
            playNewLiveVideo={playNewLiveVideo}
          />
          <LiveScreenCards
            data={dataThree}
            imageWidth={imageWidth}
            playNewLiveVideo={playNewLiveVideo}
          />
          <LiveScreenCards
            data={dataFour}
            imageWidth={imageWidth}
            playNewLiveVideo={playNewLiveVideo}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LiveScreen;
