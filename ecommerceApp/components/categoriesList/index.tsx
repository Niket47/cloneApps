import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categories } from '../../constants/strings'
import { Colors } from '../../constants/colors';
import { Fonts, Fonts_Size } from '../../constants/fonts';

interface Category {
    id: number;
    title: string;
}

interface CategoriesListProps {
    onSelected: (title: string) => void;
}

const CategoriesList = (props: CategoriesListProps) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                categories.map((item: Category, index) => {
                    return (
                        <TouchableOpacity style={styles.container} onPress={() => {
                            props.onSelected(item.title)
                        }}
                            key={index}>
                            <Text style={styles.texts}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default CategoriesList

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        borderRadius: 50
    },
    texts: {
        color: Colors.white,
        fontSize: Fonts_Size._18,
        fontFamily: Fonts.bold
    }
})