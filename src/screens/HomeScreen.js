import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../styles/colors';

const converterPreviewItems = [
  {
    id: 'distance',
    title: 'Distance',
    description: 'Kilometers to meters',
  },
  {
    id: 'time',
    title: 'Time',
    description: 'Minutes and hours',
  },
  {
    id: 'currency',
    title: 'Currency',
    description: 'Dollar and Euro to Real',
  },
];

export function HomeScreen({ navigation }) {
  function handleOpenCalculator() {
    navigation.navigate('Calculator');
  }

  function handleOpenConverter() {
    navigation.navigate('Converter');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Old But Gold</Text>
          <Text style={styles.title}>Calculator</Text>
          <Text style={styles.subtitle}>
            Fast tools for calculations and everyday unit conversions.
          </Text>
        </View>
        <Pressable
          onPress={handleOpenCalculator}
          style={({ pressed }) => [
            styles.featuredButton,
            pressed && styles.pressed,
          ]}
        >
          <View>
            <Text style={styles.featuredTitle}>Standard Calculator</Text>
            <Text style={styles.featuredDescription}>
              Basic operations with an iOS-inspired interface.
            </Text>
            <Text style={styles.featuredAction}>Open</Text>
          </View>
        </Pressable>
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Converters</Text>
            <Text style={styles.sectionSubtitle}>
              Choose a quick conversion tool.
            </Text>
          </View>
          <Pressable
            onPress={handleOpenConverter}
            style={({ pressed }) => [
              styles.sectionAction,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.sectionActionText}>View all</Text>
          </Pressable>
        </View>
        <View style={styles.previewList}>
          {converterPreviewItems.map((item) => (
            <Pressable
              key={item.id}
              onPress={handleOpenConverter}
              style={({ pressed }) => [
                styles.previewCard,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.previewTitle}>{item.title}</Text>
              <Text style={styles.previewDescription}>{item.description}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 28,
  },
  eyebrow: {
    color: colors.operatorButton,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 44,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.secondaryText,
    fontSize: 18,
    lineHeight: 26,
  },
  featuredButton: {
    alignItems: 'center',
    backgroundColor: colors.operatorButton,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  featuredTitle: {
    color: colors.functionText,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  featuredDescription: {
    color: colors.functionText,
    fontSize: 15,
    lineHeight: 21,
    maxWidth: 220,
    opacity: 0.8,
  },
  featuredAction: {
    color: colors.functionText,
    fontSize: 16,
    fontWeight: '700',
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '700',
  },
  sectionSubtitle: {
    color: colors.secondaryText,
    fontSize: 15,
    marginTop: 4,
  },
  sectionAction: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  sectionActionText: {
    color: colors.operatorButton,
    fontSize: 14,
    fontWeight: '700',
  },
  previewList: {
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  previewTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  previewDescription: {
    color: colors.secondaryText,
    fontSize: 15,
    lineHeight: 21,
  },
  pressed: {
    opacity: 0.65,
  },
});
