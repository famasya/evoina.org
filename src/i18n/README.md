# Internationalization (i18n) System

This directory contains the internationalization setup for the ISES website.

## Structure

- `en.json` - English translations (default locale)
- `id.json` - Indonesian translations
- `translate.ts` - Translation utilities and helper functions
- `index.ts` - Main exports for easy importing

## Supported Locales

- `en` (English) - Default locale
- `id` (Indonesian/Bahasa Indonesia)

## Usage

### In Astro Components

```astro
---
import { getLocaleFromUrl, loadTranslations } from '../i18n';

const currentLocale = getLocaleFromUrl(Astro.url);
const translations = await loadTranslations(currentLocale);
---

<h1>{translations.navigation.about}</h1>
```

### Translation Keys

The translation files are organized into the following sections:

- `navigation.*` - Navigation menu items
- `buttons.*` - Button labels and call-to-action text
- `labels.*` - Section headers and labels
- `common.*` - Common UI elements (prev, next, etc.)
- `homepage.*` - Homepage-specific content
- `benefits.*` - Membership and project benefits
- `meta.*` - Site metadata (title, description)

## URL Structure

- Default locale (English): `/about`, `/programs`, etc.
- Indonesian locale: `/id/about`, `/id/programs`, etc.

## Adding New Translations

1. Add the new key-value pair to both `en.json` and `id.json`
2. Update the `Translations` interface in `translate.ts` if adding new sections
3. Use the translation in your components via the `translations` object

## Phase Implementation

This is Phase 1 of the i18n implementation, which includes:
- ✅ Basic routing configuration
- ✅ Translation file structure
- ✅ Helper utilities
- ✅ Layout integration

Future phases will include:
- Individual page component updates
- Dynamic route generation for localized pages
- Language switching functionality
- SEO optimization for multilingual content
