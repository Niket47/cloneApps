import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeAreaViewComp from '../../components/SafeAreaViewComp'
import Header from '../../components/header'
import { shopStyles } from './styles'
import { categories, data, Product } from '../../constants/strings'
import CategoriesList from '../../components/categoriesList'
import FilterHeader from '../../components/filterheader'
import { Colors } from '../../constants/colors'
import { images } from '../../constants/images'
import { normalize } from '../../utils/globalStyles'
import Card from '../../components/card'
import ShoppingCategories from '../../components/shoppingCategories'
import { useIsFocused } from '@react-navigation/native'

const { width, height } = Dimensions.get("window")

const Shop = ({ navigation }: any) => {
  const isFocused = useIsFocused()

  const [selectedCategory, setSelectedCategory] = useState<String | null>("")
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const [isGrid, setIsGrid] = useState<boolean>(false);
  const [category, setCategory] = useState<String | null>("")

  const onGridPress = () => {
    setIsGridView(!isGridView);
    setIsGrid(!isGrid)
  };

  useEffect(() => {
    setCategory("")
  }, [isFocused])

  const handleCategoryPress = (category: string) => {
    console.log('Selected Category:', category?.title);
    setCategory(category?.title)
  };


  const renderItem = ({ item }: { item: Product }) => {
    return (
      <Card
        isGrid={isGrid}
        imageUrl={item.imageUrl}
        rating={item.rating}
        price={item.price}
        title={item.title}
        description={item.description}
        onPressCard={() => navigation.navigate("ProductDetails", { productData: item })}
      />
    )
  }


  return (
    <SafeAreaViewComp statusBarBg={"pink"}>
      <Header onBack={() => {
        navigation.goBack()
      }}
        onSearch={() => null}
      />
      {category == "" && <ShoppingCategories onCategoryPress={handleCategoryPress} />}

      {category && <>
        <View style={shopStyles.container}>
          <View style={{
            paddingVertical: 10
          }}>
            <Text style={shopStyles.title}>Women’s tops</Text>
          </View>
          <View>
            <CategoriesList onSelected={(data) => {
              setSelectedCategory(data)
            }} />
          </View>
          <View>
            <FilterHeader
              onGridPress={onGridPress}
              isGridView={isGridView}
              onFilterPress={() => null}
              onPricesSort={() => null}
            />
          </View>
        </View>
        <FlatList
          style={{ flex: 1, paddingTop: 10, paddingHorizontal: 5 }}
          data={data}
          renderItem={renderItem}
          key={isGrid ? 'row' : 'grid'}
          keyExtractor={(_, index) => `${index}`}
          numColumns={isGrid ? 1 : 2}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => {
            return (
              <View style={{ paddingBottom: 100 }} />
            )
          }}
        />
      </>
      }

    </SafeAreaViewComp>
  )
}

export default Shop

