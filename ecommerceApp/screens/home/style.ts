import { StyleSheet } from "react-native";
import { Fonts, Fonts_Size } from "../../constants/fonts";
import { Colors } from "../../constants/colors";

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    buttons: {
        color: Colors.white,
        fontSize: Fonts_Size._16,
        fontFamily: Fonts.regular
    },
    buttonView: {
        width: 200,
        height: 50,
        backgroundColor: Colors.brandColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    titles: {
        color: Colors.white, fontSize: 50,
        fontFamily: Fonts.regular,
    },
    titleView: {
        position: "absolute",
        bottom: 40,
        left: 15
    }
})
