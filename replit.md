# BlinC Games Investor Website

## Overview

BlinC Games is a universal gaming platform that connects players, organizers, venues, officials, and sponsors across sports, esports, and board games. This repository contains an investor relations website showcasing the company's vision, business model, and market opportunity. The site features BlinC's authentic brand identity with the "We Play Games" tagline and signature red/navy color scheme.

**Brand Identity:**
- Tagline: "We Play Games"
- Core Proposition: "If You Can Play It, You Can BlinC It"
- Primary Color: BlinC Red #D04449 (HSL 357° 62% 55%)
- Secondary Color: Navy Blue #0A2463 (HSL 217° 83% 22%)
- Logo Assets: White logo with tagline (dark backgrounds), black logo (light backgrounds)

The application is a single-page website with sections for product highlights, pitch deck viewer, event media gallery, testimonials, video demos, and investor contact forms. It balances BlinC's energetic gaming brand with professional investor-focused presentation, emphasizing the company's revolutionary royalty network, weekly automated payouts, and 10-year referral rewards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management
- Tailwind CSS for utility-first styling

**UI Component System:**
- shadcn/ui component library with Radix UI primitives
- Custom design system based on "new-york" style variant
- Extensive component library including forms, dialogs, navigation, carousels, charts, and more
- Consistent theming through CSS custom properties for colors and spacing

**Design System:**
- BlinC Red Primary (#D04449 / HSL 357° 62% 55%): Used for CTAs, accents, and key highlights
- Navy Blue Secondary (#0A2463 / HSL 217° 83% 22%): Used for hero/footer backgrounds and depth
- Professional neutral grays for body text and card backgrounds
- Responsive design with mobile-first approach
- Custom fonts: Inter for body text, Space Grotesk for headings
- Elevation system using transparent overlays for hover/active states
- Logo variants: White with tagline (hero/footer), black (scrolled navigation)

**Component Architecture:**
- Page-level components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- Example components demonstrating usage patterns
- Single-page application structure with Home as the main page

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for the API server
- HTTP server with request/response logging middleware
- Development and production build modes

**Development Environment:**
- Vite integration for hot module replacement (HMR)
- Replit-specific plugins for development tooling
- Custom error overlay for runtime debugging

**Storage Layer:**
- In-memory storage implementation (MemStorage class)
- Interface-based design for future database migration
- User management with CRUD operations

**Build Process:**
- Client: Vite builds React application to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js`
- Static file serving in production mode

### Data Architecture

**Database Schema (Prepared for PostgreSQL):**
- Drizzle ORM configured for PostgreSQL dialect
- User table with UUID primary keys, username, and password fields
- Zod schema validation for type-safe data insertion
- Migration system ready via drizzle-kit

**State Management:**
- React Query for server state caching and synchronization
- React Hook Form with Zod resolvers for form validation
- Local component state with React hooks

### Design Guidelines Integration

The application implements BlinC's authentic brand identity documented in `design_guidelines.md`:
- **Brand Color System**: Red primary for energy/action, navy secondary for trust/depth
- **Logo System**: White tagline version for dark backgrounds (hero, footer), black version for light backgrounds (navigation)
- **Hierarchy**: Navy hero section with white text and red accents, white content sections with navy footer
- **Professional Gaming Aesthetic**: Balances BlinC's energetic gaming brand with investor-focused credibility
- **Accessibility**: All color combinations meet WCAG AA contrast standards
- **Conversion-focused**: Strategic CTA placement and visual hierarchy guiding toward contact form

## External Dependencies

### Third-Party UI Libraries
- **Radix UI:** Comprehensive suite of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, select, slider, tabs, toast, tooltip, etc.)
- **shadcn/ui:** Pre-built component system built on Radix UI with Tailwind styling
- **Lucide React:** Icon library for consistent iconography
- **class-variance-authority & clsx:** Utility libraries for conditional CSS class management

### Database & ORM
- **Neon Database Serverless:** PostgreSQL database provider (configured but may not be provisioned yet)
- **Drizzle ORM:** Type-safe ORM for PostgreSQL with schema migrations
- **drizzle-zod:** Integration between Drizzle schemas and Zod validation

### Form Handling
- **React Hook Form:** Performant form state management
- **@hookform/resolvers:** Validation resolver integration
- **Zod:** Schema validation library for forms and data

### UI Enhancement
- **Embla Carousel React:** Touch-friendly carousel component
- **cmdk:** Command menu component for keyboard navigation
- **Vaul:** Drawer/sheet component primitives
- **input-otp:** OTP input component
- **react-day-picker:** Date picker component
- **Recharts:** Charting library for data visualization

### Development Tools
- **TypeScript:** Type safety across the codebase
- **Vite:** Fast build tool with HMR
- **esbuild:** Fast JavaScript bundler for production
- **tsx:** TypeScript execution for development server
- **PostCSS & Autoprefixer:** CSS processing

### Fonts & Assets
- **Google Fonts:** Inter (body text) and Space Grotesk (headings)
- **Generated Images:** AI-generated hero and feature images stored in `attached_assets/generated_images/`
- **Brand Assets:**
  - `blinc-logo-white-tagline.png`: White logo with "We Play Games" tagline for navy backgrounds
  - `blinc-logo-black.png`: Black logo for light/white backgrounds
  - `blinc-logo-gradient.png`: Gradient version (archived, not currently used)
- **Event Media:**
  - Stock gaming event images in `attached_assets/stock_images/` (6 esports tournament photos)
  - Event Gallery component displays photos and videos from BlinC gaming events
  - Interactive lightbox viewer with dialog modals for full-size viewing
- **Demo Videos:**
  - BlinC Halftimes video (320MB MOV) at `client/public/blinc-halftimes-v3.mov`
  - Powderpuff Football Tournament video (253MB MOV) at `client/public/blinc-powderpuff-v2.mov`
  - Performance-optimized lazy loading (preload="none") for both videos
  - Full-screen video player with HTML5 controls
  - Videos load only when user clicks to watch (no page load impact)

### Session Management (Prepared)
- **connect-pg-simple:** PostgreSQL session store for Express (configured but not actively used)

### Utilities
- **date-fns:** Date manipulation and formatting
- **nanoid:** Unique ID generation
- **@jridgewell/trace-mapping:** Source map utilities for debugging