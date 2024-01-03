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
import tw from 'tailwind-react-native-classnames';

const LiveScreenCards = ({data, imageWidth, playNewLiveVideo}) => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEnabled={false}
        style={tw`pt-3 m-4`}
        renderItem={({item}) => (
          <TouchableOpacity
            style={tw`mx-3 shadow-md  bg-white`}
            onPress={() => playNewLiveVideo(item.videoId)}>
            <Image
              source={{uri: item.image}}
              style={[styles.image, {width: imageWidth - 23}]}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
  },
});

export default LiveScreenCards;
