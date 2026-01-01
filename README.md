# Rachid Oudouch - Portfolio

A modern, responsive portfolio website built with Next.js 15, featuring dark theme with purple accents, glass morphism effects, and dynamic project management through Sanity CMS.

## ✨ Features

- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS 4
- **CMS Integration**: Sanity for dynamic project content
- **Contact System**: Email automation with reCAPTCHA protection
- **Responsive Design**: Mobile-first with smooth animations

## 🚀 Quick Start

1. **Clone and install:**

```bash
git clone https://github.com/Ra-Wo/portfolio-v2.git
cd portfolio-v2
npm install
```

2. **Set up environment:**

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your credentials (see `.env.local.example` for details).

3. **Run development server:**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Required Services

- **Sanity CMS**: [sanity.io](https://sanity.io) - Project content management
- **reCAPTCHA**: [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create) - Contact form protection
- **SMTP Email**: Gmail, Brevo, or SendGrid - Contact form delivery

### Customization

All personal data and site configuration is centralized in `lib/data.ts`:

```typescript
export const personalInfo = { name, role, tagline, avatar, resume };
export const contactInfo = { email };
export const socialLinks = [
  /* GitHub, LinkedIn, etc. */
];
export const heroData = {
  /* Hero section content */
};
export const footerData = {
  /* Footer content */
};
export const siteMetadata = { title, description, keywords, author, urls };
```

Everything is configured in one place - no need to edit other files!

**Note**: To update the About section content (bio, description, etc.), edit the `components/About.tsx` file directly.

## 🔗 Connect

- **Portfolio**: [oudouch.vercel.app](https://oudouch.vercel.app)
- **Email**: [rashidoudouch@gmail.com](mailto:rashidoudouch@gmail.com)
- **GitHub**: [@Ra-Wo](https://github.com/Ra-Wo)
- **LinkedIn**: [rachid-oudouch](https://www.linkedin.com/in/r-oudouch)

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
