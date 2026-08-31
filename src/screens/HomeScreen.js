import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Calculator</Text>
                <Text style={styles.subtitle}>A simple calculator with interface inspired by iOS</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Calculator')}>
                    <Text style={styles.buttonText}>Open calculator</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    title: {
        color: '#fff',
        fontSize: 42,
        fontWeight: '700',
        marginBottom: 12,
    },
    subtitle: {
        color: '#b5b5b5',
        fontSize: 18,
        lineHeight: 26,
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#ff9f0a',
        borderRadius: 16,
        paddingVertical: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700',
    },
})