// import Toast from 'react-native-root-toast';
// // import Color from './color';
// // import fontFamily from './fontFamily';

// import { Colors } from "../../constants/colors";
// import { Fonts } from "../../constants/fonts";

// const showMessage = (message: string, isError = false) => {
//     Toast.show(message, {
//         duration: Toast.durations.SHORT,
//         // position: isCenter ? Toast.positions.CENTER : Toast.positions.BOTTOM,
//         position: Toast.positions.CENTER,
//         shadow: true,
//         animation: true,
//         hideOnPress: true,
//         delay: 0,
//         backgroundColor: isError ? Colors.red400 : Colors.textLite,
//         textColor: isError ? Colors.white : Colors.white,
//         textStyle: { fontFamily: Fonts.regularMedium },
//         containerStyle: {
//             width: "93%",
//             backgroundColor: Colors.white,
//             marginBottom: 60
//         }
//     });
// };

// export default showMessage;

// // showMessage("Something went wrong! please try again")


import Toast from 'react-native-root-toast';
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

interface ToastOptions {
    title: string;
    type?: 'success' | 'error' | 'info';
    duration?: number;
}

const showMessage = ({ title, type = 'info' }: ToastOptions) => {
    let isColor;
    let bgColor;

    switch (type) {
        case 'success':
            bgColor = Colors.green400;
            isColor = Colors.black;
            break;
        case 'error':
            bgColor = Colors.red400;
            isColor = Colors.white;
            break;
        case 'info':
        default:
            bgColor = Colors.blue400;
            isColor = Colors.white;
            break;
    }

    Toast.show(title, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: bgColor,
        textColor: isColor,
        textStyle: { fontFamily: Fonts.regularMedium },
        containerStyle: {
            width: "100%",
            backgroundColor: Colors.white,
            marginBottom: 60
        }
    });
};

export default showMessage;



