# Smart E-Commerce Platform - Frontend

This is the frontend application for the Smart E-Commerce Platform, built with React, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Directory Structure

```
src/
├── components/     # Reusable UI components
│   └── Button.tsx # Example: Button component
├── context/       # React Context providers
│   └── CartContext.tsx
├── layouts/       # Page layouts
│   └── MainLayout.tsx
├── pages/         # Page components
│   ├── Home.tsx
│   ├── Products.tsx
│   └── Cart.tsx
└── types/         # TypeScript type definitions
```

## Current Features

- Product browsing with grid layout
- Shopping cart functionality
- Responsive navigation
- Cart item counter
- Add/remove items from cart
- Update item quantities
- Calculate total price
- Mobile-friendly design

## Upcoming Features

### Modern UI/UX Enhancements
- GSAP animations for page transitions and micro-interactions
- Skeleton loading components with pulse animations
- Responsive image galleries with zoom capabilities
- Animated product cards with hover effects
- Motion-based micro-interactions
- Smooth scrolling behaviors

### Theme System
- Dark/Light theme toggle with system preference detection
- Theme-aware components and layouts
- Persistent theme selection using local storage
- Smooth color transitions between themes
- Custom color schemes for both themes
- CSS variables for dynamic theming

### E-commerce Data Management
- Real-time inventory tracking
- Order lifecycle management
- Product variant system
  - Size/color combinations
  - Custom attributes
  - Pricing rules
- Stock management
  - Low stock alerts
  - Automatic reordering
  - Inventory history
- Multi-vendor capabilities
  - Vendor profiles
  - Commission tracking
  - Vendor-specific analytics

## Component Usage

### MainLayout
Provides the common layout structure including:
- Navigation header
- Cart counter
- Footer

### Button
Reusable button component with variants:
```tsx
<Button variant="primary">Click me</Button>
<Button variant="secondary" disabled>Disabled</Button>
```

### CartContext
Provides cart functionality:
```tsx
const { items, addItem, removeItem, updateQuantity } = useCart();
```

## Styling

We use Tailwind CSS for styling with the following enhancements:
- Custom color schemes for light/dark modes
- Dynamic theme switching
- CSS custom properties for theme values
- Responsive design patterns
- Animation utilities
- Extended color palette
- Custom component variants

## Development Notes

- Keep components small and focused
- Use TypeScript for type safety
- Follow existing naming conventions
- Test changes in different screen sizes
- Use the provided Button component for consistency

## Common Issues

If styles are not working:
1. Ensure Tailwind directives are properly imported
2. Check PostCSS configuration
3. Restart the development server

## Work in Progress

- User authentication
- Product filtering
- Search functionality
- Checkout process
- Admin interface

## Best Practices

- Use TypeScript strictly
- Follow React hooks guidelines
- Keep components pure when possible
- Use proper TypeScript types
- Document complex logic
- Use context appropriately
- Follow existing code style

## Technical Implementation

### Theme System
```typescript
// Example theme configuration
interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  // ... other theme values
}

// Usage with CSS variables
const lightTheme: Theme = {
  primary: 'var(--color-primary-600)',
  background: 'var(--color-gray-50)',
  // ...
}

const darkTheme: Theme = {
  primary: 'var(--color-primary-400)',
  background: 'var(--color-gray-900)',
  // ...
}
```

### Animation System
- GSAP for complex animations
- Framer Motion for component transitions
- CSS transitions for simple animations
- Intersection Observer for scroll-based animations

### Data Management
- React Query for data fetching and caching
- Optimistic updates for better UX
- Real-time updates using WebSocket
- Offline support with service workers
- Data validation with Zod
- Type-safe API calls
