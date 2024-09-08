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

const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [reTypePassword, setReTypePassword] = useState("")
    const [checked, setChecked] = useState(false);

    const [isErrors, setIsErrors] = useState({
        field: "",
        message: ""
    })

    const checkEmail = (e: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(e)
    }

    const isTerm = (e: any) => {
        console.log(e, "--")
    }

    const onSubmit = () => {
        let newErrors = {
            field: "",
            message: ""
        }

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

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
        } else {
            console.log("Form submitted successfully");
        }
    }


    return (
        <SafeAreaViewComp statusBarBg={Colors.white}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.select({ ios: 80, android: 500 })}
                style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>Login</Text>
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
                        </View>

                        <View style={styles.btnContainer}>
                            <ButtonPrimary title="Login" onButtonPress={onSubmit} />
                            <View style={[, {
                                justifyContent: "center",
                                paddingTop: 5,
                                flexDirection: "row",
                                alignItems: "center",
                            }]}>
                                <Text style={styles.toText}>Already have an account? </Text>
                                <Text onPress={() => {
                                    navigation.navigate("SignUp")
                                }} style={styles.toTextLogin}>SignUp</Text>
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

export default Login;