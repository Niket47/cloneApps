// CustomProgressBar.tsx
import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

interface CustomProgressBarProps {
    progress: number; // Progress as a decimal between 0 and 1
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ progress }) => {
    const animatedWidth = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(animatedWidth, {
            toValue: progress * 100,
            duration: 500, // Adjust the duration as needed
            useNativeDriver: false, // Use native driver for better performance
        }).start();
    }, [progress]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.progressBar,
                    { width: animatedWidth.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['0%', '100%'],
                    })},
                ]}
            />
            <Text style={styles.text}>{`Upload progress: ${Math.round(progress * 100)}%`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    progressBar: {
        height: 10,
        backgroundColor: '#4caf50', // Customize the progress bar color
        borderRadius: 5,
        width: '100%',
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: '#000', // Customize the text color
    },
});

export default CustomProgressBar;
