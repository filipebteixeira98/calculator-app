import { SafeAreaView, StyleSheet, Text, View, useState } from 'react-native';

import { CalculatorButton } from '../components/CalculatorButton';

export function CalculatorScreen() {
    const [display, setDisplay] = useState('0');
    const [storedValue, setStoredValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

    function handleInputNumber(value) {
        if (shouldResetDisplay) {
            setDisplay(value);
            setShouldResetDisplay(false);
            return;
        }

        setDisplay((current) => (current === '0' ? value : current + value))
    }
    
    function handleInputDecimal() {
        if (shouldResetDisplay) {
            setDisplay('0.');
            setShouldResetDisplay(false);
            return;
        }

        if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    }
    
    function handleClearDisplay() {
        setDisplay('0');
        setStoredValue(null);
        setOperator(null);
        setShouldResetDisplay(false);
    }
    
    function handleToggleSign() {
        setDisplay((current) => current.startsWith('-') ? current.slice(1) : `-${current}`);
    }

    function handlePercentage() {
        setDisplay((current) => String(parseFloat(current) / 100));
    }

    function handleCalculate(firstValue, secondValue, currentOperator) {
        switch(currentOperator) {
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
            case '×':
                return firstValue * secondValue;
            case '÷':
                return secondValue === 0 ? 'Error' : firstValue / secondValue;
            default:
                return secondValue;
        }
    }

    function handleChooseOperator(nextOperator) {
        const currentValue = parseFloat(display);

        if (operator && storedValue !== null && !shouldResetDisplay) {
            const result = calculate(storedValue, currentValue, operator);

            setDisplay(String(result));
            setStoredValue(typeof result === 'number' ? result : null);
        } else {
            setStoredValue(currentValue);
        }

        setOperator(nextOperator);
        setShouldResetDisplay(true);
    }

    function handleResolveCalculation() {
        if (!operator || storedValue === null) {
            return;
        }

        const result = calculate(storedValue, parseFloat(display), operator);

        setDisplay(String(result));
        setStoredValue(null);
        setOperator(null);
        setShouldResetDisplay(true);
    }
    
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