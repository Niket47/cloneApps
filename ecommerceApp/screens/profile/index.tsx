import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaViewComp from '../../components/SafeAreaViewComp'
import { normalize } from '../../utils/globalStyles'
import { Fonts, Fonts_Size } from '../../constants/fonts'
import Input from '../../components/input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonPrimary from '../../components/buttonPrimary'
import ImageUploadView from '../../components/imageUploadView'
import { Colors } from '../../constants/colors'


const Profile = () => {

  const [name, setName] = useState<string | null>("")
  const [description, setDescription] = useState<string | null>("")
  const [category, setCategory] = useState<String | null>("")
  const [price, setPrice] = useState<string | null>("")
  const [stock, setStock] = useState<string | null>("")
  const [discount, setDiscount] = useState<string | null>("")


  return (
    <SafeAreaViewComp bgColor={Colors.white} statusBarBg={Colors.white}>
      <View style={{
        paddingHorizontal: 15
      }}>
        <KeyboardAwareScrollView>
          <View style={styles.productContainer}>
            <Text style={styles.titleText}>Enter product details</Text>
          </View>
          <View style={{
            marginVertical: 5
          }}>
            <Input
              value={name}
              label={"name"}
              onChangeText={(t) => setName(t)}
            />
          </View>
          <View style={{
            marginVertical: 5
          }}>
            <Input
              value={description}
              label={"description"}
              onChangeText={(t) => setDescription(t)}
            />
          </View>
          <View style={{
            marginVertical: 5
          }}>
            <Input
              value={category}
              label={"category"}
              onChangeText={(t) => setCategory(t)}
            />
          </View>
          <View style={{
            marginVertical: 5
          }}>
            <Input
              value={price}
              label={"price"}
              onChangeText={(t) => setPrice(t)}
            />
          </View>
          <View style={{
            marginVertical: 5
          }}>
            <Input
              value={stock}
              label={"stock"}
              onChangeText={(t) => setStock(t)}
            />
          </View>
          <View style={{
            marginVertical: 5
          }}>
            <Input
              value={discount}
              label={"discount"}
              onChangeText={(t) => setDiscount(t)}
            />
          </View>

          <View style={{}}>
            <ImageUploadView />
          </View>




          <View style={{
            marginTop: 20
          }}>
            <ButtonPrimary
              title={"Submit"}
              onButtonPress={() => null}
            />
          </View>

        </KeyboardAwareScrollView>
      </View>
    </SafeAreaViewComp>
  )
}

export default Profile

const styles = StyleSheet.create({
  productContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  titleText: {
    fontSize: Fonts_Size._16,
    fontFamily: Fonts.regularMedium,
    color: Colors.black
  }
})