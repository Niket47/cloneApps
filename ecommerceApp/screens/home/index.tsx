import { Dimensions, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaViewComp from '../../components/SafeAreaViewComp'
import { Colors } from '../../constants/colors'
import { images } from '../../constants/images'
import ButtonPrimary from '../../components/buttonPrimary'
import { Fonts, Fonts_Size } from '../../constants/fonts'
import { homeStyles } from './style'

const { height, width } = Dimensions.get("window")

const Home = () => {
  return (
    <View style={homeStyles.container} >
      <StatusBar barStyle={"dark-content"} />
      <ScrollView>
        <View style={{ position: "relative" }}>
          <Image style={{ width: width, height: height / 1.6 }} source={images.bannerImage} />
        </View>
        <View style={homeStyles.titleView}>
          <View style={{
            paddingBottom: 50
          }}>
            <Text style={homeStyles.titles}> Fashion </Text>
            <Text style={homeStyles.titles}> Sale </Text>
          </View>
          <View style={homeStyles.buttonView}>
            <Text style={homeStyles.buttons}>VIEW ALL ITEMS</Text>
          </View>
        </View>





      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})