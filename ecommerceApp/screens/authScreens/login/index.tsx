import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import Input from '../../../components/input';
import ButtonPrimary from '../../../components/buttonPrimary';
import { Colors } from '../../../constants/colors';
import { Fonts, Fonts_Size } from '../../../constants/fonts';
import { normalize } from '../../../utils/globalStyles';
import SafeAreaViewComp from '../../../components/SafeAreaViewComp';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../../redux/reducers/userDataReducer';
import showToast from '../../../components/showMessage';
import Loader from '../../../components/loader';


const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const userData = useSelector((state: any) => state.userDataReducer?.userInfo)

    const [isErrors, setIsErrors] = useState<object | any>({
        field: "",
        message: ""
    })

    const checkEmail = (e: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(e)
    }

    console.log(userData, "---userData")

    const signInUser = async (email: string, password: string): Promise<object | any> => {
        setLoading(true)
        try {
            const userCredential: object | any = await auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            setLoading(false)
            // console.log('User signed in:', userCredential);
            if (!userCredential.additionalUserInfo.isNewUser) {
                showToast({
                    title: "login success",
                    type: "success"
                })
                const payload = {
                    email: userCredential.user.email,
                    userId: userCredential.user.uid,
                    isAuthenticated: true
                }
                dispatch(setUserData(payload))
                navigation.navigate("BottomTabs")
            } else {
                showToast({
                    title: "check email and password",
                    type: "info"
                })
            }
        } catch (error: any) {
            setLoading(false)
            showToast({
                title: error.code,
                type: "error"
            })
            if (error.code === 'auth/user-not-found') {
                console.log('User not found');
            } else if (error.code === 'auth/wrong-password') {
                console.log('Wrong password provided');
            } else {
                console.error('Error signing in:', error.message);
            }
            throw error; // Throw the error to handle it further if needed
        }
    };


    const onSubmit = async () => {
        await signInUser("jamess04372@yopmail.com", "admin@123")
        return
        let newErrors = {
            field: "",
            message: ""
        }

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (!checkEmail(trimmedEmail)) {
            newErrors.field = "email";
            newErrors.message = "Check email. It is not valid.";
            setIsErrors(newErrors);
        } else if (trimmedPassword.length < 7) {
            newErrors.field = "password";
            newErrors.message = "Check password. It should be at least 7 characters long.";
            setIsErrors(newErrors);
        } else {
            console.log("Form submitted successfully");
        }
    }



    return (
        <SafeAreaViewComp statusBarBg={Colors.white}>
            {
                loading && <Loader />
            }
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Login</Text>
                    <View>
                        <View>
                            <Input label={"Email"}
                                onChangeText={(t) => {
                                    setEmail(t);
                                    isErrors.field == "email" && setIsErrors("")
                                }}
                                value={email}
                            // isError={isErrors.field == "email"}
                            />
                            <View style={styles.errorFiled}>
                                {isErrors.field == "email" && <Text style={styles.errorText}>{isErrors.message}</Text>}
                            </View>
                        </View>
                        <View>
                            <Input
                                label={"Password"}
                                onChangeText={(t) => {
                                    setPassword(t);
                                    isErrors.field == "password" && setIsErrors("")
                                }}
                                value={password}
                            // isError={isErrors.field == "password"}
                            // isPasswordFiled={true}
                            // secureTextEntry={passwordVisible}
                            // onPressSecureText={isPasswordVisible}
                            />
                            <View style={styles.errorFiled}>
                                {isErrors.field == "password" && <Text style={styles.errorText}>{isErrors.message}</Text>}
                            </View>
                        </View>

                        <View style={styles.btnContainer}>
                            <ButtonPrimary title="Login" onButtonPress={onSubmit} />
                        </View>
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: normalize(20)
                        }}>
                            <Text onPress={() => {
                                navigation.navigate("ForgotPassword")
                            }} style={styles.textForgot}>Forgot Password?</Text>
                        </View>
                        <View>
                            <View style={[, {
                                justifyContent: "center",
                                paddingTop: 25,
                                flexDirection: "row",
                                alignItems: "center",
                            }]}>
                                <Text style={styles.toText}>Don’t have an account yet? </Text>
                                <Text onPress={() => {
                                    navigation.navigate("SignUp")
                                }} style={styles.toTextLogin}>Sign Up</Text>
                            </View>
                        </View>
                    </View>
                    <View />
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaViewComp>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    inner: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 40,
        paddingHorizontal: 15,
    },
    header: {
        fontSize: Fonts_Size._25,
        fontFamily: Fonts.regularMedium,
        textAlign: "center",
        paddingTop: 45,
        color: Colors.black
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        paddingTop: 25,
    },
    errorFiled: {
        height: normalize(16),
        paddingLeft: 5
    },
    errorText: {
        color: Colors.red400,
        fontSize: Fonts_Size._14,
        fontFamily: Fonts.regular,
    },
    toText: {
        color: Colors.textLite,
        fontSize: Fonts_Size._15,
        fontFamily: Fonts.regular,
    },
    toTextLogin: {
        color: Colors.brandBlue500,
        fontSize: Fonts_Size._15,
        fontFamily: Fonts.regularMedium,
    },
    textForgot: {
        color: Colors.brandBlue500,
        fontSize: Fonts_Size._15,
        fontFamily: Fonts.regularMedium,
    }
});

export default Login;