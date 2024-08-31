import { NativeModules, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { Colors } from '../../constants/colors';


const SafeAreaViewComp = ({ children, statusBarBg, barStyles, bgColor }: any) => {
    const insets = useSafeAreaInsets();

    function FocusAwareStatusBar(props: any) {
        const isFocused = useIsFocused();
        return isFocused ? <StatusBar {...props} /> : null;
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: bgColor ? bgColor : Colors.white,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <FocusAwareStatusBar barStyle={barStyles ? barStyles : "dark-content"}
                backgroundColor={statusBarBg ? statusBarBg : Colors.brandColor}
            />
            {children}
        </SafeAreaView>
    )
}

export default SafeAreaViewComp

const styles = StyleSheet.create({})
