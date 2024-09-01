import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Fonts, Fonts_Size } from "../../constants/fonts";

export const shopStyles = StyleSheet.create({
    title: {
        color: Colors.black,
        fontSize: Fonts_Size._24,
        fontFamily: Fonts.regular
    },
    boxShadowTitle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: Colors.white
    },
    container: {
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        borderColor: Colors.gray,
    }
})
