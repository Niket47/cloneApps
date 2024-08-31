import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../constants/images'
import { normalize } from '../../utils/globalStyles'
import { Colors } from '../../constants/colors'
import { Fonts, Fonts_Size } from '../../constants/fonts'

interface FilterHeaderProps {
    onGridPress: () => void;
    isGridView: boolean;
    onFilterPress: () => void;
    onPricesSort: () => void;
}

const FilterHeader = ({ onGridPress, isGridView, onFilterPress, onPricesSort }: FilterHeaderProps) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onFilterPress} style={styles.viewA}>
                <Image source={images.iconSort} style={{
                    width: normalize(21),
                    height: normalize(21),
                    marginRight: 5
                }} />
                <Text style={styles.texts}>Filters</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPricesSort} style={styles.centerView}>
                <Image source={images.iconSwap} style={{
                    width: normalize(21),
                    height: normalize(21),
                    marginRight: 5
                }} />
                <Text style={styles.texts}>Price: lowest to high</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onGridPress} style={styles.viewB}>
                <Image
                    source={isGridView ? images.iconGrid : images.iconRow}
                    style={{
                        width: normalize(21),
                        height: normalize(21)
                    }} />
            </TouchableOpacity>

        </View>
    )
}

export default FilterHeader

const styles = StyleSheet.create({
    texts: {
        color: Colors.black,
        fontSize: Fonts_Size._14,
        fontFamily: Fonts.regular
    },
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingVertical: 10,
        // borderBottomWidth: 0.5,
        // borderColor: Colors.gray
    },
    viewA: {
        width: "25%",
        alignItems: "center",
        flexDirection: "row"
    },
    centerView: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    viewB: {
        width: "25%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "row"
    }
})