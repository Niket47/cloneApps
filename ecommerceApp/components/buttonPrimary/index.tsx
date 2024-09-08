import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { normalize } from '../../utils/globalStyles'
import { Colors } from '../../constants/colors'
import { Fonts, Fonts_Size } from '../../constants/fonts'

interface ButtonProps {
    title: String | null,
    onButtonPress: () => void
}

const ButtonPrimary = ({ title, onButtonPress }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onButtonPress} style={styles.container}>
            <Text style={{
                color: Colors.white,
                fontSize: Fonts_Size._16,
                fontFamily: Fonts.regular
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: normalize(40),
        backgroundColor: Colors.brandColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "center"
    }
})