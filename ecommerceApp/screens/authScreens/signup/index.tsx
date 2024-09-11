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
import auth from '@react-native-firebase/auth';
import SafeAreaViewComp from '../../../components/SafeAreaViewComp';
import Loader from '../../../components/loader';
import showToast from '../../../components/showMessage';

const SignUp = ({ navigation }: any) => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [reTypePassword, setReTypePassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const [isErrors, setIsErrors] = useState({
        field: "",
        message: ""
    })

    const checkEmail = (e: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(e)
    }

    const signUpUser = async (email: string, password: string): Promise<void> => {
        setIsLoading(true)
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            console.log(userCredential,"---userCredential")
            setIsLoading(false)
            if (userCredential?.additionalUserInfo?.isNewUser) {
                showToast({
                    type: "success",
                    title: "success"
                })
            } else {
                showToast({
                    type: "error",
                    title: "error"
                })
            }
        } catch (error: any) {
            setIsLoading(false)
            showToast({
                type: "error",
                title: error?.code
            })
            if (error?.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            } else if (error?.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            } else {
                console.log('Error creating user:', error);
            }
        }
    };



    const onSubmit = async () => {
        console.log("object")
        // await signUpUser("james047@yopmail.com", "admin@123")
        await signUpUser("jamess04372@yopmail.com", "admin@123")

        return
        let newErrors = {
            field: "",
            message: ""
        }

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const trimmedReTypePassword = reTypePassword.trim();

        if (trimmedName.length < 3) {
            newErrors.field = "name";
            newErrors.message = "name should be at least 3 characters long.";
            setIsErrors(newErrors);
        } else if (!checkEmail(trimmedEmail)) {
            newErrors.field = "email";
            newErrors.message = "Check email. It is not valid.";
            setIsErrors(newErrors);
        } else if (trimmedPassword.length < 7) {
            newErrors.field = "password";
            newErrors.message = "Check password. It should be at least 7 characters long.";
            setIsErrors(newErrors);
        } else if (trimmedPassword !== trimmedReTypePassword) {
            newErrors.field = "reTypePassword";
            newErrors.message = "Check reTypePassword. Passwords do not match.";
            setIsErrors(newErrors);
        } else {
            console.log("Form submitted successfully");
            signUpUser("james047@yopmail.com", "admin@123")
        }
    }


    return (
        <SafeAreaViewComp statusBarBg={Colors.white}>
            {isLoading && <Loader />}
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.select({ ios: 80, android: 500 })}
                style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>Sign Up</Text>
                        <View>
                            <View>
                                <Input
                                    label={"Name"}
                                    onChangeText={(t) => {
                                        setName(t);
                                        isErrors.field == "name" && setIsErrors("")
                                    }}
                                    value={name}
                                // isError={isErrors.field == "name"}
                                />
                                <View style={styles.errorFiled}>
                                    {isErrors.field == "name" && <Text style={styles.errorText}>{isErrors.message}</Text>}
                                </View>
                            </View>
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
                                <Input label={"Password"}
                                    onChangeText={(t) => {
                                        setPassword(t);
                                        isErrors.field == "password" && setIsErrors("")
                                    }}
                                    value={password}
                                // isError={isErrors.field == "password"}
                                />
                                <View style={styles.errorFiled}>
                                    {isErrors.field == "password" && <Text style={styles.errorText}>{isErrors.message}</Text>}
                                </View>
                            </View>
                            <View>
                                <Input label={"Retype-Password"}
                                    onChangeText={(t) => {
                                        setReTypePassword(t);
                                        isErrors.field == "reTypePassword" && setIsErrors("")
                                    }}
                                    value={reTypePassword}
                                // isError={isErrors.field == "reTypePassword"}
                                />
                                <View style={styles.errorFiled}>
                                    {isErrors.field == "reTypePassword" && <Text style={styles.errorText}>{isErrors.message}</Text>}
                                </View>
                            </View>
                            {/* <View style={[, {
                            width: "100%",
                            alignItems: 'center',
                            paddingLeft: 5,

                        }]}>
                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                paddingLeft: 10
                            }}>
                                <Text style={}>By signing up, you agree to the </Text>
                                <Text style={[, {
                                    color: Colors.brandBlue500
                                }]}>Terms of Service and Privacy Policy</Text>
                            </View>
                        </View> */}
                        </View>

                        <View style={styles.btnContainer}>
                            <ButtonPrimary title="Sign Up" onButtonPress={onSubmit} />
                            <View style={[, {
                                justifyContent: "center",
                                paddingTop: 5,
                                flexDirection: "row",
                                alignItems: "center",
                            }]}>
                                <Text style={styles.toText}>Already have an account? </Text>
                                <Text onPress={() => {
                                    navigation.navigate("Login")
                                }} style={styles.toTextLogin}>Login</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
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
        paddingTop: 55,
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
        // marginTop: 12,
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
    }
});

export default SignUp;