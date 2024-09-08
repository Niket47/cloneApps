import { StyleSheet, Text, View, Modal, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images } from '../../constants/images'
import ButtonPrimary from '../buttonPrimary'
import { normalize } from '../../utils/globalStyles'
import Icon from 'react-native-vector-icons/AntDesign';


interface PermissionModalProps {
    visible: Boolean | any,
    onRequestClose: () => void,
    onClose: () => void,
    onPressCamera: () => void,
    onPressGallery: () => void,
}


const PermissionModal = ({ visible, onRequestClose, onClose, onPressCamera, onPressGallery }: PermissionModalProps) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={onRequestClose}>
                <View style={styles.centeredView}>
                    <View style={[styles.container, {
                        // ...CommonStyles.darkBoxShadow,
                        position: "relative"
                    }]}>
                        <TouchableOpacity onPress={onClose} style={{
                            position: "absolute",
                            right: 25,
                            top: 15
                        }}>
                            <Icon name="close" size={25} color="#900" />
                            {/* <Image source={images.iconBack} style={{
                                width: 30, height: 30
                            }} /> */}
                        </TouchableOpacity>
                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <View style={styles.buttonsView}>
                                <ButtonPrimary title={"Camera"} onButtonPress={onPressCamera} />
                            </View>
                            <View style={styles.buttonsView}>
                                <ButtonPrimary title={"Gallery"} onButtonPress={onPressGallery} />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default PermissionModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonsView: {
        width: "48%",
    },
    container: {
        width: "90%",
        height: "20%",
        justifyContent: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: normalize(20)
    }
})