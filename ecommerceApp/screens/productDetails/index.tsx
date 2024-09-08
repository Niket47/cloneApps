import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaViewComp from '../../components/SafeAreaViewComp'
import Header from '../../components/header'

const ProductDetails = ({ navigation, route }: any) => {
    const productData = route?.params?.productData

    console.log(productData, "---productData")

    return (
        <SafeAreaViewComp statusBarBg={"pink"}>
            <Header onBack={() => {
                navigation.goBack()
            }}
                onSearch={() => null}
            />
            <View>
                

            </View>




        </SafeAreaViewComp>
    )
}

export default ProductDetails

const styles = StyleSheet.create({})