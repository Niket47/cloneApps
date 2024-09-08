import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import PermissionModal from '../permissionModal'
import { handleImagePicker } from '../../utils/globalFunctions'
import { requestCameraPermission, requestGalleryPermission } from '../../utils/placeCalls'
import { normalize } from '../../utils/globalStyles'
import { Fonts, Fonts_Size } from '../../constants/fonts'
import { images } from '../../constants/images'
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../constants/colors'




const ImageUploadView = () => {

    const [isType, setIsType] = useState<String | null>("camera")
    const [isVisible, setIsVisible] = useState<Boolean>(false)

    const [imageUriList, setImageUriList] = useState<any | null>([])

    const [imagesList, setImagesList] = useState<any | null>([])

    // console.log(imagesList, "--imagesList")


    const pickImage = async (type: 'camera' | 'gallery'): Promise<void> => {
        let permissionGranted: boolean | any = false;

        if (type === 'camera') {
            permissionGranted = await requestCameraPermission();
        } else if (type === 'gallery') {
            permissionGranted = await requestGalleryPermission();
        }
        if (permissionGranted) {
            try {
                const pickedImage = await handleImagePicker(type);
                const imageUri = pickedImage?.uri?.split('/').pop() || '';
                const localUri = pickedImage?.uri
                setImagesList((p: any) => [...p, localUri])
            } catch (error) {
                console.log('Error picking image:', error);
            }
        } else {
            console.log(`Permission not granted for ${type}`);
        }
    };


    const onDeleteImage = (ind: any) => {
        const temp = imagesList.filter((item: any) => item == ind)
        setImagesList(temp)
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.mainCont}>
                <View>
                    <Text style={styles.label}>ImageUploadView</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setIsVisible(true)
                }} style={{
                    padding: 5
                }}>
                    <Image source={images.iconBag} style={{
                        width: 25, height: 25
                    }} />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps={"handled"} horizontal style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: "row", marginHorizontal: 5, alignItems: "center" }}>
                        {
                            imagesList?.map((item: any, index: any) => {
                                return (
                                    <View key={index} style={{ flex: 1 }}>
                                        <View style={styles.imageView}>
                                            <Image source={{ uri: `${item}` }}
                                                style={{
                                                    width: "100%", height: "100%"
                                                }} />
                                        </View>
                                        <TouchableOpacity onPress={() => {
                                            onDeleteImage(index)
                                        }} style={styles.deleteButton}>
                                            <Icon name="delete" size={25} color="#900" />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>



            <PermissionModal
                visible={isVisible}
                onRequestClose={() => setIsVisible(false)}
                onClose={() => setIsVisible(false)}
                onPressCamera={() => pickImage("camera")}
                onPressGallery={() => pickImage("gallery")}
            />
        </View>
    )
}

export default ImageUploadView

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F9F9F9",
        height: normalize(100),
        width: "100%",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#9B9B9B",
    },
    label: {
        fontSize: Fonts_Size._14,
        fontFamily: Fonts.regular,
        paddingBottom: 5,
        color:Colors.black
    },
    imageView: {
        backgroundColor: "pink",
        width: 130,
        height: 110,
        marginRight: 5,
        position: "relative"
    },
    deleteButton: {
        position: "absolute",
        top: 0,
        right: 5,
        zIndex: 100,
        padding: 5,
        backgroundColor: "#fff",
        borderRadius: 50
    },
    mainCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    }
})