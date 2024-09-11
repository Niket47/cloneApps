import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonPrimary from '../buttonPrimary'
import uuid from 'react-native-uuid';
import { Fonts, Fonts_Size } from '../../constants/fonts'
import { Colors } from '../../constants/colors'
import ImageUploadView from '../imageUploadView'
import { data } from '../../constants/strings'
import showMessage from '../showMessages'
import storage from '@react-native-firebase/storage';
import CustomProgressBar from '../progressBar'

interface ProductFormProps {
    onSubmit: (data: object | null) => void;
}

const ProductForm = ({ onSubmit }: ProductFormProps) => {
    const randomId = uuid.v4();
    const [name, setName] = useState<string | null>("")
    const [description, setDescription] = useState<string | null>("")
    const [category, setCategory] = useState<String | null>("")
    const [price, setPrice] = useState<string | null>("")
    const [stock, setStock] = useState<string | null>("")
    const [discount, setDiscount] = useState<string | null>("")

    const [uploading, setUploading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    const [downloadUrl, setDownloadUrl] = useState<any[]>([])
    const [uploadedImages, setUploadedImages] = useState<any[]>([]);

    // console.log(uploadedImages, "---uploadedImages")

    const uploadImage = async (imageUri: any) => {
        if (!imageUri) return;

        const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
        const storageRef = storage().ref(`images/${fileName}`);

        const uploadTask = storageRef.putFile(imageUri);

        // Monitor the upload task
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress); // Update progress state
        });

        // Wait for the upload to complete
        try {
            setUploading(true);
            await uploadTask;
            const url: any = await storageRef.getDownloadURL(); // Get the download URL
            setDownloadUrl(url);
            console.log('Download URL: ', url);
        } catch (error) {
            console.error('Error uploading image: ', error);
            setUploading(false);
        }
    };

    const handleMultipleImageUpload = async (images: any) => {
        const promises = images.map((imageUri: any) => uploadImage(imageUri));
        await Promise.all(promises);
    };

    const onButtonPress = async () => {
        if (!name && !description && !category && !price
            && !stock && !discount && uploadedImages.length < 3) {
            // showMessage("All filed is required", false)
            showMessage({
                title: "All filed is required",
                type: "error"
            })
        } else {

            await handleMultipleImageUpload(uploadedImages);

            const payload = {
                "id": randomId,
                "category": category,
                "createdAt": new Date(),
                "description": description,
                "mainImage": uploadedImages[0],
                "name": name,
                "price": price,
                "stock": stock,
                "discount": discount,
                "rating": 4.5,
                "subImages": downloadUrl
            }

            onSubmit(payload)
        }
    }



    return (
        <View>
            {uploading && <CustomProgressBar progress={progress} />}
            <KeyboardAwareScrollView>
                <View style={styles.productContainer}>
                    <Text style={styles.titleText}>Enter product details</Text>
                </View>
                <View style={{
                    marginVertical: 5
                }}>
                    <Input
                        value={name}
                        label={"name"}
                        onChangeText={(t) => setName(t)}
                    />
                </View>
                <View style={{
                    marginVertical: 5
                }}>
                    <Input
                        value={description}
                        label={"description"}
                        onChangeText={(t) => setDescription(t)}
                    />
                </View>
                <View style={{
                    marginVertical: 5
                }}>
                    <Input
                        value={category}
                        label={"category"}
                        onChangeText={(t) => setCategory(t)}
                    />
                </View>
                <View style={{
                    marginVertical: 5
                }}>
                    <Input
                        value={price}
                        label={"price"}
                        onChangeText={(t) => setPrice(t)}
                    />
                </View>
                <View style={{
                    marginVertical: 5
                }}>
                    <Input
                        value={stock}
                        label={"stock"}
                        onChangeText={(t) => setStock(t)}
                    />
                </View>
                <View style={{
                    marginVertical: 5
                }}>
                    <Input
                        value={discount}
                        label={"discount"}
                        onChangeText={(t) => setDiscount(t)}
                    />
                </View>

                <View style={{}}>
                    <ImageUploadView
                        ImagesData={(data: any) => setUploadedImages(data)}
                    />
                </View>

                <View style={{
                    marginTop: 20
                }}>
                    <ButtonPrimary
                        title={"Submit"}
                        onButtonPress={onButtonPress}
                    />
                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}

export default ProductForm

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