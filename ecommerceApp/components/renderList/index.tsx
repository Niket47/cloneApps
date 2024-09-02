import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../../constants/strings'
import PrimeCard from '../primeCard'
import { Fonts, Fonts_Size } from '../../constants/fonts'
import { Colors } from '../../constants/colors'


interface RenderListProps {
    data: any,
    ViewAll: String,
    listTitle: String,
    listDescription: String,
}


const RenderList = ({ data, ViewAll, listTitle, listDescription }: RenderListProps) => {


    const renderItem = ({ item }: { item: Product }) => {
        return (
            <View style={{ marginRight: 7 }}>
                <PrimeCard
                    imageUrl={item.imageUrl}
                    rating={item.rating}
                    price={item.price}
                    title={item.title}
                    description={item.description}
                />
            </View>
        )
    }


    return (
        <View style={{
            paddingTop: 15,
        }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.saleTitle}>{listTitle}</Text>
                    <Text style={styles.saleDec}>{listDescription}</Text>
                </View>
                <View>
                    <Text style={styles.viewAll}>{ViewAll}</Text>
                </View>
            </View>
            <FlatList
                style={{ flex: 1, paddingHorizontal: 10 }}
                data={data}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
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

export default RenderList

const styles = StyleSheet.create({
    saleTitle: {
        fontFamily: Fonts.regularMedium,
        fontSize: Fonts_Size._24,
        color: Colors.black
    },
    saleDec: {
        fontFamily: Fonts.regular,
        fontSize: Fonts_Size._14,
        color: Colors.gray
    },
    viewAll: {
        fontFamily: Fonts.regular,
        fontSize: Fonts_Size._14,
        color: Colors.black
    },
    container: {
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        alignItems: "center"
    }
})