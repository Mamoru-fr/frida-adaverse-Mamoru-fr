/**
 * Color Palette for AdaVerse
 * Centralized color definitions for consistent theming across the application
 */

export const Colors = {
  // Background Colors
  background: {
    light: 'bg-white',
    dark: 'bg-neutral-950',
    card: {
      light: 'bg-neutral-100',
      dark: 'bg-neutral-900',
    },
    cardAlt: {
      light: 'bg-neutral-200',
      dark: 'bg-neutral-800',
    },
    hover: {
      light: 'hover:bg-neutral-100',
      dark: 'hover:bg-neutral-800',
    },
  },

  // Text Colors
  text: {
    primary: {
      light: 'text-neutral-900',
      dark: 'text-white',
    },
    secondary: {
      light: 'text-neutral-600',
      dark: 'text-neutral-400',
    },
    tertiary: {
      light: 'text-neutral-500',
      dark: 'text-neutral-400',
    },
    inverse: {
      light: 'text-white',
      dark: 'text-black',
    },
  },

  // Border Colors
  border: {
    default: {
      light: 'border-neutral-200',
      dark: 'border-neutral-800',
    },
    card: {
      light: 'border-neutral-300',
      dark: 'border-white/10',
    },
    subtle: {
      light: 'border-neutral-200',
      dark: 'border-neutral-700',
    },
  },

  // Button Colors
  button: {
    primary: {
      bg: {
        light: 'bg-neutral-900',
        dark: 'bg-white',
      },
      text: {
        light: 'text-white',
        dark: 'text-black',
      },
      hover: {
        light: 'hover:bg-neutral-800',
        dark: 'hover:bg-neutral-200',
      },
    },
    secondary: {
      bg: {
        light: 'bg-neutral-200',
        dark: 'bg-neutral-800',
      },
      text: {
        light: 'text-black',
        dark: 'text-white',
      },
      hover: {
        light: 'hover:bg-neutral-300',
        dark: 'hover:bg-neutral-700',
      },
    },
  },

  // Navigation Colors
  nav: {
    bg: {
      light: 'bg-white/95',
      dark: 'bg-neutral-900/95',
    },
    border: {
      light: 'border-neutral-200',
      dark: 'border-neutral-800',
    },
  },

  // Badge/Tag Colors
  badge: {
    bg: {
      light: 'bg-neutral-100',
      dark: 'bg-neutral-800',
    },
    text: {
      light: 'text-neutral-700',
      dark: 'text-neutral-300',
    },
    border: {
      light: 'border-neutral-300',
      dark: 'border-white/10',
    },
  },

  // Error Colors
  error: {
    bg: {
      light: 'bg-red-100',
      dark: 'bg-red-900/20',
    },
    text: {
      light: 'text-red-700',
      dark: 'text-red-400',
    },
    border: {
      light: 'border-red-300',
      dark: 'border-red-800',
    },
  },

  // Icon Colors
  icon: {
    default: {
      light: 'text-neutral-400',
      dark: 'text-neutral-700',
    },
    active: {
      light: 'text-neutral-800',
      dark: 'text-neutral-200',
    },
  },
} as const;

/**
 * Helper function to combine light and dark mode classes
 * @param lightClass - Tailwind class for light mode
 * @param darkClass - Tailwind class for dark mode
 * @returns Combined class string with dark: variant
 */
export function colorClass(lightClass: string, darkClass: string): string {
  return `${lightClass} dark:${darkClass}`;
}

/**
 * Pre-combined color classes for common use cases
 */
export const CombinedColors = {
  background: {
    main: colorClass(Colors.background.light, Colors.background.dark),
    card: colorClass(Colors.background.card.light, Colors.background.card.dark),
    cardAlt: colorClass(Colors.background.cardAlt.light, Colors.background.cardAlt.dark),
  },
  text: {
    primary: colorClass(Colors.text.primary.light, Colors.text.primary.dark),
    secondary: colorClass(Colors.text.secondary.light, Colors.text.secondary.dark),
    inverse: colorClass(Colors.text.inverse.light, Colors.text.inverse.dark),
  },
  border: {
    default: colorClass(Colors.border.default.light, Colors.border.default.dark),
    card: colorClass(Colors.border.card.light, Colors.border.card.dark),
  },
  button: {
    primary: {
      bg: colorClass(Colors.button.primary.bg.light, Colors.button.primary.bg.dark),
      text: colorClass(Colors.button.primary.text.light, Colors.button.primary.text.dark),
      hover: colorClass(Colors.button.primary.hover.light, Colors.button.primary.hover.dark),
    },
    secondary: {
      bg: colorClass(Colors.button.secondary.bg.light, Colors.button.secondary.bg.dark),
      text: colorClass(Colors.button.secondary.text.light, Colors.button.secondary.text.dark),
      hover: colorClass(Colors.button.secondary.hover.light, Colors.button.secondary.hover.dark),
    },
  },
  nav: {
    bg: colorClass(Colors.nav.bg.light, Colors.nav.bg.dark),
    border: colorClass(Colors.nav.border.light, Colors.nav.border.dark),
  },
  badge: {
    bg: colorClass(Colors.badge.bg.light, Colors.badge.bg.dark),
    text: colorClass(Colors.badge.text.light, Colors.badge.text.dark),
    border: colorClass(Colors.badge.border.light, Colors.badge.border.dark),
  },
  error: {
    bg: colorClass(Colors.error.bg.light, Colors.error.bg.dark),
    text: colorClass(Colors.error.text.light, Colors.error.text.dark),
  },
  icon: {
    default: colorClass(Colors.icon.default.light, Colors.icon.default.dark),
    active: colorClass(Colors.icon.active.light, Colors.icon.active.dark),
  },
};
