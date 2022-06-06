import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import ArtistsComp from '../../components/Library/ArtistsComp';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Artists = () => {
  return (
    <View style={{backgroundColor: "black", flex: 1}}>

      <Text style={styles.text}>
        A
      </Text>
      <View style={styles.line}/>
      <ArtistsComp
        artistIcon={require('../../assets/images/asake.jpeg')}
        artistName='Asake'
      />

      <Text style={styles.text}>
        B
      </Text>
      <View style={styles.line}/>
      <ArtistsComp
        artistIcon={require('../../assets/images/bia.jpg')}
        artistName='Bia'
      />

      <ArtistsComp
        artistIcon={require('../../assets/images/burna.jpg')}
        artistName='Burna Boy'
      />

      <Text style={styles.text}>
        F
      </Text>
      <View style={styles.line}/>
      <ArtistsComp
        artistIcon={require('../../assets/images/future.jpeg')}
        artistName='Future'
      />

      <Text style={styles.text}>
        K
      </Text>
      <View style={styles.line}/>
      <ArtistsComp
        artistIcon={require('../../assets/images/koffee.jpeg')}
        artistName='Koffee'
      />

      <Text style={styles.text}>
        L
      </Text>
      <View style={styles.line}/>
      <ArtistsComp
        artistIcon={require('../../assets/images/latto.jpeg')}
        artistName='Latto'
      />
    </View>
  )
}

export default Artists;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    color: "white",
    position: "relative",
    top: 35,
    left: 85,
  },

  line: {
    position: "relative", 
    height: 1, 
    width: SCREEN_WIDTH, 
    backgroundColor: "#303030",
    top: 30,
    left: 85
}

})