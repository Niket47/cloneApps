import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Shop from '../screens/shop';
import Bag from '../screens/bag';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import { images } from '../constants/images';
import { normalize } from '../utils/globalStyles';

const RootNavigation = () => {

  const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image source={focused ? images.iconHomeFilled : images.iconHome} style={{
                    height: normalize(21), width: normalize(21)
                  }} />
                </View>
              )
            }
          }} />
        <Tab.Screen name="Shop" component={Shop}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image source={focused ? images.iconHomeFilled : images.iconHome} style={{
                    height: normalize(21), width: normalize(21)
                  }} />
                </View>
              )
            }
          }}
        />
        <Tab.Screen name="Bag" component={Bag}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image source={focused ? images.iconHomeFilled : images.iconHome} style={{
                    height: normalize(21), width: normalize(21)
                  }} />
                </View>
              )
            }
          }}
        />
        <Tab.Screen name="Favorites" component={Favorites}

          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image source={focused ? images.iconHomeFilled : images.iconHome} style={{
                    height: normalize(21), width: normalize(21)
                  }} />
                </View>
              )
            }
          }} />
        <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image source={focused ? images.iconHomeFilled : images.iconHome} style={{
                  height: normalize(21), width: normalize(21)
                }} />
              </View>
            )
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})