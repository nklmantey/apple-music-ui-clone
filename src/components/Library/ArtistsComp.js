import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ArtistsComp = ({ artistIcon, artistName }) => {
    return(
        <View style={{marginTop: 10}}>
           <TouchableOpacity style={styles.align}>
                <Image source={artistIcon} style={styles.image}/>
                <Text style={styles.text}>
                    {artistName}
                </Text>
           </TouchableOpacity>

           {artistName === "Bia" 
           ?
           <View style={[styles.line, {left: 85}]}/> 
           :
           <View style={styles.line}/>  } 
        </View>
    )
}

export default ArtistsComp;

const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 50,
        borderRadius: 60,
        resizeMode: 'cover',
    },

    align: {
        flexDirection: "row",
        alignItems: "center",
        top: 20,
        left: 15,
    },

    text: {
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        color: "white",
        left: 20,
    },

    line: {
        position: "relative", 
        height: 1, 
        width: SCREEN_WIDTH/1, 
        backgroundColor: "#303030",
        top: 25,
    },        
})
