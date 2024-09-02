import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaViewComp from '../../components/SafeAreaViewComp'
import { Colors } from '../../constants/colors'
import { images } from '../../constants/images'
import ButtonPrimary from '../../components/buttonPrimary'
import { Fonts, Fonts_Size } from '../../constants/fonts'
import { homeStyles } from './style'
import { data, Product } from '../../constants/strings'
import PrimeCard from '../../components/primeCard'
import RenderList from '../../components/renderList'
import HomeBanner from '../../components/homeBanner'

const { height, width } = Dimensions.get("window")

const Home = () => {



  const renderItem = ({ item }: { item: Product }) => {
    return (
      <PrimeCard
        imageUrl={item.imageUrl}
        rating={item.rating}
        price={item.price}
        title={item.title}
        description={item.description}
      />
    )
  }


  return (
    <View style={homeStyles.container} >
      <StatusBar barStyle={"dark-content"} />
      <ScrollView style={{ flex: 1 }}>
       <HomeBanner />
        <View>
          <RenderList
            data={data}
            listTitle={"Sale"}
            listDescription={"Super summer sale"}
            ViewAll={"ViewAll"}
          />
        </View>
        <View>
          <RenderList
            data={data}
            listTitle={"New"}
            listDescription={"Super summer sale"}
            ViewAll={"ViewAll"}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

})