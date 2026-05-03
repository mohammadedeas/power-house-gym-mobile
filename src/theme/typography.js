// ═══ POWERHOUSE GYM — TYPOGRAPHY SYSTEM ═══

export const fonts = {
  display: 'BebasNeue_400Regular',
  condensed: {
    light: 'BarlowCondensed_300Light',
    regular: 'BarlowCondensed_400Regular',
    medium: 'BarlowCondensed_500Medium',
    semiBold: 'BarlowCondensed_600SemiBold',
    bold: 'BarlowCondensed_700Bold',
    extraBold: 'BarlowCondensed_800ExtraBold',
    black: 'BarlowCondensed_900Black',
  },
  body: {
    light: 'Inter_300Light',
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semiBold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
};

// Pre-built text style presets
export const textStyles = {
  displayLg: {
    fontFamily: fonts.display,
    fontSize: 32,
    letterSpacing: 2,
    lineHeight: 36,
  },
  displayMd: {
    fontFamily: fonts.display,
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 28,
  },
  displaySm: {
    fontFamily: fonts.display,
    fontSize: 20,
    letterSpacing: 2,
    lineHeight: 24,
  },
  displayXs: {
    fontFamily: fonts.display,
    fontSize: 16,
    letterSpacing: 1.5,
    lineHeight: 20,
  },
  condensedLabel: {
    fontFamily: fonts.condensed.bold,
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  condensedTag: {
    fontFamily: fonts.condensed.bold,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  bodyMd: {
    fontFamily: fonts.body.regular,
    fontSize: 14,
    lineHeight: 20,
  },
  bodySm: {
    fontFamily: fonts.body.light,
    fontSize: 13,
    lineHeight: 18,
  },
  bodyXs: {
    fontFamily: fonts.body.light,
    fontSize: 12,
    lineHeight: 16,
  },
};
