import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../../constants/images'
import { normalize } from '../../utils/globalStyles'

interface HeaderProps {
    onBack: () => void;
    onSearch: () => void;
}

const Header = ({ onBack, onSearch }: HeaderProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBack}>
                <Image source={images.iconBack} style={{
                    width: normalize(23),
                    height: normalize(23)
                }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onSearch}>
                <Image source={images.iconSearch} style={{
                    width: normalize(23),
                    height: normalize(23)
                }} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // height: 45,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        // backgroundColor:"pink"
    }
})