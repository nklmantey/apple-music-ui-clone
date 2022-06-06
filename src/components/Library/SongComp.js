import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SongComp = ({albumArt, songName, songArtist, ...rest}) => {
  return (
    <View>
      <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginBottom: 20}}>
          <Image source={albumArt} style={styles.image}/>

          <View>
            <Text style={styles.album}> 
            {songName} 
            </Text>

            <Text style={[styles.album, {fontSize: 15, color:'#d3d3d3', top: 10}]}> 
            {songArtist} 
            </Text>

            <View style={styles.line} />
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default SongComp;

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 5,
    left: 15,
    top: 10
    },
  album: {
    color: "white",
    fontFamily: "Poppins-Regular",
    left: 25,
    top: 15,
    fontSize: 18,
  },
//   line: {
//     position: "absolute", 
//     height: 1, 
//     width: SCREEN_WIDTH, 
//     backgroundColor: "#303030", 
//     top: -30,
//     left: 25,
//   }

  })