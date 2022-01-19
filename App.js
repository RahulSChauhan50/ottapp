import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OttContent from './assets/screens/Home/OttContent';
import Search from './assets/screens/Search/Search';
import Favourites from './assets/screens/Favourites/Favourites';
import Profile from './assets/screens/Profile/Profile';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="OttContent"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'OttContent': {
              iconName = focused ? 'movie-open' : 'movie-open-outline';
              break;
            }
            case 'Search': {
              iconName = focused ? 'magnify' : 'magnify';
              break;
            }
            case 'Favourites': {
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            }
            case 'Profile': {
              iconName = focused ? 'account' : 'account-outline';
              break;
            }
            default: {
              iconName = focused ? 'beaker' : 'beaker';
              break;
            }
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="OttContent" component={OttContent} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Homescreen">
          <Stack.Screen
            name="Homescreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
