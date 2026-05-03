import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, fonts, borderRadius } from '../theme';

export default function ClassCard({ hour, ampm, name, coach, spots, spotsColor = '🟢', level, featured = false, badge }) {
  return (
    <Pressable style={({ pressed }) => [
      styles.card,
      featured && styles.cardFeatured,
      pressed && styles.pressed,
    ]}>
      {badge && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
      <View style={styles.timeCol}>
        <Text style={styles.hour}>{hour}</Text>
        <Text style={styles.ampm}>{ampm}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.coach}>{coach}</Text>
        <View style={styles.meta}>
          <Text style={styles.spots}>{spotsColor} {spots}</Text>
          <Text style={styles.level}>{level}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: colors.coal,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    padding: 16,
    position: 'relative',
  },
  cardFeatured: {
    borderColor: 'rgba(227,27,35,0.3)',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  badgeContainer: {
    position: 'absolute',
    top: -8,
    right: 16,
    backgroundColor: colors.crimson,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 99,
    shadowColor: colors.crimson,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  badgeText: {
    fontFamily: fonts.condensed.extraBold,
    fontSize: 9,
    letterSpacing: 2,
    color: colors.bone,
  },
  timeCol: {
    alignItems: 'center',
    minWidth: 50,
    justifyContent: 'center',
  },
  hour: {
    fontFamily: fonts.display,
    fontSize: 22,
    color: colors.crimson,
    lineHeight: 24,
  },
  ampm: {
    fontFamily: fonts.condensed.bold,
    fontSize: 10,
    color: colors.bone50,
    letterSpacing: 1,
  },
  info: {
    flex: 1,
  },
  name: {
    fontFamily: fonts.display,
    fontSize: 16,
    letterSpacing: 1.5,
    color: colors.bone,
    lineHeight: 18,
  },
  coach: {
    fontFamily: fonts.body.light,
    fontSize: 12,
    color: colors.bone50,
    marginTop: 4,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  spots: {
    fontFamily: fonts.condensed.bold,
    fontSize: 10,
    letterSpacing: 1,
    color: colors.bone50,
  },
  level: {
    fontFamily: fonts.condensed.bold,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: colors.ember,
  },
});
