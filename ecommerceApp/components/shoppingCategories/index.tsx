import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/colors';
import { Fonts, Fonts_Size } from '../../constants/fonts';
import { images } from '../../constants/images';


interface shoppingCategoriesProps {
    // selectedCategory: String,
    onCategoryPress: (category: string) => void;
}

const listCat = [
    {
        id: 0,
        title: "New",
        imageUrl: images.bannerImage
    },
    {
        id: 1,
        title: "Clothes",
        imageUrl: images.bannerImage
    },
    {
        id: 2,
        title: "Shoes",
        imageUrl: images.bannerImage
    },
    {
        id: 3,
        title: "Accesories",
        imageUrl: images.bannerImage
    },
]

const ShoppingCategories = ({ onCategoryPress }: shoppingCategoriesProps) => {

    const [selectedCategory, setSelectedCategory] = useState<String>('Women');

    const onSelectCategory = (category: string) => {
        onCategoryPress(category);
    };


    const renderItem = ({ item }: any) => {
        return (
            <Pressable onPress={() => onSelectCategory(item)} style={styles.cardContainer}>
                <View style={styles.leftView}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                </View>
                <View style={styles.rightView}>
                    <Image source={images.bannerImage} style={styles.cardImage} />
                </View>
            </Pressable>
        )
    }


    return (
        <View style={{ flex: 1 }}>
            <View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <TouchableOpacity onPress={() => setSelectedCategory('Women')} style={[styles.topButtons, {
                        borderBottomWidth: selectedCategory === 'Women' ? 1.2 : 0,
                        borderColor: Colors.brandColor
                    }]}>
                        <Text style={[styles.topButtonsText, {
                            fontFamily: selectedCategory === 'Women' ? Fonts.regularMedium : Fonts.regular,
                        }]}>Women</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedCategory('Men')} style={[styles.topButtons, {
                        borderBottomWidth: selectedCategory === 'Men' ? 1.2 : 0,
                        borderColor: Colors.brandColor
                    }]}>
                        <Text style={[styles.topButtonsText, {
                            fontFamily: selectedCategory === 'Men' ? Fonts.regularMedium : Fonts.regular,
                        }]}>Men</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedCategory('Kids')} style={[styles.topButtons, {
                        borderBottomWidth: selectedCategory === 'Kids' ? 1.2 : 0,
                        borderColor: Colors.brandColor
                    }]}>
                        <Text style={[styles.topButtonsText, {
                            fontFamily: selectedCategory === 'Kids' ? Fonts.regularMedium : Fonts.regular,
                        }]}>Kids</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <View style={styles.bannerContainer}>
                            <Text style={styles.bannerTitle}>SUMMER SALES</Text>
                            <Text style={styles.bannerDes}>Up to 50% off</Text>
                        </View>
                    )
                }}
                style={{ paddingTop: 10 }}
                data={listCat}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(_, index) => `${index}`}
                ListFooterComponent={() => {
                    return (
                        <View style={{ paddingBottom: 100 }} />
                    )
                }}
            />

        </View>
    )
}

export default ShoppingCategories

const styles = StyleSheet.create({
    topButtons: {
        width: "33.33%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 5,
        height: 25
    },
    topButtonsText: {
        fontFamily: Fonts.regular,
        fontSize: Fonts_Size._14,
        color: Colors.black
    },
    bannerContainer: {
        backgroundColor: Colors.brandColor,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: "93%",
        alignSelf: "center",
        height: 100,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    bannerTitle: {
        fontFamily: Fonts.regularMedium,
        fontSize: Fonts_Size._20,
        color: Colors.white
    },
    bannerDes: {
        fontFamily: Fonts.regularMedium,
        fontSize: Fonts_Size._15,
        color: Colors.white,
        paddingTop: 5
    },
    cardTitle: {
        fontFamily: Fonts.regularMedium,
        fontSize: Fonts_Size._16,
        color: Colors.black,
    },
    cardContainer: {
        backgroundColor: Colors.white,
        height: 100,
        width: "93%",
        alignSelf: "center",
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    leftView: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    rightView: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    cardImage: {
        width: "100%", height: 100,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    }
})