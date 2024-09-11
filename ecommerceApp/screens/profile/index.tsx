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
import axios from 'axios'
import { API_URL } from "@env"
import uuid from 'react-native-uuid';
import ProductForm from '../../components/productForm'
import showToast from '../../components/showMessage'


const Profile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const postDataToFirebase = async (payload: any) => {
    try {
      setIsLoading(true)
      const response = await axios.post(
        `${API_URL}/products.json`,
        payload
      );
      setIsLoading(false)
      if (response.data) {
        showToast({
          title: "Data successfully posted",
          type: "success"
        })
      }
      console.log('Data successfully posted:', response.data);
    } catch (error) {
      setIsLoading(false)
      showToast({
        title: "Error posting data",
        type: "error"
      })
      console.error('Error posting data:', error);
    }
  };



  return (
    <SafeAreaViewComp bgColor={Colors.white} statusBarBg={Colors.white}>
      <View style={{
        paddingHorizontal: 15
      }}>
        <ProductForm onSubmit={postDataToFirebase} />

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