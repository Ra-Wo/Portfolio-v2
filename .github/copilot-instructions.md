# Copilot Instructions for Rachid's Portfolio

## Project Overview

This is a modern Next.js 15 portfolio website built with TypeScript, React 19, Tailwind CSS 4, and shadcn/ui. The project follows a dark-theme-only design with purple/violet accent colors and glass morphism effects.

## Tech Stack & Preferences

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: shadcn/ui with custom modifications
- **Icons**: Lucide React
- **Animations**: Framer Motion and custom CSS animations
- **Fonts**: Inter (sans), Poppins (heading), JetBrains Mono (mono), Pacifico (logo/accent)

## Design System & Styling Guidelines

### Color Palette

- **Primary Colors**: Dark theme only - no light mode support
- **Accent Colors**: Purple/violet gradients (`from-violet-400 via-purple-400 to-violet-600`)
- **Background**: Dark (`bg-background`) with CSS variables
- **Text**: Use semantic color tokens (`text-foreground`, `text-muted-foreground`)
- **Glass Effects**: Use `glass-nav` custom class for navigation

### Typography

- **Body Text**: `font-sans` (Inter)
- **Headings**: `font-heading` (Poppins)
- **Code/Monospace**: `font-mono` (JetBrains Mono)
- **Logo/Brand**: `font-pacifico` (Pacifico) with `style={{ fontFamily: 'var(--font-pacifico)' }}`

### Component Patterns

#### Layout & Structure

```tsx
// Use semantic HTML with proper accessibility
<section id="section-name" className="min-h-screen relative">
  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
    <div className="relative z-10">{/* Content */}</div>
  </div>
</section>
```

#### Interactive Elements

```tsx
// Always include smooth scroll behavior
const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Use consistent hover effects with purple theme
className = "group hover:text-violet-400 transition-colors duration-200";
```

#### Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Use `hidden md:block` for desktop-only elements
- Use `md:hidden` for mobile-only elements
- Consistent spacing: `px-6 sm:px-8 lg:px-10`

### Animation Guidelines

- **Transitions**: Always use `transition-colors duration-200` for color changes
- **Hover Effects**: Use `group` pattern with purple accent colors
- **Custom Animations**: Prefer CSS animations over complex JS
- **Loading States**: Use dynamic imports for heavy components with fallbacks

### Component Architecture

#### File Structure

```
components/
├── ui/           # shadcn/ui components and custom UI primitives
├── Navigation.tsx # Main navigation with mobile menu
├── Hero.tsx      # Hero section with animations
└── [Feature].tsx # Feature components
```

#### Component Naming

- Use PascalCase for component files and exports
- Use descriptive names that indicate purpose
- Export as default function with same name as file

#### State Management

```tsx
// Use React hooks for local state
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Prefer useState over useReducer for simple state
// Use proper TypeScript typing for state
```

### Code Style Guidelines

#### Import Organization

```tsx
"use client"; // Always at top for client components

// 1. React/Next.js imports
import { useState } from "react";
import dynamic from "next/dynamic";

// 2. Third-party imports
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// 3. Local imports
import CustomComponent from "@/components/CustomComponent";
```

#### Conditional Rendering

```tsx
// Prefer && for simple conditionals
{
  isMenuOpen && <div className="mobile-menu">{/* Menu content */}</div>;
}

// Use ternary for simple either/or conditions
{
  theme === "dark" ? <Moon /> : <Sun />;
}
```

#### Event Handlers

```tsx
// Always prevent default for anchor links with onClick
onClick={(e) => {
  e.preventDefault();
  scrollToSection(href);
}}

// Use arrow functions for inline handlers
// Extract complex handlers to separate functions
```

### Accessibility Requirements

- Include `sr-only` labels for screen readers
- Use proper semantic HTML (nav, section, button, etc.)
- Ensure keyboard navigation works
- Include proper ARIA labels where needed

### Performance Considerations

- Use `dynamic` imports for heavy components (WebGL, animations)
- Include loading fallbacks for dynamic imports
- Optimize images and use Next.js Image component
- Use `"use client"` only when necessary

### Mobile-First Development

- Always test mobile responsiveness
- Use touch-friendly button sizes (`w-9 h-9` minimum)
- Ensure mobile menus work properly with proper z-index
- Use `overflow-visible` for dropdowns/menus

### Custom CSS Classes

- **Glass Effects**: `glass-nav` for navigation glass morphism
- **Animations**: Custom keyframes defined in globals.css
- **Gradients**: Use Tailwind gradient utilities with purple theme

### Error Handling

```tsx
// Always handle potential null elements
const element = document.querySelector(href);
if (element) {
  element.scrollIntoView({ behavior: "smooth" });
}
```

### Comments & Documentation

```tsx
// Use descriptive comments for complex sections
{
  /* WebGL Background */
}
{
  /* Mobile Navigation */
}

// Include JSDoc for complex functions
/**
 * Scrolls to a specific section on the page
 * @param href - The hash href to scroll to (e.g., "#about")
 */
```

## Specific Component Patterns

### Navigation Component

- Fixed positioning with glass effect
- Mobile hamburger menu with state management
- Smooth scroll to sections
- Purple gradient underline animations on hover
- Logo with Pacifico font using CSS variables

### Hero Section

- Full height with centered content
- WebGL background with dynamic imports
- Gradient text effects for headlines
- Animation components (TextTrail, FadeContent, Spotlight)
- Social links with hover effects

### Button Components

- Use shadcn/ui Button with custom variants
- Consistent sizing and hover states
- Purple theme integration
- Proper accessibility attributes

## Development Workflow

1. Build mobile-first, then enhance for desktop
2. Test all interactive elements (clicks, hovers, navigation)
3. Verify accessibility with screen readers
4. Check performance with dynamic imports
5. Ensure consistent purple theme throughout
6. Test dark theme CSS variables work properly

Remember: This is a dark-theme-only portfolio focusing on modern web development with purple/violet branding and smooth animations.
