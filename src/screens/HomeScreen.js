import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { colors } from '../styles/colors';

export function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Calculator</Text>
                <Text style={styles.subtitle}>A simple calculator with interface inspired by iOS</Text>
                <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={() => navigation.navigate('Calculator')}>
                    <Text style={styles.buttonText}>Open calculator</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.button, styles.secondaryButton, pressed && styles.pressed]} onPress={() => navigation.navigate('Converter')}>
                    <Text style={styles.buttonText}>Open converter</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    title: {
        color: colors.text,
        fontSize: 42,
        fontWeight: '700',
        marginBottom: 12,
    },
    subtitle: {
        color: colors.secondaryText,
        fontSize: 18,
        lineHeight: 26,
        marginBottom: 32,
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.operatorButton,
        borderRadius: 16,
        paddingVertical: 16,
    },
    secondaryButton: {
        marginTop: 12,
    },
    buttonText: {
        color: colors.functionText,
        fontSize: 17,
        fontWeight: '700',
    },
})