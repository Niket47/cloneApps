import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { homeStyles } from '../../screens/home/style'
import { images } from '../../constants/images'

const { height, width } = Dimensions.get("window")

const HomeBanner = () => {
    return (
        <View>
            <View style={{ position: "relative" }}>
                <Image style={{ width: width, height: height / 1.6 }}
                    source={images.bannerImage} />
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
        </View>
    )
}

export default HomeBanner

const styles = StyleSheet.create({})