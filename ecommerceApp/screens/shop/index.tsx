import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaViewComp from '../../components/SafeAreaViewComp'
import Header from '../../components/header'
import { shopStyles } from './styles'
import { categories } from '../../constants/strings'
import CategoriesList from '../../components/categoriesList'
import FilterHeader from '../../components/filterheader'
import { Colors } from '../../constants/colors'

const Shop = ({ navigation }: any) => {

  const [selectedCategory, setSelectedCategory] = useState<String | null>("")
  const [isGridView, setIsGridView] = useState<boolean>(true);

  const onGridPress = () => {
    setIsGridView(!isGridView);
  };


  return (
    <SafeAreaViewComp statusBarBg={"pink"}>
      <Header onBack={() => {
        navigation.goBack()
      }}
        onSearch={() => null}
      />
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
    </SafeAreaViewComp>
  )
}

export default Shop
