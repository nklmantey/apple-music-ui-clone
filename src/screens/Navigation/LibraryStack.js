import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

import LibraryScreen from '../Library/LibraryScreen';
import Playlists from '../Library/Playlists';
import Artists from '../Library/Artists';
import Albums from '../Library/Albums';
import Songs from '../Library/Songs';

const Stack = createStackNavigator();

const LibraryStack = () => {
    const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="LibraryScreen">
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
        <Stack.Screen name="Playlists" component={Playlists} 
            options={{
                headerShown:true,
                headerLeft: () => (<Icon name={'arrow-back-outline'} size={20} color={'red'} 
                    onPress={() => navigation.navigate('LibraryScreen')} />),
                headerStyle: { backgroundColor: "black", borderBottomColor: "white", borderWidth: 0.2 },
                headerTintColor: 'white',
                headerTitleStyle: { fontFamily: "Poppins-Regular", fontSize: 20},                    
            }}
        />
        <Stack.Screen name="Artists" component={Artists} 
            options={{
                headerShown:true,
                headerLeft: () => (<Icon name={'arrow-back-outline'} size={20} color={'red'} 
                    onPress={() => navigation.navigate('LibraryScreen')} />),
                headerStyle: { backgroundColor: "black", borderBottomColor: "white", borderWidth: 0.2 },
                headerTintColor: 'white',
                headerTitleStyle: { fontFamily: "Poppins-Regular", fontSize: 20},                    
            }}
        />
        <Stack.Screen name="Albums" component={Albums} 
            options={{
                headerShown:true,
                headerLeft: () => (<Icon name={'arrow-back-outline'} size={20} color={'red'} 
                    onPress={() => navigation.navigate('LibraryScreen')} />),
                headerStyle: { backgroundColor: "black", borderBottomColor: "white", borderWidth: 0.2 },
                headerTintColor: 'white',
                headerTitleStyle: { fontFamily: "Poppins-Regular", fontSize: 20},                    
            }}
        />
        <Stack.Screen name="Songs" component={Songs} 
            options={{
                headerShown:true,
                headerLeft: () => (<Icon name={'arrow-back-outline'} size={20} color={'red'} 
                    onPress={() => navigation.navigate('LibraryScreen')} />),
                headerStyle: { backgroundColor: "black", borderBottomColor: "white", borderWidth: 0.2 },
                headerTintColor: 'white',
                headerTitleStyle: { fontFamily: "Poppins-Regular", fontSize: 20},                    
            }}
        />
    </Stack.Navigator>
  )
}

export default LibraryStack;