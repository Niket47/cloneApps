import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigation from '../navigations'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../redux/store'
import { Provider } from 'react-redux'
import { RootSiblingParent } from 'react-native-root-siblings';


const ECommerceRoot = () => {

  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "#2ECC71" }}
        text1Style={{
          fontSize: 16,
          fontWeight: "400",
          alignItems: "center",
        }}
      />
    ),
    error: (props: any) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: "#ed2415" }}
        text1Style={{
          fontSize: 16,
          alignItems: "center",
        }}
      />
    ),
  };
  
  return (
    <View style={{ flex: 1 }}>
      <RootSiblingParent>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <RootNavigation />
          <Toast config={toastConfig} position="top" />
        </Provider>
      </PersistGate>
      </RootSiblingParent>
    </View>
  )
}

export default ECommerceRoot

const styles = StyleSheet.create({})