import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const AlbumsComp = ({albumArt, albumName, albumInfo, ...rest }) => {
  return (
    <View>
      <View style={styles.container}>

        <TouchableOpacity>
          <Image source={albumArt} style={styles.image}/>
        </TouchableOpacity>

        <Text style={styles.album}> 
          {albumName} 
        </Text>

        <Text style={[styles.album, {top: -2, color: "grey"}]}> 
          {albumInfo} 
        </Text>

      </View>
    </View>

  )
}

export default AlbumsComp;

const styles = StyleSheet.create({
  album: {
    color: "white",
    fontFamily: "Poppins-Regular",
    left: 25,
    top: 3,
    fontSize: 14,
  },
  image: {
      height: 170,
      width: 170,
      borderRadius: 5,
      left: 25,
  },
})