import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, fonts, borderRadius } from '../theme';

export default function StatCard({ icon, value, label, accent = false, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        accent && styles.cardAccent,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.coal,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  cardAccent: {
    borderColor: 'rgba(227,27,35,0.3)',
  },
  pressed: {
    transform: [{ scale: 0.96 }],
  },
  icon: {
    fontSize: 20,
    marginBottom: 6,
  },
  value: {
    fontFamily: fonts.display,
    fontSize: 26,
    letterSpacing: 1,
    lineHeight: 28,
    color: colors.bone,
  },
  label: {
    fontFamily: fonts.condensed.bold,
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: colors.bone50,
    marginTop: 4,
  },
});
