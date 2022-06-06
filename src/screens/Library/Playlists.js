import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import PlaylistsComp from '../../components/Library/PlaylistsComp';
import { ScrollView } from 'react-native-gesture-handler';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Playlists = () => {
  return (
    <ScrollView style={{flex: 1, height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: "black",}}>
      <View>
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginBottom: 20}}>
          <Image 
          source={require('../../assets/images/logo.png')} 
          style={styles.image}
          />

          <View>
            <Text style={styles.album}> 
            New Playlist... 
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <PlaylistsComp
        albumArt={require('../../assets/images/afrobeats.jpg')}
        albumName="Afrobeats Hits"
        albumInfo="Apple Music African"
      />

      <PlaylistsComp
        albumArt={require('../../assets/images/bbessentials.jpg')}
        albumName="Burna Boy Essentials"
        albumInfo="Apple Music African"
      />

      <PlaylistsComp
        albumArt={require('../../assets/images/gospel.jpg')}
        albumName="Gospel Flow"
        albumInfo="Apple Music Gospel"
      />

      <PlaylistsComp
        albumArt={require('../../assets/images/pillowtalk.jpg')}
        albumName="Pillow Talk"
        albumInfo="Apple Music R&B"
      />    
    </ScrollView>
  )
}

export default Playlists;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    borderRadius: 5,
    left: 15,
    top: 10
},
album: {
  color: "white",
  fontFamily: "Poppins-Regular",
  left: 25,
  top: 10,
  fontSize: 20,
},
})