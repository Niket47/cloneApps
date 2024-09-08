
import { PermissionsAndroid, Platform } from 'react-native';
import {
    request,
    PERMISSIONS,
    RESULTS,
} from 'react-native-permissions';

const requestCameraPermission = async () => {
    if (Platform.OS === 'ios') {
        const result = await request(PERMISSIONS.IOS.CAMERA);
        if (result === RESULTS.GRANTED) {
            console.log('Camera permission granted');
            return true;
        } else {
            console.log('Camera permission denied');
            return false;
        }
    } else if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Camera Permission',
                message: 'We need access to your camera',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera permission granted');
            return true;
        } else {
            console.log('Camera permission denied');
            return false;
        }
    }
};

const requestGalleryPermission = async () => {
    if (Platform.OS === 'ios') {
        const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        if (result === RESULTS.GRANTED) {
            console.log('Photo library permission granted');
            return true;
        } else {
            console.log('Photo library permission denied');
            return false;
        }
    } else if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            {
                title: 'Gallery Permission',
                message: 'We need access to your gallery',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Gallery permission granted');
            return true;
        } else {
            console.log('Gallery permission denied');
            return false;
        }
    }
};

export { requestCameraPermission, requestGalleryPermission };


const requestWritePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Gallery Permission',
                message: 'We need access to your gallery',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn(err);
        return false;
    }
};

const requestReadPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: 'Gallery Permission',
                message: 'We need access to your gallery',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn(err);
        return false;
    }
};


// const requestStoragePermissions = async () => {
//     try {
//         const granted = await PermissionsAndroid.requestMultiple([
//             PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//             PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
//         ],
//             {
//                 title: 'Storage Permission',
//                 message: 'App needs access to your storage to read files.',
//                 buttonPositive: 'OK',
//             },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log('Storage permission granted', granted);
//         } else {
//             console.log('Storage permission denied', granted);
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// };



export const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
        const writeGranted = await requestWritePermission();
        const readGranted = await requestReadPermission();

        if (writeGranted && readGranted) {
            console.log('Storage permissions granted');
            return true;
        } else {
            console.log('Storage permissions denied');
            return false;
        }
    } else {
        // For platforms other than Android, we assume permissions are granted
        //   return true;
    }
};