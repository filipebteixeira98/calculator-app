import { Pressable, StyleSheet, Text } from "react-native";

export function CalculatorButton({
    label,
    onPress,
    variant = 'number',
    wide = false
}) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                styles[variant],
                wide && styles.wide,
                pressed && styles.pressed,
            ]}
        >
            <Text style={[styles.text, variant === 'function' && styles.functionText]}>
                {label}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 76,
        height: 76,
        borderRadius: 38,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
    wide: {
        width: 164,
        alignItems: 'flex-start',
        paddingLeft: 30,
    },
    number: {
        backgroundColor: '#333',
    },
    operator: {
        backgroundColor: '#ff9f0a',
    },
    function: {
        backgroundColor: '#a5a5a5',
    },
    pressed: {
        opacity: 0.65,
    },
    text: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '500',
    },
    functionText: {
        color: '#000',
    },
})