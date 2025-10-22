# Global Women Rising - Website

A modern, beautiful website for Global Women Rising - an international community of women leaders, changemakers, and philanthropists accelerating gender equality through collective giving, mentorship, and advocacy.

## Features

- 🎨 **Beautiful Design**: Elegant typography with Cormorant Garamond and Inter fonts
- 🎨 **Modern Color Palette**: Deep teal primary color with warm coral accents
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: WCAG AA compliant with semantic HTML
- ⚡ **Fast Performance**: Optimized images and modern build process
- 🌐 **Multiple Pages**: Home, About, Programs, Impact, Events, Stories, Contact, Get Involved

## Pages

- **Home**: Hero section, impact metrics, featured programs, member spotlights, events, and stories
- **About**: Mission, vision, leadership team, and annual reports
- **Programs**: Detailed information about Giving Circles, Mentorship, Advocacy, and Grants
- **Impact**: Global reach metrics, case studies, and testimonials
- **Get Involved**: Volunteer and mentor inquiry forms
- **Events**: Upcoming and past events calendar
- **Stories**: Searchable blog with member voices and impact stories
- **Contact**: Contact form and organization information

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **UI Components**: Radix UI, shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter
- **Build Tool**: Vite
- **Icons**: Lucide React

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:5000
   ```

## Building for Production

```bash
npm run build
```

This creates optimized files in the `dist` folder.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying to:
- Vercel (recommended)
- Netlify
- Render
- Railway
- Other hosting platforms

## Environment Variables

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

Required variables:
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment (development/production)
- `SESSION_SECRET`: Random secret for sessions

## Project Structure

```
├── client/                 # Frontend code
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── server/                 # Backend code
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types/schemas
└── attached_assets/        # Images and assets
```

## Customization

### Colors
Edit `client/src/index.css` to change the color scheme:
- Primary color (teal): `--primary`
- Accent color (coral): CSS custom properties
- Background colors: `--background`, `--card`

### Content
Update content in the page files:
- `client/src/pages/Home.tsx`
- `client/src/pages/About.tsx`
- etc.

### Images
Replace images in `attached_assets/generated_images/` with your own photos.

## Support

For deployment help, see [DEPLOYMENT.md](DEPLOYMENT.md)

## License

MIT License - feel free to use this code for your organization!

---

Built with ❤️ for Global Women Rising
