import React from "react"
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'

const Loader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sub}>
                <ActivityIndicator
                    size="large"
                    color="#3c5468"
                    style={{ zIndex: 100 }}
                />
                <Text style={styles.txt}>{"Loading"}</Text>
            </View>
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        zIndex: 9999,
    },
    sub: {
        width: 120,
        height: 110,
        borderRadius: 6,
        backgroundColor: "#DCDCDC",
        zIndex: 999,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        elevation: 3,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    txt: {
        fontSize: 15,
        fontWeight: "400",
        fontFamily: "Arial",
        textAlign: "center",
        padding: 5,
        marginVertical: 5,
    },
});