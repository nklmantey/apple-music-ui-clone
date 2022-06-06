import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import SongButtons from '../../components/Library/SongButtons'
import AlbumsComp from '../../components/Library/AlbumsComp'
import SongComp from '../../components/Library/SongComp'
import { ScrollView } from 'react-native-gesture-handler'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const Songs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonAlign}>
        <SongButtons 
          iconName={'play-sharp'}
          buttonName={'Play'}
        />

      <SongButtons 
          iconName={'shuffle'}
          buttonName={'Shuffle'}
        />
      </View>

      <View style={styles.line}/>

      <ScrollView style={{top: 25, flex: 1, maxHeight: SCREEN_HEIGHT/0.5,}}>
        <SongComp
          albumArt={require('../../assets/images/gifted.jpeg')}
          songName={'x10'}
          songArtist={'Koffee'}
        />

        <SongComp
          albumArt={require('../../assets/images/gifted.jpeg')}
          songName={'Defend'}
          songArtist={'Koffee'}
        />

        <SongComp
          albumArt={require('../../assets/images/gifted.jpeg')}
          songName={'Shine'}
          songArtist={'Koffee'}
        />

        <SongComp
          albumArt={require('../../assets/images/gifted.jpeg')}
          songName={'Gifted'}
          songArtist={'Koffee'}
        />

        <SongComp
          albumArt={require('../../assets/images/gifted.jpeg')}
          songName={'Lonely'}
          songArtist={'Koffee'}
        />

        <SongComp
          albumArt={require('../../assets/images/gifted.jpeg')}
          songName={'Lonely'}
          songArtist={'Koffee'}
        />

        <SongComp
          albumArt={require('../../assets/images/gifted.jpeg')}
          songName={'Lonely'}
          songArtist={'Koffee'}
        />

        <SongComp
          albumArt={require('../../assets/images/lovedamini.jpg')}
          songName={'Last Last '}
          songArtist={'Burna Boy'}
        />

        <SongComp
          albumArt={require('../../assets/images/lovedamini.jpg')}
          songName={'Last Last '}
          songArtist={'Burna Boy'}
        />
      </ScrollView>
    </View>
  )
}

export default Songs;

const styles = StyleSheet.create({
  buttonAlign: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  container: {
    backgroundColor: "black", 
    flex: 1, 
  },
  line: {
    backgroundColor: "#393939",
    height: 1,
    width: SCREEN_WIDTH, 
    top: 25,
  }
})