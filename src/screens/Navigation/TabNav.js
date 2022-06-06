import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListenNow from '../ListenNow/ListenNow';
import Browse from '../Browse/Browse';
import Radio from '../Radio/Radio';
import Search from '../Search/Search';

import Icon from 'react-native-vector-icons/Ionicons';
import LibraryStack from './LibraryStack';

const Tab = createBottomTabNavigator();

function LibraryNav() {
    return (
        <LibraryStack/>
    );
}

function TabNav() {
  return (
    <Tab.Navigator
        initialRouteName='Library'
        screenOptions={({ route }) => ({
            tabBarStyle: {
                backgroundColor: 'black',
            },
            tabBarLabelStyle: {
                fontFamily: "Poppins-Bold",
            },
            headerShown: false,
            tabBarIcon: ({ focused, iconColor, iconName }) => {
                if (route.name === "Library") {
                    iconColor = focused ? "#fc3c44" : "grey";
                    iconName = 'albums';
                } else if (route.name === "Listen Now") {
                    iconColor = focused ? "#fc3c44" : "grey";
                    iconName = 'play-circle';
                } else if (route.name === "Browse") {
                    iconColor = focused ? "#fc3c44" : "grey";
                    iconName = 'grid';
                } else if (route.name === "Radio") {
                    iconColor = focused ? "#fc3c44" : "grey";
                    iconName = 'radio';
                } else {
                    iconColor = focused ? "#fc3c44" : "grey";
                    iconName = 'search';
                }
                return <Icon name={iconName} size={25} color={iconColor} />;
            },
            tabBarActiveTintColor: '#fc3c44',
            tabBarInactiveTintColor: 'gray',
        })}
    >
      <Tab.Screen name="Listen Now" component={ListenNow} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Radio" component={Radio} />
      <Tab.Screen name="Library" component={LibraryNav} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
export default TabNav