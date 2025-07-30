# Rachid Oudouch - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my journey as a Full-Stack Developer. Features a dark theme with purple accents, glass morphism effects, and smooth animations.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: shadcn/ui with custom modifications
- **Icons**: Lucide React
- **Animations**: Framer Motion and custom CSS animations
- **Fonts**: Inter (sans), Poppins (heading), JetBrains Mono (mono), Pacifico (logo)

## 🎨 Design Features

- **Dark Theme Only**: Consistent dark aesthetic throughout
- **Purple/Violet Accents**: Custom gradient color scheme
- **Glass Morphism**: Modern glassmorphism effects for navigation
- **Responsive Design**: Mobile-first approach with seamless desktop scaling
- **Smooth Animations**: Interactive hover effects and scroll animations
- **WebGL Background**: Dynamic visual elements

## 📋 Sections

- **Hero**: Dynamic introduction with animated text trails
- **About**: Professional journey and core values
- **Skills**: Interactive technology showcase with icons
- **Navigation**: Glass morphism navbar with smooth scroll

## 🛠 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account (for projects content management)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your Sanity project details:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📞 Contact

- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]
- **Email**: [Your Email]

## 🏗 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with fonts and theme
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components and custom UI primitives
│   ├── About.tsx            # About section component
│   ├── Hero.tsx             # Hero section with animations
│   ├── Navigation.tsx       # Main navigation with mobile menu
│   ├── Projects.tsx         # Projects showcase with Sanity CMS
│   └── Skills.tsx           # Skills showcase component
├── lib/
│   ├── sanity.ts            # Sanity client configuration and types
│   └── utils.ts             # Utility functions
└── .env.local.example       # Environment variables template
```

## 📊 Content Management

This portfolio uses **Sanity CMS** for managing project content. The Projects section dynamically fetches data from Sanity, allowing you to:

- Add/edit/remove projects through Sanity Studio
- Upload project images
- Manage project metadata (technologies, links, etc.)
- Control project order and featured status

### Sanity Schema Setup

Your Sanity studio should include a `project` document type with these fields:

```javascript
// project.js schema
{
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required(),
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
}
```

## 🎯 Features

- **Performance Optimized**: Dynamic imports for heavy components
- **Accessibility First**: Semantic HTML, ARIA labels, keyboard navigation
- **Mobile Responsive**: Touch-friendly interface with proper breakpoints
- **SEO Ready**: Optimized meta tags and semantic structure
- **Type Safe**: Full TypeScript coverage with strict mode

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use this template for your own portfolio, feel free to fork and customize it!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
