import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaViewComp from '../../components/SafeAreaViewComp'
import Header from '../../components/header'
import { shopStyles } from './styles'
import { categories, data, Product } from '../../constants/strings'
import CategoriesList from '../../components/categoriesList'
import FilterHeader from '../../components/filterheader'
import { Colors } from '../../constants/colors'
import { images } from '../../constants/images'
import { normalize } from '../../utils/globalStyles'


const { width, height } = Dimensions.get("window")


const Shop = ({ navigation }: any) => {

  const [selectedCategory, setSelectedCategory] = useState<String | null>("")
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const [isGrid, setIsGrid] = useState(false);

  const onGridPress = () => {
    setIsGridView(!isGridView);
    setIsGrid(!isGrid)
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <View style={styles.starsContainer}>
        {[...Array(fullStars)].map((_, index) => (
          <Image key={`full-${index}`} resizeMode='contain' source={images.iconStarYellow} style={styles.star} />
        ))}
        {hasHalfStar && (
          <Image key="half" resizeMode='contain' source={images.iconStar} style={styles.star} />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <Image key={`empty-${index}`} resizeMode='contain' source={images.iconStar} style={styles.star} />
        ))}
      </View>
    );
  };

  const renderItem = ({ item }: { item: Product }) => {
    return isGrid ? (
      <TouchableOpacity style={[styles.itemContainerRow]}>
        <View style={{
          flexDirection: "row",
          flex: 1
        }}>
          <View style={{
            width: "30%",
            paddingRight: 10
          }}>
            <Image source={item.imageUrl} style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5
            }} />
          </View>
          <View style={{
            width: "70%",
            paddingVertical: 5
          }}>
            <View>
              {renderStars(item?.rating)}
            </View>
            <View style={{
              flex: 1,
              justifyContent: "space-evenly",
              flexDirection: "column",
            }}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.itemContainerGrid}>
        <View style={styles.gridContainer}>
          <View >
            <Image source={item.imageUrl}
              style={{
                width: "100%",
                height: height / 3.5,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5
              }} />
          </View>
          <View>
            {renderStars(item?.rating)}
          </View>
          <View style={{
            flex: 1,
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }


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
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={renderItem}
        key={isGrid ? 'row' : 'grid'}
        keyExtractor={(_, index) => `${index}`}
        numColumns={isGrid ? 1 : 2}
        ListFooterComponent={() => {
          return (
            <View style={{ paddingBottom: 100 }} />
          )
        }}
      />
    </SafeAreaViewComp>
  )
}

export default Shop

const styles = StyleSheet.create({
  itemContainerGrid: {
    backgroundColor: 'pink',
    borderRadius: 5,
    flex: 0.5,
    margin: 5,
  },
  itemContainerRow: {
    backgroundColor: 'pink',
    borderRadius: 5,
    flex: 1,
    margin: 5,
    height: normalize(100)
  },
  gridContainer: {
    flex: 1,
    paddingBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5
  },
  rating: {
    fontSize: 14,
    color: '#444',
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
})

