import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, fonts, borderRadius } from '../theme';

const ICONS = {
  'strength': 'bar-chart-2',
  'crossfit': 'zap',
  'boxing': 'smile',
  'personal': 'user-plus',
};

export default function ProgramCard({ num, iconKey, title, description, tags = [], featured = false }) {
  const iconName = ICONS[iconKey] || 'activity';

  return (
    <Pressable style={({ pressed }) => [
      styles.card,
      featured && styles.cardFeatured,
      pressed && styles.pressed,
    ]}>
      <Text style={styles.num}>{num}</Text>
      <View style={styles.iconBox}>
        <Feather name={iconName} size={24} color={colors.crimson} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      <View style={styles.tags}>
        {tags.map((tag, i) => (
          <View key={i} style={[styles.tag, featured && styles.tagFeatured]}>
            <Text style={[styles.tagText, featured && styles.tagTextFeatured]}>{tag}</Text>
          </View>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.coal,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xxl,
    padding: 24,
    paddingHorizontal: 20,
    marginBottom: 14,
    overflow: 'hidden',
  },
  cardFeatured: {
    borderColor: 'rgba(227,27,35,0.25)',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  num: {
    fontFamily: fonts.display,
    fontSize: 14,
    letterSpacing: 3,
    color: colors.bone30,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.redSoft,
    borderWidth: 1,
    borderColor: 'rgba(227,27,35,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 26,
    color: colors.bone,
  },
  desc: {
    fontFamily: fonts.body.light,
    fontSize: 13,
    lineHeight: 21,
    color: colors.bone50,
    marginTop: 10,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 16,
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.sm,
  },
  tagFeatured: {
    borderColor: 'rgba(227,27,35,0.3)',
  },
  tagText: {
    fontFamily: fonts.condensed.bold,
    fontSize: 10,
    letterSpacing: 1.5,
    color: colors.bone50,
  },
  tagTextFeatured: {
    color: colors.crimson,
  },
});
