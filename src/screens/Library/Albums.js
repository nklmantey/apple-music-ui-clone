import { StyleSheet, Dimensions, View } from 'react-native';
import React from 'react';
import AlbumsComp from '../../components/Library/AlbumsComp';
import { ScrollView } from 'react-native-gesture-handler';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Albums = () => {
  return (
    <ScrollView contentContainerStyle={{height: SCREEN_HEIGHT, backgroundColor: "black"}}>
      <View style={styles.albumAlign}>
        <AlbumsComp 
          albumArt={require('../../assets/images/gifted.jpeg')}
          albumName='Gifted'
          albumInfo='Koffee'
        />
        
        <AlbumsComp 
          albumArt={require('../../assets/images/london.png')}
          albumName='LONDON'
          albumInfo='Bia & J. Cole'
        />
      </View>

      <View style={[styles.albumAlign, {top: 20}]}>
        <AlbumsComp 
          albumArt={require('../../assets/images/777.jpeg')}
          albumName='777'
          albumInfo='Latto'
        />
            
        <AlbumsComp 
          albumArt={require('../../assets/images/future.jpeg')}
          albumName='I NEVER LIKED YOU'
          albumInfo='Future'
        />
      </View>

      <View style={[styles.albumAlign, {top: 40}]}>
        <AlbumsComp 
          albumArt={require('../../assets/images/lovedamini.jpg')}
          albumName='Love, Damini'
          albumInfo='Burna Boy'
        />

        <AlbumsComp 
          albumArt={require('../../assets/images/overloading.jpeg')}
          albumName='Overloading'
          albumInfo='Mavins'
        />
      </View>
    </ScrollView>
  )
}

export default Albums;

const styles = StyleSheet.create({
  albumAlign: {
    flexDirection: 'row',
    position: "relative",
    right: 30,
    justifyContent: "space-evenly",
  },
})