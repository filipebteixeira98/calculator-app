import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { CalculatorButton } from '../components/CalculatorButton';

export function CalculatorScreen() {
    const display = '0';
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.displayContainer}>
                <Text numberOfLines={1} adjustsFontSizeToFit style={styles.display}>
                    {display}
                </Text>
            </View>
            <View style={styles.keyboard}>
                <View style={styles.row}>
                    <CalculatorButton label="AC" variant='function' />
                    <CalculatorButton label="+/-" variant='function' />
                    <CalculatorButton label="%" variant='function' />
                    <CalculatorButton label="÷" variant='operator' />
                </View>
                <View style={styles.row}>
                    <CalculatorButton label="7" />
                    <CalculatorButton label="8" />
                    <CalculatorButton label="9" />
                    <CalculatorButton label="×" variant='operator' />
                </View>
                <View style={styles.row}>
                    <CalculatorButton label="4" />
                    <CalculatorButton label="5" />
                    <CalculatorButton label="6" />
                    <CalculatorButton label="-" variant='operator' />
                </View>
                <View style={styles.row}>
                    <CalculatorButton label="1" />
                    <CalculatorButton label="2" />
                    <CalculatorButton label="3" />
                    <CalculatorButton label="+" variant='operator' />
                </View>
                <View style={styles.row}>
                    <CalculatorButton label="0" wide />
                    <CalculatorButton label="." />
                    <CalculatorButton label="=" variant='operator' />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 14,
    },
    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 18,
    },
    display: {
        color: '#fff',
        fontSize: 78,
        fontWeight: '300',
    },
    keyboard: {
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})