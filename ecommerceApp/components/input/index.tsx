import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { normalize } from '../../utils/globalStyles'
import { Fonts, Fonts_Size } from '../../constants/fonts'
import { Colors } from '../../constants/colors'

interface InputProps {
    value: String | any,
    label: String | any,
    onChangeText: (text: string) => void
}

const Input = ({ value, onChangeText, label }: InputProps) => {
    return (
        <View>
            {label &&
                <View style={styles.labelView}>
                    <Text style={styles.labelText}>{label}</Text>
                </View>}
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: normalize(30),
        width: "100%",
        padding: 10,
        fontSize: Fonts_Size._14,
        fontFamily: Fonts.regular
    },
    container: {
        backgroundColor: "#F9F9F9",
        height: normalize(37),
        width: "100%",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#9B9B9B"
    },
    labelView: {
        paddingBottom: 5
    },
    labelText: {
        fontSize: Fonts_Size._14,
        fontFamily: Fonts.regular,
        textTransform: "capitalize",
        color: Colors.black
    }
})