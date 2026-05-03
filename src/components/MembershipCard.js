import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, fonts, borderRadius } from '../theme';

export default function MembershipCard({ tier = 'ELITE', price = '₪249', daysRemaining = 18, totalDays = 30 }) {
  const progress = (daysRemaining / totalDays) * 100;

  return (
    <View style={styles.card}>
      {/* Gradient glow */}
      <LinearGradient
        colors={['rgba(227,27,35,0.18)', 'transparent']}
        style={styles.glow}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      />

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.top}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{tier}</Text>
          </View>
          <Text style={styles.price}>
            {price}<Text style={styles.priceSub}>/mo</Text>
          </Text>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressLabel}>
            <Text style={styles.progressText}>Days remaining</Text>
            <Text style={styles.progressText}>{daysRemaining} / {totalDays}</Text>
          </View>
          <View style={styles.progressBar}>
            <LinearGradient
              colors={[colors.crimson, colors.crimsonHot]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.progressFill, { width: `${progress}%` }]}
            />
          </View>
        </View>

        <Pressable style={({ pressed }) => [
          styles.btn,
          pressed && styles.btnPressed,
        ]}>
          <LinearGradient
            colors={['rgba(255,255,255,0.14)', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.btnShine}
          />
          <Text style={styles.btnText}>RENEW MEMBERSHIP</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.xxl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(227,27,35,0.3)',
    padding: 24,
    position: 'relative',
  },
  glow: {
    position: 'absolute',
    top: -60,
    right: -40,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(244,162,60,0.3)',
    borderRadius: 99,
    backgroundColor: 'rgba(244,162,60,0.08)',
  },
  badgeText: {
    fontFamily: fonts.condensed.extraBold,
    fontSize: 11,
    letterSpacing: 3,
    color: colors.ember,
  },
  price: {
    fontFamily: fonts.display,
    fontSize: 32,
    color: colors.bone,
  },
  priceSub: {
    fontSize: 14,
    color: colors.bone50,
  },
  progressSection: {
    marginBottom: 16,
  },
  progressLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressText: {
    fontFamily: fonts.body.regular,
    fontSize: 12,
    color: colors.bone50,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.steel,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  btn: {
    backgroundColor: colors.crimson,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  btnPressed: {
    backgroundColor: colors.crimsonHot,
    transform: [{ scale: 0.97 }],
  },
  btnShine: {
    ...StyleSheet.absoluteFillObject,
  },
  btnText: {
    fontFamily: fonts.condensed.extraBold,
    fontSize: 13,
    letterSpacing: 1.5,
    color: colors.bone,
  },
});
