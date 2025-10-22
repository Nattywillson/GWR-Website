# Global Women Rising - Design Guidelines

## Design Approach

**Reference-Based Strategy:** Drawing inspiration from high-impact philanthropy organizations (womenmovingmillions.org, Bill & Melinda Gates Foundation, Malala Fund) with emphasis on sophisticated visual storytelling, professional photography, and trust-building through authentic imagery. The design balances emotional resonance with informational clarity to inspire action and community engagement.

**Core Principles:**
- Warmth with authority: Professional yet approachable
- Visual storytelling: Photography-driven narratives showcasing real impact
- Generous breathing room: Ample whitespace creates sophistication
- Purposeful hierarchy: Clear visual paths to key actions

---

## Color Palette

**Light Mode:**
- Background: 40 8% 97% (soft cream/ivory)
- Surface: 0 0% 100% (pure white cards)
- Primary: 195 65% 25% (deep teal - trust, stability)
- Accent: 350 75% 60% (warm coral - energy, passion)
- Text Primary: 220 15% 20% (graphite)
- Text Secondary: 220 10% 45% (muted gray)
- Border: 220 15% 90% (subtle dividers)

**Dark Mode:**
- Background: 220 20% 12%
- Surface: 220 18% 16%
- Primary: 195 60% 55% (lighter teal)
- Accent: 350 70% 65%
- Text Primary: 40 10% 95%
- Text Secondary: 220 8% 70%

---

## Typography

**Font Families:**
- Headings: 'Cormorant Garamond', serif (elegant, established authority)
- Body: 'Inter', sans-serif (modern, highly readable)
- Accents/Stats: 'Inter', sans-serif with varied weights

**Type Scale:**
- Hero Headline: text-6xl/text-7xl (60-72px desktop)
- Section Headers: text-4xl/text-5xl (36-48px)
- Card Titles: text-2xl/text-3xl (24-30px)
- Body Large: text-lg (18px)
- Body: text-base (16px)
- Small/Captions: text-sm (14px)

**Weights & Styles:**
- Headings: font-normal to font-medium (Cormorant natural weight)
- Subheadings: font-semibold (Inter 600)
- Body: font-normal (Inter 400)
- Emphasis: font-medium (Inter 500)
- Stats/Numbers: font-bold (Inter 700)

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6, p-8, p-12
- Section spacing: py-16, py-20, py-24
- Grid gaps: gap-6, gap-8, gap-12
- Margins: mb-4, mb-6, mb-8, mb-12

**Grid System:**
- Container: max-w-7xl mx-auto px-6
- Content: max-w-6xl for full sections, max-w-prose for text-heavy areas
- Multi-column: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

**Viewport Strategy:**
- Hero: 85vh with content-driven overflow (not forced 100vh)
- Sections: Natural height with py-20 desktop, py-12 mobile
- No floating elements in empty space

---

## Component Library

### Navigation
- Sticky header with transparent-to-solid transition on scroll
- Logo left, horizontal nav center, "Donate" and "Get Involved" CTAs right
- Mobile: Hamburger menu with full-screen overlay
- Generous header height: h-20

### Hero Section
- Large impactful photography (diverse women leaders in action)
- Overlay: subtle gradient (teal to transparent) for text legibility
- Headline + subhead + two CTAs (primary + outline)
- Buttons on images: backdrop-blur-sm bg-white/10 border-white/30

### Impact Metrics Strip
- 4-column grid (single column mobile)
- Large bold numbers in accent coral
- Short descriptive labels below
- Subtle border separators between metrics
- Background: surface white on cream

### Program Cards
- 3-column grid (stacks mobile)
- Icon or small illustration at top
- Title (text-2xl Cormoant)
- Description (2-3 lines, text-base Inter)
- "Learn More" link in primary teal
- Hover: subtle lift shadow, no aggressive animations

### Member Spotlight Carousel
- Large portrait photography (authentic, candid)
- Quote overlay with semi-transparent background
- Name + Title + Location below
- Carousel indicators (dots) below
- Auto-rotate with manual controls

### Call-to-Action Sections
- Full-width background (alternating cream and white)
- Centered content with max-w-4xl
- Large headline + supporting text + button
- Optional supporting visual element (illustration or photo)

### Event Cards
- Horizontal card layout (image left, content right)
- Date badge overlay on image
- Title, location, brief description
- "RSVP" or "Learn More" button
- Grid: 2 columns desktop, stack mobile

### Forms
- Generous field spacing (mb-6)
- Labels above inputs (text-sm font-medium)
- Input styling: border-2 border-gray-300 focus:border-primary
- Submit buttons: Full primary color, generous padding
- Multi-step forms: Progress indicator at top

### Footer
- 4-column grid (stack mobile): About, Programs, Get Involved, Connect
- Newsletter signup inline (not separate section)
- Social icons (subtle, not overly prominent)
- Legal links at bottom
- Background: graphite with light text

---

## Images

**Hero Section:**
- Large, high-quality photograph of diverse women leaders collaborating (meeting, discussion, or mentorship moment)
- Dimensions: 1920x1080 minimum
- Treatment: Slight darkening overlay for text contrast
- Placement: Full-width, 85vh height

**Program Section:**
- 3 supporting images for each program area
- Square or 4:3 ratio
- Professional photography showing programs in action
- Placement: Above or beside program card content

**Impact Section:**
- Geographic map visualization (illustrated or minimal design)
- 4-6 case study photos (women beneficiaries, program outcomes)
- Authentic, unposed photography preferred

**Member Spotlights:**
- Professional portraits (headshots or environmental)
- Minimum 800x800px
- Diverse representation across age, ethnicity, geography
- Warm, approachable expressions

**About/Leadership:**
- Team member portraits (consistent style)
- Office/meeting space photography for context
- Historical photos for origin story

---

## Page-Specific Layouts

**Homepage:** Hero + Impact Metrics + Featured Programs (3 cards) + Member Spotlight Carousel + Upcoming Events (3 cards) + Impact Stories Preview + Newsletter CTA + Footer

**About:** Hero with team photo + Mission/Vision 2-column + Leadership Team Grid (4 columns) + Partners Logos + Timeline/History + Downloadable Reports

**Programs:** Hero + 4 Program Deep-Dives (alternating image-left/image-right layouts) + How to Get Involved CTA

**Impact:** Interactive Metrics Dashboard + Geographic Map + 6 Case Study Cards + Testimonials Grid + Download Report CTA

**Get Involved:** Hero + 4 Action Cards (Volunteer, Mentor, Host Event, Start Chapter) + Inquiry Forms + Community Stories

**Events:** Upcoming Events Grid + Past Event Gallery + Calendar Integration Placeholder

**News/Stories:** Featured Article Hero + Article Grid (3 columns) + Search/Filter Bar + Pagination

---

## Accessibility & Performance

- WCAG AA contrast ratios: 4.5:1 text, 3:1 UI elements
- Semantic HTML5: header, nav, main, section, article, footer
- Alt text: Descriptive for all images
- Keyboard navigation: Tab order, focus states (ring-2 ring-primary)
- Dark mode: Consistent implementation across all components
- Lazy-load images below fold
- WebP format with fallbacks

**No Animations:** Minimal motion - only subtle hover lifts and fade-ins on scroll (avoid distracting transitions)