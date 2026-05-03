import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, fonts, borderRadius } from '../theme';

export default function ProfileMenuItem({ icon, label, danger = false, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.item,
        pressed && styles.pressed,
      ]}
    >
      <View style={[styles.iconBox, danger && styles.iconBoxDanger]}>
        <Feather
          name={icon}
          size={18}
          color={danger ? colors.danger : colors.crimson}
        />
      </View>
      <Text style={[styles.label, danger && styles.labelDanger]}>{label}</Text>
      <Feather name="chevron-right" size={16} color={colors.bone30} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: colors.coal,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    marginBottom: 4,
  },
  pressed: {
    backgroundColor: colors.bone04,
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: borderRadius.md,
    backgroundColor: colors.redSoft,
    borderWidth: 1,
    borderColor: 'rgba(227,27,35,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxDanger: {
    backgroundColor: 'rgba(239,68,68,0.1)',
    borderColor: 'rgba(239,68,68,0.25)',
  },
  label: {
    flex: 1,
    fontFamily: fonts.body.regular,
    fontSize: 14,
    color: colors.bone,
  },
  labelDanger: {
    color: colors.danger,
  },
});
