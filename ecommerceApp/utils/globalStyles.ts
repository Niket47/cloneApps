import { Platform, PixelRatio, Dimensions, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("screen").width;

const scale = SCREEN_WIDTH / 320;

export const normalize = (size: any) => {
    const newSize = size * scale;
    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
};