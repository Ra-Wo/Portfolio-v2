# Rachid Oudouch - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my journey as a Full-Stack Developer. Features a dark theme with purple accents, glass morphism effects, smooth animations, and a comprehensive contact system with reCAPTCHA integration.

## 🚀 Tech Stack

### Core Technologies

- **Framework**: Next.js 15 with App Router & React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: shadcn/ui with custom modifications
- **Icons**: Lucide React

### Enhanced Features

- **Animations**: Framer Motion, Three.js, and custom CSS animations
- **3D Graphics**: @react-three/fiber and @react-three/drei for WebGL
- **Content Management**: Sanity CMS for dynamic project content
- **Email System**: Nodemailer with SMTP configuration
- **Security**: Google reCAPTCHA v2 integration
- **Fonts**: Inter (sans), Poppins (heading), JetBrains Mono (mono), Pacifico (logo)

## 🎨 Design Features

- **Dark Theme Only**: Consistent dark aesthetic throughout
- **Purple/Violet Accents**: Custom gradient color scheme (`from-violet-400 via-purple-400 to-violet-600`)
- **Glass Morphism**: Modern glassmorphism effects for navigation and cards
- **Responsive Design**: Mobile-first approach with seamless desktop scaling
- **Smooth Animations**: Interactive hover effects, scroll animations, and 3D elements
- **WebGL Background**: Dynamic visual elements powered by Three.js

## 📋 Sections

- **Navigation**: Glass morphism navbar with smooth scroll and mobile hamburger menu
- **Hero**: Dynamic introduction with animated text trails and 3D background
- **About**: Professional journey, core values, and personal introduction
- **Skills**: Interactive technology showcase with animated icons and hover effects
- **Projects**: Dynamic project showcase powered by Sanity CMS with filtering
- **Contact**: Advanced contact form with reCAPTCHA and email automation
- **Footer**: Social links and additional contact information

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ (with npm, yarn, or pnpm)
- Sanity account (for project content management)
- Google reCAPTCHA keys (for contact form)
- SMTP email service (Gmail, SendGrid, etc.)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Ra-Wo/portfolio-v2.git
cd portfolio
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_sanity_read_token

# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=your_email@gmail.com
```

4. **Set up Sanity CMS:**

```bash
# Navigate to Sanity studio (optional, for content management)
npm run dev
# Visit http://localhost:3000/studio to access Sanity Studio
```

5. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Production Deployment

For production deployment (Vercel recommended):

1. **Deploy to Vercel:**

```bash
npx vercel
```

2. **Set environment variables in Vercel dashboard**

3. **Update reCAPTCHA domains** to include your production URL

## 📞 Contact & Social

- **Portfolio**: [rachid-oudouch.vercel.app](https://rachid-oudouch.vercel.app)
- **Email**: [rashidoudouch@gmail.com](mailto:rashidoudouch@gmail.com)
- **GitHub**: [@Ra-Wo](https://github.com/Ra-Wo)
- **LinkedIn**: [rachid-oudouch](https://www.linkedin.com/in/rachid-oudouch-95872125a/)
- **Twitter/X**: [@r_oudouch](https://x.com/r_oudouch)
- **Instagram**: [@r_oudouch](https://www.instagram.com/r_oudouch)

## 🏗 Project Structure

```
portfolio/
├── app/                          # Next.js 15 App Router
│   ├── globals.css              # Global styles, CSS variables, and animations
│   ├── layout.tsx               # Root layout with fonts and theme configuration
│   ├── page.tsx                 # Main page combining all sections
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form API with reCAPTCHA verification
│   ├── projects/
│   │   ├── loading.tsx          # Loading UI for projects
│   │   ├── page.tsx             # Projects listing page
│   │   └── [slug]/
│   │       └── page.tsx         # Individual project detail pages
│   └── studio/
│       └── [[...tool]]/
│           └── page.tsx         # Sanity Studio integration
├── components/
│   ├── ui/                      # shadcn/ui and custom UI primitives
│   │   ├── animated-beam.tsx    # Custom animated beam component
│   │   ├── animated-list.tsx    # Animated list component
│   │   ├── bento-grid.tsx       # Bento grid layout component
│   │   ├── fade-content.tsx     # Fade animation wrapper
│   │   ├── hero-bg.tsx          # Hero background with WebGL
│   │   ├── spotlight.tsx        # Spotlight effect component
│   │   └── ...                  # Other UI components
│   ├── About.tsx                # About section with personal story
│   ├── Contact.tsx              # Contact form with reCAPTCHA
│   ├── Footer.tsx               # Footer with social links
│   ├── Hero.tsx                 # Hero section with 3D animations
│   ├── Navigation.tsx           # Glass morphism navigation with mobile menu
│   ├── ProjectDetail.tsx        # Individual project display component
│   ├── Projects.tsx             # Projects grid with Sanity integration
│   └── Skills.tsx               # Skills showcase with animated icons
├── lib/
│   ├── data.ts                  # Static data (contact info, social links)
│   ├── sanity.ts                # Sanity client configuration and queries
│   └── utils.ts                 # Utility functions (cn, etc.)
├── public/                      # Static assets and technology icons
├── sanity/                      # Sanity CMS configuration
│   ├── env.ts                   # Environment configuration for Sanity
│   ├── structure.ts             # Sanity Studio structure
│   ├── lib/
│   │   ├── client.ts            # Sanity client setup
│   │   ├── image.ts             # Image URL builder
│   │   └── live.ts              # Live preview configuration
│   └── schemaTypes/
│       ├── index.ts             # Schema exports
│       └── project.ts           # Project schema definition
├── components.json              # shadcn/ui configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── sanity.config.ts             # Sanity Studio configuration
└── RECAPTCHA_SETUP.md           # reCAPTCHA setup instructions
```

## 📊 Content Management with Sanity

This portfolio uses **Sanity CMS** for managing project content dynamically. The Projects section fetches data from Sanity, allowing you to:

### Features

- ✅ Add/edit/remove projects through Sanity Studio
- ✅ Upload and manage project images with hotspot cropping
- ✅ Rich text content with code blocks and embedded images
- ✅ Project categorization and status tracking
- ✅ Technology tags and live/GitHub links
- ✅ Project gallery with multiple images
- ✅ Featured projects highlighting
- ✅ Custom display ordering

### Sanity Studio Access

Visit [http://localhost:3000/studio](http://localhost:3000/studio) (development) or `your-domain.com/studio` (production) to access the Sanity Studio and manage your projects.

### Project Schema Structure

The project schema includes these fields:

```typescript
{
  title: string;              // Project title
  slug: string;               // URL-friendly identifier
  description: string;        // Brief description for cards
  content: PortableText[];    // Detailed content with rich text
  image: SanityImage;         // Main project image
  gallery: SanityImage[];     // Additional project images
  technologies: string[];     // Technology stack
  category: string;           // Project category
  status: string;             // Project status
  liveUrl?: string;           // Live project URL
  githubUrl?: string;         // GitHub repository URL
  featured: boolean;          // Featured project flag
  order: number;              // Display order
}
```

### Content Types Supported

- **Rich Text**: Headings, paragraphs, lists, quotes
- **Code Blocks**: Syntax-highlighted code snippets
- **Images**: With alt text, captions, and hotspot cropping
- **Links**: External and internal links
- **Galleries**: Multiple images per project

## 📧 Contact System

### Advanced Contact Form Features

- **Two-Step Verification**: Initial form submission shows reCAPTCHA
- **reCAPTCHA Integration**: Google reCAPTCHA v2 for spam protection
- **Email Automation**: Dual email system (notification + auto-reply)
- **Professional Styling**: HTML email templates with brand colors
- **Error Handling**: Comprehensive error states and user feedback
- **Mobile Optimized**: Touch-friendly form controls

### Email Configuration

The contact system supports various SMTP providers:

**Gmail Setup:**

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password  # Use App Password, not regular password
```

**SendGrid Setup:**

```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### reCAPTCHA Setup

1. **Get reCAPTCHA Keys**: Visit [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin/create)
2. **Choose reCAPTCHA v2**: Select "I'm not a robot" checkbox
3. **Add Domains**:
   - Development: `localhost`
   - Production: `your-domain.com`
4. **Update Environment Variables**: Add keys to `.env.local`

For detailed setup instructions, see [RECAPTCHA_SETUP.md](./RECAPTCHA_SETUP.md)

## ⚡ Performance & Technical Features

### Performance Optimizations

- **Dynamic Imports**: Heavy components (WebGL, animations) loaded on-demand
- **Image Optimization**: Next.js Image component with proper sizing
- **CSS-in-JS**: Styled-components for dynamic styling
- **Bundle Splitting**: Automatic code splitting with Next.js
- **Turbopack**: Fast development builds with `--turbopack` flag

### Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color combinations
- **Alt Text**: Comprehensive image descriptions

### Browser Support & Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Responsive**: iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement**: Graceful degradation for older browsers
- **WebGL Fallbacks**: Alternative experiences for non-WebGL browsers

### Development Features

- **TypeScript**: Full type safety with strict mode enabled
- **ESLint**: Code quality and consistency enforcement
- **Hot Reload**: Instant development feedback
- **Error Boundaries**: Graceful error handling in production
- **Environment Variables**: Secure configuration management

## 🎯 Customization Guide

### Updating Personal Information

1. **Contact Details**: Edit `lib/data.ts`

```typescript
export const contactInfo = {
  email: "your-email@example.com",
  emailHref: "mailto:your-email@example.com",
};

export const socialLinks = [
  // Update your social media links
];
```

2. **Site Metadata**: Update `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name - Web Developer",
  description: "Your description here...",
  // Update other metadata
};
```

### Styling Customization

1. **Color Scheme**: Modify CSS variables in `app/globals.css`

```css
:root {
  --background: 0 0% 3.9%; /* Dark background */
  --foreground: 0 0% 98%; /* Light text */
  /* Customize accent colors */
}
```

2. **Fonts**: Update font imports in `app/layout.tsx`
3. **Component Styles**: Modify Tailwind classes in individual components

### Adding New Sections

1. **Create Component**: Add new section component in `components/`
2. **Update Page**: Import and add to `app/page.tsx`
3. **Update Navigation**: Add to nav items in `components/Navigation.tsx`

## � Deployment

### Vercel (Recommended)

1. **Connect Repository**:
   - Fork this repository
   - Connect to Vercel dashboard
   - Import project

2. **Environment Variables**:
   - Add all `.env.local` variables to Vercel
   - Use Vercel's environment variables UI

3. **Domain Configuration**:
   - Update reCAPTCHA domains to include production URL
   - Configure custom domain if desired

### Alternative Platforms

**Netlify:**

- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18+

**Railway/Heroku:**

- Add environment variables
- Configure build settings
- Enable automatic deployments

## 🛠 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Sanity Studio
# Access at /studio route when app is running
```

## 🤝 Contributing

This is a personal portfolio project, but contributions are welcome! If you'd like to:

### Use This Template

1. Fork the repository
2. Update personal information in `lib/data.ts` and `app/layout.tsx`
3. Replace project content with your own
4. Configure your own Sanity project and environment variables
5. Deploy to your preferred platform

### Report Issues or Suggest Improvements

- Open an issue on GitHub
- Provide detailed description and steps to reproduce
- Include browser/device information if relevant

### Code Contributions

- Follow the existing code style and conventions
- Ensure TypeScript types are properly defined
- Test on multiple devices and browsers
- Update documentation if needed

## 📚 Learning Resources

This project showcases various modern web development concepts:

- **Next.js 15**: App Router, Server Components, API Routes
- **React 19**: Latest React features and patterns
- **TypeScript**: Advanced typing and strict mode usage
- **Tailwind CSS 4**: Utility-first CSS framework
- **Sanity CMS**: Headless CMS integration
- **Three.js**: 3D graphics and WebGL
- **Email Integration**: SMTP configuration and templates
- **Security**: reCAPTCHA implementation and validation

## 🔧 Troubleshooting

### Common Issues

**Build Errors:**

- Ensure all environment variables are set
- Check Node.js version (18+ required)
- Clear `.next` folder and rebuild

**Sanity Issues:**

- Verify project ID and dataset in environment variables
- Check API permissions and tokens
- Ensure schema is properly deployed

**Email Issues:**

- Verify SMTP credentials and host settings
- Check firewall/security settings
- Test with different email providers

**reCAPTCHA Issues:**

- Verify site and secret keys
- Check domain configuration
- Ensure both client and server keys are set

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

### MIT License Summary

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❗ Limitation of liability
- ❗ No warranty

---

**Built with ❤️ by [Rachid Oudouch](https://github.com/Ra-Wo)**

_Showcasing modern web development with Next.js, TypeScript, and creative design._
