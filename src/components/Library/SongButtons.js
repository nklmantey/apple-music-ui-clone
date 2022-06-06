import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SongButtons = ({ iconName, buttonName }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Icon name={iconName} size={28} color={'white'} />

        <Text style={styles.buttonText}> 
          {buttonName}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SongButtons

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: 'white',
    alignSelf: "center",
    marginLeft: 10
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fc3c44',
    width: 180,
    alignSelf: 'center',
    top: 10,
    justifyContent: "center",
    height: 48,
  },
})