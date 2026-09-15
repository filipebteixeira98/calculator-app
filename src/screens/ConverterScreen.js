import { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

import { colors } from '../styles/colors';

const conversionOptions = [
    {
        id: 'kilometers-to-meters',
        label: 'Kilometers to meters',
        sourceUnit: 'km',
        targetUnit: 'm',
        conversionRate: 1000,
    },
    {
        id: 'minutes-to-seconds',
        label: 'Minutes to seconds',
        sourceUnit: 'min',
        targetUnit: 's',
        conversionRate: 60,
    },
    {
        id: 'hours-to-minutes',
        label: 'Hours to minutes',
        sourceUnit: 'h',
        targetUnit: 'min',
        conversionRate: 60,
    },
    {
        id: 'dollar-to-real',
        label: 'Dollar to Real',
        sourceUnit: 'USD',
        targetUnit: 'BRL',
        conversionRate: 5.14,
    },
    {
        id: 'euro-to-real',
        label: 'Euro to Real',
        sourceUnit: 'EUR',
        targetUnit: 'BRL',
        conversionRate: 5.92,
    },
    {
        id: 'meters-to-centimeters',
        label: 'Meters to centimeters',
        sourceUnit: 'm',
        targetUnit: 'cm',
        conversionRate: 100,
    },
    {
        id: 'kilograms-to-grams',
        label: 'Kilograms to grams',
        sourceUnit: 'kg',
        targetUnit: 'g',
        conversionRate: 1000,
    }
]

function parseInputValue(value) {
    const normalizedValue = value.replace(',','.');
    
    return Number(normalizedValue);
}

function formatConversionResult(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

export function ConverterScreen() {
    const [inputValue, setInputValue] = useState('');
    const [selectedConversion, setSelectedConversion] = useState(conversionOptions[0]);

    const numericValue = useMemo(() => parseInputValue(inputValue), [inputValue]);
    
    const hasValidInput = inputValue.trim() !== '' && !Number.isNaN(numericValue);
    
    const conversionResult = hasValidInput ? numericValue * selectedConversion.conversionRate : null;

    function handleClearInput() {
        setInputValue('');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
                <View style={styles.header}>
                    <Text style={styles.title}>Conversion Calculator</Text>
                    <Text style={styles.subtitle}>Type a value and choose one conversion option.</Text>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Value</Text>
                    <TextInput
                        value={inputValue}
                        onChangeText={setInputValue}
                        keyboardType='decimal-pad'
                        placeholder='Enter a number'
                        placeholderTextColor={colors.secondaryText}
                        style={styles.input}
                    />
                </View>
                <View style={styles.optionsContainer}>
                    <Text style={styles.label}>Conversion</Text>
                    {conversionOptions.map((conversionOption) => {
                        const isSelected = conversionOption.id === selectedConversion.id;

                        return (
                            <Pressable key={conversionOption.id} onPress={() => setSelectedConversion(conversionOption)} style={({ pressed }) => [styles.optionButton, isSelected && styles.selectedOptionButton, pressed && styles.pressed]}>
                                <View>
                                    <Text style={[styles.optionLabel,isSelected && styles.selectedOptionLabel]}>
                                        {conversionOption.label}
                                    </Text>
                                    <Text style={[styles.optionDescription, isSelected && styles.selectedOptionDescription]}>
                                        {conversionOption.sourceUnit} to {conversionOption.targetUnit}
                                    </Text>
                                </View>
                            </Pressable>
                        );
                    })}
                </View>
                <View style={styles.resultContainer}>
                    <Text style={styles.resultLabel}>Result</Text>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={styles.resultValue}>{conversionResult === null ? '0' : formatConversionResult(conversionResult)}</Text>
                    <Text style={styles.resultUnit}>{selectedConversion.targetUnit}</Text>
                </View>
                <Pressable onPress={handleClearInput} style={({ pressed }) => [styles.clearButton, pressed && styles.pressed]}>
                    <Text style={styles.clearButton}>Clear</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 32,
    },
    header: {
        marginBottom: 28,
    },
    title: {
        color: colors.text,
        fontSize: 34,
        fontWeight: '700',
        marginBottom: 8,
    },
    subtitle: {
        color: colors.secondaryText,
        fontSize: 17,
        lineHeight: 24,
    },
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        color: colors.secondaryText,
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 10,
    },
    input: {
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderRadius: 16,
        borderWidth: 1,
        color: colors.text,
        fontSize: 24,
        paddingHorizontal: 18,
        paddingVertical: 14,
    },
    optionsContainer: {
        marginBottom: 24,
    },
    optionButton: {
        backgroundColor: colors.numberButton,
        borderRadius: 16,
        marginBottom: 10,
        paddingHorizontal: 18,
        paddingVertical: 14,
    },
    selectedOptionButton: {
        backgroundColor: colors.operatorButton,
    },
    optionLabel: {
        color: colors.text,
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 4,
    },
    selectedOptionLabel: {
        color: colors.functionText,
    },
    optionDescription: {
        color: colors.secondaryText,
        fontSize: 14,
    },
    selectedOptionDescription: {
        color: colors.functionText,
    },
    resultContainer: {
        alignItems: 'flex-end',
        borderTopColor: colors.border,
        borderTopWidth: 1,
        marginBottom: 20,
        paddingTop: 24,
    },
    resultLabel: {
        color: colors.secondaryText,
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 8,
    },
    resultValue: {
        color: colors.displayText,
        fontSize: 58,
        fontWeight: '300',
    },
    resultUnit: {
        color: colors.operatorButton,
        fontSize: 20,
        fontWeight: '700',
        marginTop: 4,
    },
    clearButton: {
        alignItems: 'center',
        backgroundColor: colors.functionButton,
        borderRadius: 16,
        paddingVertical: 16,
    },
    clearButtonText: {
        color: colors.functionText,
        fontSize: 17,
        fontWeight: '700',
    },
    pressed: {
        opacity: 0.65,
    },
});