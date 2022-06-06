import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// const SCREEN_HEIGHT = Dimensions.get('window').height;
// const SCREEN_WIDTH = Dimensions.get('window').width;

const Sections = ({iconName, sectionText, navScreen }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View>

        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(navScreen)}>
          <Icon name={iconName} size={28} color='#fc3c44'/>
          <Text style={styles.sectionText}> 
            {sectionText} 
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Sections;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "row", 
    alignItems: "center", 
    position: "absolute",
    top: -40,
    left: 20,
  },
  sectionText: {
    color: "white",
    fontFamily: "Poppins-Regular",
    left: 10,
    top: 2,
    fontSize: 19,
    letterSpacing: -1
  },
  icons: {
  }
})