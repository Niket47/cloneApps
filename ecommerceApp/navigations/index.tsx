import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Shop from '../screens/shop';
import Bag from '../screens/bag';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import { images } from '../constants/images';
import { normalize } from '../utils/globalStyles';
import { Colors } from '../constants/colors';
import ProductDetails from '../screens/productDetails';
import SignUp from '../screens/authScreens/signup';
import Login from '../screens/authScreens/login';
import Splash from '../screens/authScreens/splash';

const RootNavigation = () => {


  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();


  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.brandColor,
          tabBarHideOnKeyboard:true
        }}>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image source={focused ? images.iconHomeFilled : images.iconHome} style={{
                    height: normalize(21), width: normalize(21)
                  }} resizeMode='contain' />
                </View>
              )
            }
          }} />
        <Tab.Screen name="Shop" component={Shop}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image source={focused ? images.iconCartFilled : images.iconCart} style={{
                    height: normalize(21), width: normalize(21)
                  }} resizeMode='contain' />
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
                  <Image source={focused ? images.iconBagFilled : images.iconBag} style={{
                    height: normalize(21), width: normalize(21)
                  }} resizeMode='contain' />
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
                  <Image source={focused ? images.iconHeartFilled : images.iconHeart} style={{
                    height: normalize(21), width: normalize(21)
                  }} resizeMode='contain' />
                </View>
              )
            }
          }} />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image source={focused ? images.iconProfileFilled : images.iconProfile} style={{
                    height: normalize(21), width: normalize(21)
                  }} resizeMode='contain' />
                </View>
              )
            }
          }} />
      </Tab.Navigator>
    );
  }



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})