import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;

const PlaylistsComp = ({albumArt, albumName, albumInfo, ...rest}) => {
  return (
    <View>
      <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginBottom: 20}}>
          <Image source={albumArt} style={styles.image}/>

          <View>
            <Text style={styles.album}> 
            {albumName} 
            </Text>

            <Text style={[styles.album, {fontSize: 15, color:'#d3d3d3', top: 10}]}> 
            {albumInfo} 
            </Text>

            <View style={styles.line} />
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default PlaylistsComp;

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
  line: {
    position: "absolute", 
    height: 1, 
    width: SCREEN_WIDTH, 
    backgroundColor: "#303030", 
    top: -30,
    left: 25,
  }

  })