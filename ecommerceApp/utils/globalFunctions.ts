
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const getData = async (key: string): Promise<string | null> => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value; // Return the stored value
        }
        return null; // Return null if value is not found
    } catch (e) {
        console.error("Error reading value:", e);
        return null; // Ensure we return null in case of an error
    }
};
export const storeData = async (key: string, value: string): Promise<void> => {
    console.log(key, value, "--key, value")
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        // saving error
        console.log(e, "saving error")
    }
};

export const getObjectData = async (key: string): Promise<object | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        return null;
    }
};

export const storeObjectData = async (key: string, value: object): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // saving error
        // return null;
    }
};

import { launchCamera, launchImageLibrary, ImageLibraryOptions, CameraOptions, Asset } from 'react-native-image-picker';

export const handleImagePicker = (type: 'camera' | 'gallery'): Promise<string> => {
    return new Promise((resolve, reject) => {
        const options: CameraOptions | ImageLibraryOptions = {
            mediaType: 'photo',
            quality: 0.5,
            // includeBase64: true, // Uncomment if you want base64 data
        };

        const handleResponse = (response: { assets?: Asset[]; didCancel?: boolean; errorCode?: string; errorMessage?: string }) => {
            // console.log(response, "---response")
            if (response.didCancel) {
                console.log('User cancelled image picker');
                reject('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
                reject(response.errorMessage);
            } else if (response.assets && response.assets[0]) {
                const fileData = response.assets[0].uri?.split('/').pop() || '';
                const uri = response.assets[0]
                resolve(uri);
            } else {
                reject('No image data found');
            }
        };

        if (type === 'camera') {
            launchCamera(options, handleResponse);
        } else {
            launchImageLibrary(options, handleResponse);
        }
    });
};



// export const formateDate = (value) => {
//     const date = new Date(value);
//     const result = date.toLocaleString()
//     const toFormat = moment(date).format("DD MMM, h:mm")
//     return toFormat
// }

// export const handleImagePicker = (type) => {
//     return new Promise((resolve, reject) => {
//         const options = {
//             mediaType: 'photo',
//             quality: 0.5,
//             // includeBase64: true,
//         };

//         if (type === 'camera') {
//             launchCamera(options, (response) => {
//                 if (response.didCancel) {
//                     console.log('User cancelled image picker');
//                     reject('User cancelled image picker');
//                 } else if (response.errorCode) {
//                     console.log('ImagePicker Error: ', response.errorMessage);
//                     reject(response.errorMessage);
//                 } else {
//                     const fileData = response.assets[0].uri.split('/').pop();
//                     // const fileData = response.assets[0].base64;

//                     resolve(fileData);
//                 }
//             });
//         } else {
//             launchImageLibrary(options, (response) => {
//                 if (response.didCancel) {
//                     console.log('User cancelled image picker');
//                     reject('User cancelled image picker');
//                 } else if (response.errorCode) {
//                     console.log('ImagePicker Error: ', response.errorMessage);
//                     reject(response.errorMessage);
//                 } else {
//                     const fileData = response.assets[0].uri.split('/').pop();
//                     // const fileData = response.assets[0].base64;

//                     resolve(fileData);
//                 }
//             });
//         }
//     });
// };
