import React from 'react';
import { ScrollView, StyleSheet, View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts, borderRadius, spacing } from '../theme';
import ProgramCard from '../components/ProgramCard';

export default function ProgramsScreen({ navigation }) {
  const programs = [
    {
      num: '01',
      iconKey: 'strength',
      title: 'STRENGTH & POWER',
      description: 'Progressive overload. Compound lifts. Measurable gains. Built for lifters who want real strength.',
      tags: ['BARBELLS', 'POWERLIFTING'],
    },
    {
      num: '02',
      iconKey: 'crossfit',
      title: 'CROSSFIT & HIIT',
      description: 'Functional fitness at high intensity. Cardio meets resistance in daily WODs that test everything.',
      tags: ['WOD', 'CONDITIONING', 'ENDURANCE'],
      featured: true,
    },
    {
      num: '03',
      iconKey: 'boxing',
      title: 'BOXING & MMA',
      description: 'Striking, grappling, and self-defense. Train combat sports with certified fighters and coaches.',
      tags: ['BOXING', 'KICKBOXING'],
    },
    {
      num: '04',
      iconKey: 'personal',
      title: 'PERSONAL TRAINING',
      description: '1-on-1 with dedicated coaches. Custom plans built for your body, goals, and timeline.',
      tags: ['1-ON-1', 'CUSTOM PLAN'],
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          style={({ pressed }) => [styles.backBtn, pressed && styles.backBtnPressed]}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} color={colors.bone} />
        </Pressable>
        <Text style={styles.pageTitle}>PROGRAMS</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
      >
        {programs.map((p, i) => (
          <ProgramCard key={i} {...p} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onyx,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: 12,
    backgroundColor: 'rgba(10,10,13,0.85)',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    backgroundColor: colors.bone04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnPressed: {
    backgroundColor: colors.bone08,
  },
  pageTitle: {
    fontFamily: fonts.display,
    fontSize: 22,
    letterSpacing: 2,
    color: colors.bone,
  },
  body: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
});
