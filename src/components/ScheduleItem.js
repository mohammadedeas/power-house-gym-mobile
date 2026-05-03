import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { colors, fonts, borderRadius } from '../theme';

export default function ScheduleItem({ time, duration, name, coach, spots, level, featured = false }) {
  const [booked, setBooked] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleBook = () => {
    setBooked(true);
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 0.5, duration: 200, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start(() => setBooked(false));
    }, 1800);
  };

  return (
    <Pressable style={({ pressed }) => [
      styles.item,
      featured && styles.itemFeatured,
      pressed && styles.pressed,
    ]}>
      <View style={styles.timeCol}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.dur}>{duration}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.coach}>{coach}</Text>
        <View style={styles.bottom}>
          <Text style={styles.spots}>{spots}</Text>
          <Text style={styles.level}>{level}</Text>
        </View>
      </View>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Pressable
          onPress={handleBook}
          style={({ pressed }) => [
            styles.bookBtn,
            booked && styles.bookBtnActive,
            pressed && !booked && styles.bookBtnPressed,
          ]}
        >
          <Text style={[styles.bookText, booked && styles.bookTextActive]}>
            {booked ? 'Booked ✓' : 'Book'}
          </Text>
        </Pressable>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: colors.coal,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    padding: 16,
  },
  itemFeatured: {
    borderColor: 'rgba(244,162,60,0.3)',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  timeCol: {
    alignItems: 'center',
    minWidth: 50,
  },
  time: {
    fontFamily: fonts.display,
    fontSize: 20,
    color: colors.crimson,
    letterSpacing: 1,
    lineHeight: 22,
  },
  dur: {
    fontFamily: fonts.condensed.regular,
    fontSize: 10,
    color: colors.bone30,
    letterSpacing: 1,
    marginTop: 4,
  },
  content: {
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
    fontSize: 11,
    color: colors.bone50,
    marginTop: 4,
  },
  bottom: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
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
    color: colors.ember,
  },
  bookBtn: {
    backgroundColor: colors.bone04,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: borderRadius.md,
  },
  bookBtnActive: {
    backgroundColor: colors.crimson,
    borderColor: colors.crimson,
  },
  bookBtnPressed: {
    backgroundColor: colors.crimson,
    borderColor: colors.crimson,
  },
  bookText: {
    fontFamily: fonts.condensed.extraBold,
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: colors.bone,
  },
  bookTextActive: {
    color: colors.bone,
  },
});
