import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SafeAreaViewComp from '../../../components/SafeAreaViewComp'
import { Colors } from '../../../constants/colors'

const Splash = ({ navigation }: any) => {
    const userData = useSelector((state: any) => state.userDataReducer?.userInfo)


    useEffect(() => {
        setTimeout(() => {
            if (userData?.isAuthenticated) {
                navigation.navigate("BottomTabs")
            } else {
                navigation.navigate("Login")
            }
        }, 2000);
    }, [navigation])



    return (
        <SafeAreaViewComp statusBarBg={Colors.white}>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Splash</Text>
            </View>
        </SafeAreaViewComp>
    )
}

export default Splash

const styles = StyleSheet.create({})