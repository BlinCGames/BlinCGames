# BlinC Games Investor Website - Design Guidelines

## Brand Identity

**Logo:** Playful script-style "BlinC" wordmark with "We Play Games" tagline
**Brand Personality:** Energetic, fun, competitive, inclusive - connecting people through games
**Design Balance:** Maintain professional investor credibility while expressing BlinC's playful gaming spirit

**Color Scheme - BlinC Brand Colors:**
- **Primary (BlinC Red):** Vibrant coral-red (#D04449 / HSL 357° 62% 55%) - used for primary CTAs, highlights, brand accents
- **Secondary (BlinC Navy):** Deep navy blue (#0A2463 / HSL 217° 83% 22%) - used for depth, contrast, supporting elements
- **Tertiary (White):** Clean white for outlines, text overlays, and clarity
- **Neutral Grays:** Professional grays for body text and backgrounds to maintain investor focus

---

## Design Approach

**Selected Approach:** Reference-Based, drawing from Linear's modern aesthetics, Stripe's professional trustworthiness, and Pitch's presentation-focused layouts. Enhanced with BlinC's energetic red/navy brand identity to create a unique balance between gaming energy and investor confidence.

**Key Principles:**
- **Authority & Trust:** Professional polish that commands investor confidence
- **Brand Expression:** Strategic use of BlinC red for energy and action, navy for depth and trust
- **Visual Storytelling:** Let the product speak through rich media and clear hierarchy
- **Conversion-Focused:** Every element guides toward contact form completion
- **Content Density:** Information-rich without overwhelming, strategic white space

---

## Color Application Strategy

**Primary Red Usage (Sparingly for Impact):**
- Hero CTAs and primary action buttons
- Key statistics and metrics highlights
- Logo and brand lockups
- Section accents and dividers
- Active/selected states
- Important badges ("Investor Materials", value props)

**Navy Blue Usage (Professional Foundation):**
- Secondary buttons and elements
- Headers and navigation
- Supporting graphics and illustrations
- Text overlays on light backgrounds
- Card borders and dividers
- Footer backgrounds

**Neutral Usage (Professional Balance):**
- Body copy: Dark gray (#1F2937)
- Backgrounds: White, light gray (#F9FAFB)
- Subtle borders: Light gray (#E5E7EB)
- Secondary text: Medium gray (#6B7280)

---

## Typography System

**Primary Font:** Inter (Google Fonts) - modern, highly legible, professional
**Accent Font:** Space Grotesk or Outfit - for headlines requiring impact and energy

**Hierarchy:**
- Hero Headline: text-5xl lg:text-7xl, font-bold, tracking-tight (navy or black)
- Tagline: text-xl lg:text-2xl, text-red-600 (BlinC brand red)
- Section Headers: text-3xl lg:text-5xl, font-semibold (navy)
- Subsection Titles: text-xl lg:text-2xl, font-medium
- Feature Titles: text-lg lg:text-xl, font-semibold
- Body Copy: text-base lg:text-lg, leading-relaxed (dark gray)
- Form Labels: text-sm, font-medium, uppercase tracking-wide
- Captions/Metadata: text-sm, opacity-70

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24 (e.g., p-4, gap-8, mt-16, py-24)

**Container Strategy:**
- Full-width sections with inner `max-w-7xl mx-auto px-6 lg:px-8`
- Content sections: `max-w-6xl`
- Form content: `max-w-2xl` for optimal completion

**Vertical Rhythm:**
- Section padding: `py-16 lg:py-24` (desktop), `py-12` (mobile)
- Component gaps: `gap-12 lg:gap-16` between major elements
- Card spacing: `space-y-6` for stacked content

---

## Component Library

### Navigation
**Style:** Fixed header with glass morphism effect on scroll
**Layout:** 
- Left: BlinC logo (with red/navy branding)
- Center: Smooth-scroll nav links (navy text)
- Right: "Contact Us" CTA button (red background)
**Effects:** `backdrop-blur-lg` with subtle white/gray background
**Badge:** "Investor Materials" or "Confidential" in red accent

### Hero Section
**Layout:** Asymmetric 60/40 split (desktop), stacked (mobile)
**Content:**
- **BlinC Logo:** Large branded logo with "We Play Games" tagline
- **Headline:** Bold value proposition in navy/black
- **Value Prop:** 2-3 sentences explaining "If you can play it, you can BlinC it"
- **Dual CTAs:** 
  - Primary: "View Pitch Deck" (red background, white text)
  - Secondary: "Watch Demo" (navy outline)
- **Hero Image:** App interface or gameplay screenshot (right side)
- **Trust Indicators:** Market size, funding stage, key metrics
**Background:** Clean white/light gray with subtle geometric accents in brand colors

### App Highlights Section
**Layout:** 2x2 grid (desktop), single column (mobile) using `grid grid-cols-1 lg:grid-cols-2 gap-8`

**Section Intro:** 
- Headline in navy
- Key stat in red ("$1.3T sports market + 3B gamers")
- Market opportunity statement

Each highlight card:
- Icon or app screenshot with red/navy accent
- Bold title (navy)
- 2-3 sentence description
- Key metric in red treatment
- "Learn More" link with arrow (navy hover:red)

**Highlights Focus:**
1. Universal Platform (sports, esports, board games)
2. Royalty Network (10-year referral payments)
3. Instant Payouts (weekly automated payments)
4. Complete Ecosystem (organizers, players, venues, sponsors)

### Pitch Deck Viewer
**Layout:** Full-width section with centered content

- PDF embed using `<iframe>` at 16:9 aspect ratio
- Controls: Download button (red), full-screen toggle, page navigation
- Fallback: Thumbnail preview grid
- Context sidebar with key takeaways:
  - Problem: Fragmented gaming ecosystem
  - Solution: Universal platform with payment infrastructure
  - Market: $1.3T sports + 3B gamers
  - Business Model: Royalty Network
  - Team: Founder credentials
  - Financials: Growth projections

### Demo Showcase
**Layout:** Tab-based interface with 2-3 video demos

Each demo:
- Video embed with custom red play button overlay
- Category tag in navy ("Gameplay", "User Flow", "Features")
- Brief description
- Timestamp markers for key moments
- App screenshots in masonry grid or slider

### Investor/Partner Form
**Layout:** Single column, max-width container

**Form Styling:**
- Field labels in navy
- Large input fields (`h-12`) with subtle gray borders
- Focus states with red accent ring
- Primary submit button: Red background, full-width on mobile
- Success state: Red accent confirmation

**Fields:**
- Full Name
- Email Address  
- Company/Organization
- Role/Title
- Investment Interest (dropdown: Seed, Series A, Strategic Partnership, Other)
- Investment Range (optional)
- Message/Inquiry (textarea)
- Newsletter opt-in (checkbox)

**Supporting:**
- Privacy notice
- Contact sidebar: Email, response time ("24 hours"), calendar link
- Trust signals with red accents

### Footer
**Style:** Navy background with white text
**Layout:** Multi-column
- Column 1: BlinC logo, "We Play Games" tagline, social links
- Column 2: Quick navigation
- Column 3: Resources
- Column 4: Legal
**Bottom Bar:** Copyright, "Confidential investor materials" notice in light gray

---

## Images

**Logo Usage:**
- Hero: Large BlinC logo with tagline (blinc-logo-white-tagline.png for dark backgrounds)
- Navigation: Logo mark or full logo (blinc-logo-black.png for light backgrounds)
- Favicon: Square logo version

**Hero Section:** High-quality app interface screenshot or gameplay visual showing BlinC's universal gaming platform

**App Highlights:** Icons with red/navy accent colors OR cropped feature screenshots with consistent treatment

**Demo Section:** Video thumbnails with branded red play button overlay

**General Treatment:** 
- Rounded corners: `rounded-xl`
- Subtle shadows: `shadow-lg`
- Consistent aspect ratios (16:9 videos, 4:3 screenshots)
- Red accent borders or overlays where appropriate

---

## Animations

Minimal, purposeful motion that reinforces brand energy:
- Scroll-triggered fade-ins for sections (`transition-opacity duration-700`)
- Subtle hover lifts on cards (`hover:translate-y-[-4px] transition-transform`)
- Red underline animations on navigation links
- Smooth scrolling between sections
- Form field focus animations with red glow
- Button hover states with subtle red intensification

Avoid: Excessive parallax, auto-playing carousels, distracting effects

---

## Icons

**Library:** Lucide React - clean, modern, professional

**Usage:**
- Feature highlights: 32px icons in red or navy
- Form field prefixes: 20px icons in gray
- Navigation: 24px icons
- Social links: 20px brand icons in white (on navy footer)
- CTA arrows: 16px directional indicators in white (on red buttons)

---

## Accessibility

- All form inputs have associated labels with `for` attributes
- Sufficient color contrast (WCAG AA):
  - Red (#D04449) on white: ✓ Passes
  - Navy (#0A2463) on white: ✓ Passes
  - White on red: ✓ Passes
  - White on navy: ✓ Passes
- Focus states clearly visible (red ring)
- Video controls keyboard accessible
- Alt text for all images including logo
- Semantic HTML structure
- Skip navigation link

---

## Brand Voice in Copy

**Tone:** Confident, energetic, inclusive, data-driven
**Key Messages:**
- "If you can play it, you can BlinC it" (universal platform)
- "Connecting people through games" (mission)
- Royalty Network with 10-year referrals (unique value)
- $1.3T market opportunity (scale)
- Weekly automated payouts (solving real problems)

**Investor-Focused Language:**
- Market size and TAM
- Competitive advantages
- Revenue model clarity
- Growth metrics and traction
- Team credentials
- Clear call-to-action for investment conversations
