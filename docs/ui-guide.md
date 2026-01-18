# UI Guide

## Design System

### Component Library
[shadcn/ui / Chakra UI / Custom / etc.]

### Icons
[Lucide / Heroicons / etc.]

## Colors

### Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Primary | #3B82F6 | Buttons, links, accents |
| Secondary | #6B7280 | Secondary actions |
| Accent | #10B981 | Success, highlights |

### Semantic Colors

| Name | Light | Dark | Usage |
|------|-------|------|-------|
| Background | #FFFFFF | #0F172A | Page background |
| Foreground | #0F172A | #F8FAFC | Text |
| Muted | #F1F5F9 | #1E293B | Subtle backgrounds |
| Border | #E2E8F0 | #334155 | Borders, dividers |

### Status Colors

| Status | Color | Hex |
|--------|-------|-----|
| Success | Green | #22C55E |
| Warning | Yellow | #EAB308 |
| Error | Red | #EF4444 |
| Info | Blue | #3B82F6 |

## Typography

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Scale

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| xs | 12px | 16px | Labels |
| sm | 14px | 20px | Body small |
| base | 16px | 24px | Body |
| lg | 18px | 28px | Lead text |
| xl | 20px | 28px | H4 |
| 2xl | 24px | 32px | H3 |
| 3xl | 30px | 36px | H2 |
| 4xl | 36px | 40px | H1 |

## Spacing

Base unit: 4px

| Token | Value |
|-------|-------|
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 6 | 24px |
| 8 | 32px |
| 12 | 48px |
| 16 | 64px |

## Border Radius

| Name | Value | Usage |
|------|-------|-------|
| sm | 4px | Inputs |
| md | 6px | Cards |
| lg | 8px | Modals |
| full | 9999px | Avatars, pills |

## Shadows

| Name | Value | Usage |
|------|-------|-------|
| sm | 0 1px 2px rgba(0,0,0,0.05) | Subtle elevation |
| md | 0 4px 6px rgba(0,0,0,0.1) | Cards |
| lg | 0 10px 15px rgba(0,0,0,0.1) | Modals |

## Components

### Buttons

| Variant | Usage |
|---------|-------|
| Primary | Main actions |
| Secondary | Secondary actions |
| Ghost | Tertiary actions |
| Destructive | Delete/danger |

### Forms

- Labels above inputs
- Error messages below inputs
- Required fields marked with *

## Responsive Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |

## Dark Mode

- System preference by default
- User toggle in settings
- Persist preference

## Accessibility

- WCAG 2.1 AA compliant
- Minimum contrast ratio: 4.5:1
- Focus indicators visible
- Screen reader friendly
