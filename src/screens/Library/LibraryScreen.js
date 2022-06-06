import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Sections from '../../components/Library/Sections';
import AlbumsComp from '../../components/Library/AlbumsComp';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Library = () => {
    const navigation = useNavigation();

  return (
    <ScrollView>

        <View style={[styles.edit, {top: 5, right: 15, zIndex: 1}]}>
            <TouchableOpacity>
               <Icon name={'ellipsis-vertical'} size={20} color={'#fc3c44'}/>
            </TouchableOpacity>     
        </View>
        
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.library}>
                Library
            </Text>

            <Text style={styles.edit}>
                Edit
            </Text>

            <Sections
                iconName='musical-notes'
                sectionText='Playlists'
                navScreen='Playlists'
            />
            <Sections
                iconName='mic'
                sectionText='Artists'
                navScreen='Artists'
            />
            <Sections
                iconName='albums-outline'
                sectionText='Albums'
                navScreen='Albums'
            />
            <Sections
                iconName='musical-note'
                sectionText='Songs'
                navScreen='Songs'
            />
            <Sections
                iconName='arrow-down-circle-outline'
                sectionText='Downloaded'
            />
            <Sections
                iconName='tv-outline'
                sectionText='TV & Movies'
            />
        </ScrollView>

        <ScrollView contentContainerStyle={[styles.container, {
            backgroundColor: "black", 
            justifyContent:null, 
            height:SCREEN_HEIGHT/1,
            }]}>
            <Text style={[styles.library, {fontSize: 20, marginTop: 20, top: -5, left:15, color: "white"}]}>
                Recently Added
            </Text>
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
    </ScrollView>
  )
}

export default Library;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: SCREEN_HEIGHT/1.8,
        width: SCREEN_WIDTH,
        justifyContent: "space-between",
    },
    library: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 30,
        left: 20,
        marginTop: 50,
    },
    albumAlign: {
        flexDirection: 'row',
        position: "relative",
        right: 30,
        justifyContent: "space-evenly",
    },
    edit: {
        position: "absolute",
        right: SCREEN_WIDTH/45,
        top: 65,
        right: 15,
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        color: "#fc3c44"
    },
})