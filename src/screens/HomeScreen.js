import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts, borderRadius, spacing } from '../theme';
import StatCard from '../components/StatCard';
import ClassCard from '../components/ClassCard';
import MembershipCard from '../components/MembershipCard';

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  const quickActions = [
    { icon: 'bar-chart-2', label: 'Programs', page: 'Programs', color: colors.crimson, bgColor: colors.redSoft, borderColor: 'rgba(227,27,35,0.25)' },
    { icon: 'calendar', label: 'Schedule', page: 'Schedule', color: colors.ember, bgColor: 'rgba(244,162,60,0.1)', borderColor: 'rgba(244,162,60,0.25)' },
    { icon: 'user', label: 'Profile', page: 'Profile', color: colors.green, bgColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.25)' },
    { icon: 'flag', label: 'Goals', color: colors.purple, bgColor: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.25)' },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <LinearGradient
        colors={['rgba(227,27,35,0.12)', 'transparent']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.greeting}>
            <Text style={styles.greetingHi}>Welcome back,</Text>
            <Text style={styles.greetingName}>Ahmad 💪</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarLetter}>A</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.stats}>
          <StatCard icon="🔥" value="1,245" label="Calories" />
          <StatCard icon="🏋️" value="18" label="Workouts" accent />
          <StatCard icon="⏱️" value="42h" label="This Month" />
        </View>
      </LinearGradient>

      {/* Body */}
      <View style={styles.body}>
        {/* Quick Actions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>QUICK START</Text>
        </View>
        <View style={styles.quickActions}>
          {quickActions.map((action, i) => (
            <Pressable
              key={i}
              style={({ pressed }) => [styles.quickBtn, pressed && styles.quickBtnPressed]}
              onPress={() => action.page && navigation.navigate(action.page)}
            >
              <View style={[styles.quickIcon, { backgroundColor: action.bgColor, borderColor: action.borderColor }]}>
                <Feather name={action.icon} size={20} color={action.color} />
              </View>
              <Text style={styles.quickLabel}>{action.label}</Text>
            </Pressable>
          ))}
        </View>

        {/* Today's Classes */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>TODAY'S CLASSES</Text>
          <Pressable onPress={() => navigation.navigate('Schedule')}>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </Pressable>
        </View>
        <View style={styles.classCards}>
          <ClassCard
            hour="06:00" ampm="AM"
            name="CROSSFIT HIIT" coach="Coach Omar"
            spots="4 spots left" spotsColor="🟢" level="Advanced"
          />
          <ClassCard
            hour="08:30" ampm="AM"
            name="STRENGTH BASICS" coach="Coach Layla"
            spots="8 spots left" spotsColor="🟢" level="Beginner"
          />
          <ClassCard
            hour="05:00" ampm="PM"
            name="BOXING" coach="Coach Khaled"
            spots="2 spots left" spotsColor="🟡" level="All Levels"
            featured badge="POPULAR"
          />
        </View>

        {/* Membership */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>YOUR MEMBERSHIP</Text>
        </View>
        <MembershipCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onyx,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {},
  greetingHi: {
    fontFamily: fonts.body.light,
    fontSize: 14,
    color: colors.bone50,
  },
  greetingName: {
    fontFamily: fonts.display,
    fontSize: 28,
    letterSpacing: 1,
    color: colors.bone,
    marginTop: 2,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.crimson,
    shadowColor: colors.crimson,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  avatarLetter: {
    fontFamily: fonts.display,
    fontSize: 20,
    color: colors.bone,
  },
  stats: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
    paddingBottom: 20,
  },
  body: {
    paddingHorizontal: spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 14,
  },
  sectionTitle: {
    fontFamily: fonts.display,
    fontSize: 20,
    letterSpacing: 2,
    color: colors.bone,
  },
  seeAll: {
    fontFamily: fonts.condensed.bold,
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: colors.crimson,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 10,
  },
  quickBtn: {
    flex: 1,
    backgroundColor: colors.coal,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    gap: 8,
  },
  quickBtnPressed: {
    transform: [{ scale: 0.94 }],
    borderColor: colors.crimson,
  },
  quickIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickLabel: {
    fontFamily: fonts.condensed.semiBold,
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.bone,
  },
  classCards: {
    gap: 10,
  },
});
