import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { colors, fonts } from '../theme';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ onFinish }) {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const loadAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Pulse the logo
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.05, duration: 1000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      ])
    ).start();

    // Loading bar
    Animated.timing(loadAnim, {
      toValue: 1,
      duration: 2200,
      useNativeDriver: false,
    }).start();

    // Fade out after 2.5s
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        onFinish && onFinish();
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const barWidth = loadAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Logo */}
      <Animated.View style={[styles.logoBox, { transform: [{ scale: pulseAnim }] }]}>
        <View style={styles.logoRect}>
          <Text style={styles.logoTextTop}>POWER</Text>
          <Text style={styles.logoTextBottom}>HOUSE</Text>
        </View>
      </Animated.View>

      {/* Text */}
      <View style={styles.textWrap}>
        <Text style={styles.splashName}>POWERHOUSE</Text>
        <Text style={styles.splashSub}>GYM RAMALLAH</Text>
      </View>

      {/* Loader */}
      <View style={styles.loaderTrack}>
        <Animated.View style={[styles.loaderBar, { width: barWidth }]} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.onyx,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  logoBox: {
    marginBottom: 16,
  },
  logoRect: {
    width: 80,
    height: 80,
    borderRadius: 18,
    backgroundColor: colors.crimson,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTextTop: {
    fontFamily: fonts.display,
    fontSize: 20,
    letterSpacing: 2,
    color: colors.bone,
    lineHeight: 22,
  },
  logoTextBottom: {
    fontFamily: fonts.display,
    fontSize: 20,
    letterSpacing: 2,
    color: colors.bone,
    lineHeight: 22,
  },
  textWrap: {
    alignItems: 'center',
    gap: 2,
  },
  splashName: {
    fontFamily: fonts.display,
    fontSize: 28,
    letterSpacing: 6,
    color: colors.bone,
  },
  splashSub: {
    fontFamily: fonts.condensed.semiBold,
    fontSize: 11,
    letterSpacing: 4,
    color: colors.ember,
  },
  loaderTrack: {
    width: 120,
    height: 3,
    backgroundColor: colors.steel,
    borderRadius: 2,
    marginTop: 24,
    overflow: 'hidden',
  },
  loaderBar: {
    height: '100%',
    backgroundColor: colors.crimson,
    borderRadius: 2,
  },
});
