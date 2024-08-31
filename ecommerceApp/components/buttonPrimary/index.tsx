import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalize } from '../../utils/globalStyles'
import { Colors } from '../../constants/colors'
import { Fonts, Fonts_Size } from '../../constants/fonts'

const ButtonPrimary = ({ }) => {
    return (
        <View style={{
            width: "95%",
            height: normalize(40),
            backgroundColor: Colors.brandColor,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            alignSelf: "center"
        }}>
            <Text style={{
                color: Colors.white,
                fontSize: Fonts_Size._16,
                fontFamily: Fonts.regular
            }}>VIEW ALL ITEMS</Text>
        </View>
    )
}

export default ButtonPrimary

const styles = StyleSheet.create({})