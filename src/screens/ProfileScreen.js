import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, fonts, borderRadius, spacing } from '../theme';
import ProfileMenuItem from '../components/ProfileMenuItem';

export default function ProfileScreen({ navigation }) {
  const stats = [
    { value: '127', label: 'Workouts' },
    { value: '18.5k', label: 'Calories' },
    { value: '42h', label: 'Total Time' },
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
        <Text style={styles.pageTitle}>PROFILE</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarLetter}>A</Text>
          </View>
          <Text style={styles.profileName}>AHMAD MANSOUR</Text>
          <Text style={styles.profileEmail}>ahmad@powerhouse.ps</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>ELITE MEMBER</Text>
          </View>
        </View>

        {/* Profile Stats */}
        <View style={styles.statsRow}>
          {stats.map((stat, i) => (
            <Pressable key={i} style={({ pressed }) => [
              styles.statItem,
              i < stats.length - 1 && styles.statBorder,
              pressed && styles.statPressed,
            ]}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </Pressable>
          ))}
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          <ProfileMenuItem icon="user" label="Edit Profile" />
          <ProfileMenuItem icon="shield" label="Membership" />
          <ProfileMenuItem icon="settings" label="Settings" />
          <ProfileMenuItem icon="bell" label="Notifications" />
          <ProfileMenuItem icon="log-out" label="Log Out" danger />
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
    paddingBottom: spacing.lg,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.crimson,
    marginBottom: 14,
    shadowColor: colors.crimson,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 12,
  },
  avatarLetter: {
    fontFamily: fonts.display,
    fontSize: 32,
    color: colors.bone,
  },
  profileName: {
    fontFamily: fonts.display,
    fontSize: 24,
    letterSpacing: 2,
    color: colors.bone,
  },
  profileEmail: {
    fontFamily: fonts.body.light,
    fontSize: 13,
    color: colors.bone50,
    marginTop: 4,
  },
  badge: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'rgba(244,162,60,0.3)',
    borderRadius: 99,
    backgroundColor: 'rgba(244,162,60,0.06)',
  },
  badgeText: {
    fontFamily: fonts.condensed.extraBold,
    fontSize: 10,
    letterSpacing: 2.5,
    color: colors.ember,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: colors.coal,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    marginBottom: 24,
  },
  statItem: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  statBorder: {
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  statPressed: {
    backgroundColor: colors.redSoft,
  },
  statValue: {
    fontFamily: fonts.display,
    fontSize: 24,
    color: colors.bone,
    lineHeight: 26,
  },
  statLabel: {
    fontFamily: fonts.condensed.bold,
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: colors.bone50,
    marginTop: 6,
  },
  menu: {},
});
