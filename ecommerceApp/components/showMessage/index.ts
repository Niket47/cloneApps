import Toast from "react-native-toast-message";

interface showToastProps {
  type: String | any,
  title: String | any
}

const showToast = ({ type, title }: showToastProps) => {
  Toast.show({
    type: type,
    text1: title,
  });
};

export default showToast;