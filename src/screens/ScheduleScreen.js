import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, fonts, borderRadius, spacing } from '../theme';
import ScheduleItem from '../components/ScheduleItem';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const SCHEDULE_DATA = [
  { time: '06:00', duration: '60 min', name: 'CrossFit HIIT', coach: 'Coach Omar', spots: '4 spots', level: 'Advanced' },
  { time: '08:30', duration: '45 min', name: 'Strength Basics', coach: 'Coach Layla', spots: '8 spots', level: 'Beginner' },
  { time: '10:00', duration: '60 min', name: 'Yoga & Recovery', coach: 'Coach Nadia', spots: '12 spots', level: 'All Levels', featured: true },
  { time: '17:00', duration: '90 min', name: 'Boxing', coach: 'Coach Khaled', spots: '2 spots', level: 'Intermediate' },
  { time: '19:00', duration: '75 min', name: 'Power Lifting', coach: 'Coach Omar', spots: '6 spots', level: 'Advanced' },
];

export default function ScheduleScreen({ navigation }) {
  const [activeDay, setActiveDay] = useState(1); // Tue

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
        <Text style={styles.pageTitle}>SCHEDULE</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
      >
        {/* Day Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dayTabs}
        >
          {DAYS.map((day, i) => (
            <Pressable
              key={day}
              onPress={() => setActiveDay(i)}
              style={[styles.dayTab, activeDay === i && styles.dayTabActive]}
            >
              <Text style={[styles.dayTabText, activeDay === i && styles.dayTabTextActive]}>
                {day}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Schedule List */}
        <View style={styles.scheduleList}>
          {SCHEDULE_DATA.map((item, i) => (
            <ScheduleItem key={i} {...item} />
          ))}
        </View>
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
  dayTabs: {
    gap: 6,
    paddingBottom: 20,
  },
  dayTab: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    borderRadius: 11,
  },
  dayTabActive: {
    backgroundColor: colors.crimson,
    borderColor: colors.crimson,
  },
  dayTabText: {
    fontFamily: fonts.condensed.bold,
    fontSize: 13,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: colors.bone50,
  },
  dayTabTextActive: {
    color: colors.bone,
  },
  scheduleList: {
    gap: 10,
  },
});
