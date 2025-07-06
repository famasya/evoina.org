
// Define the structure of our translation files
export interface Translations {
  navigation: {
    about: string;
    programs: string;
    committee_chairs: string;
    resources: string;
    archives: string;
  };
  buttons: {
    join_us: string;
    register_member: string;
    contribute_dbspesies: string;
    read_more: string;
    read_all_news: string;
    what_we_do: string;
    back_to_archives: string;
  };
  labels: {
    latest_news: string;
    research_activities: string;
    follow_social: string;
    member_benefits: string;
    dbspesies_project: string;
  };
  common: {
    prev: string;
    next: string;
    or: string;
    copyright: string;
  };
  homepage: {
    welcome_title: string;
    welcome_description: string;
    join_community_title: string;
    join_community_description: string;
    about_title: string;
    programme_title: string;
    title: string;
  };
  benefits: {
    exclusive_resources: string;
    priority_registration: string;
    networking: string;
    contribute_biodiversity: string;
    share_research: string;
    collaborate: string;
  };
  meta: {
    site_description: string;
    site_title: string;
  };
}

// Supported locales
export const SUPPORTED_LOCALES = ['en', 'id'] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];
export const DEFAULT_LOCALE: SupportedLocale = 'en';

// Cache for loaded translations
const translationCache = new Map<SupportedLocale, Translations>();

/**
 * Load translations for a specific locale
 */
export async function loadTranslations(locale: SupportedLocale): Promise<Translations> {
  // Check cache first
  if (translationCache.has(locale)) {
    return translationCache.get(locale)!;
  }

  try {
    // Dynamically import the translation file with explicit paths
    let translations;
    if (locale === 'en') {
      translations = await import('./en.json');
    } else if (locale === 'id') {
      translations = await import('./id.json');
    } else {
      throw new Error(`Unsupported locale: ${locale}`);
    }

    const translationData = translations.default as Translations;

    // Cache the translations
    translationCache.set(locale, translationData);

    return translationData;
  } catch (error) {
    console.warn(`Failed to load translations for locale "${locale}". Falling back to default locale.`);

    // Fallback to default locale if the requested locale fails
    if (locale !== DEFAULT_LOCALE) {
      return loadTranslations(DEFAULT_LOCALE);
    }

    // If even the default locale fails, throw an error
    throw new Error(`Failed to load translations for default locale "${DEFAULT_LOCALE}"`);
  }
}

/**
 * Get the current locale from the URL
 */
export function getLocaleFromUrl(url: URL): SupportedLocale {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);

  // Check if the first segment is a supported locale
  if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as SupportedLocale)) {
    return segments[0] as SupportedLocale;
  }

  return DEFAULT_LOCALE;
}

/**
 * Get a nested translation value using dot notation
 */
export function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

/**
 * Main translation function
 */
export async function t(key: string, locale: SupportedLocale): Promise<string> {
  const translations = await loadTranslations(locale);
  return getNestedValue(translations, key);
}

/**
 * Create a translation function bound to a specific locale
 */
export async function createTranslator(locale: SupportedLocale) {
  const translations = await loadTranslations(locale);

  return (key: string): string => {
    return getNestedValue(translations, key);
  };
}

/**
 * Get the alternate locale (for language switching)
 */
export function getAlternateLocale(currentLocale: SupportedLocale): SupportedLocale {
  return currentLocale === 'en' ? 'id' : 'en';
}

/**
 * Generate localized URL
 */
export function getLocalizedUrl(path: string, locale: SupportedLocale): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // For default locale, don't add prefix
  if (locale === DEFAULT_LOCALE) {
    return `/${cleanPath}`;
  }

  // For other locales, add prefix
  return `/${locale}/${cleanPath}`;
}

/**
 * Remove locale prefix from URL path
 */
export function removeLocaleFromPath(path: string): string {
  const segments = path.split('/').filter(Boolean);

  if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as SupportedLocale)) {
    return '/' + segments.slice(1).join('/');
  }

  return path;
}
