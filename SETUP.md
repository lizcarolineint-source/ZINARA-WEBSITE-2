# Zinara Digital Website - Setup & Configuration Guide

## Project Overview

This is a professional, authority-driven website for Zinara Digital showcasing AI systems architecture and digital strategy services. The site is built with React 19, Tailwind CSS 4, Express, and tRPC with full SEO optimization, analytics integration, and accessibility compliance.

## Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Type check
pnpm check

# Format code
pnpm format
```

The dev server runs on `http://localhost:3000`

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Configuration

### Analytics Integration

Update the following IDs in `client/src/App.tsx`:

```tsx
<Analytics 
  gtmId="GTM-XXXXXXX"        // Your Google Tag Manager ID
  ga4Id="G-XXXXXXXXXX"       // Your Google Analytics 4 ID
/>
```

### Tidio Chatbot Integration

Update the project ID in `client/src/App.tsx`:

```tsx
<TidioChat projectId="YOUR_TIDIO_PROJECT_ID" />
```

To get your Tidio project ID:
1. Go to [Tidio Dashboard](https://www.tidio.com/)
2. Create or select your project
3. Copy the project ID from settings

### Contact Form Notifications

The contact form automatically sends notifications to the project owner through the `trpc.system.notifyOwner` mutation. This is already configured and requires no additional setup.

## Project Structure

```
client/
  src/
    components/          # Reusable UI components
      Header.tsx         # Navigation header
      Footer.tsx         # Footer with links
      Section50-50.tsx   # 50/50 asymmetric layout
      ContactForm.tsx    # Contact form with validation
      SEOMeta.tsx        # SEO meta tags helper
      Analytics.tsx      # GA4 & GTM integration
      TidioChat.tsx      # Tidio chatbot integration
    pages/
      Home.tsx           # Homepage with hero and sections
      Contact.tsx        # Contact page
    App.tsx              # Main app component
    index.css            # Global styles with design tokens
  public/                # Static assets

server/
  routers.ts             # tRPC procedures
  db.ts                  # Database queries
  contact.test.ts        # Contact form validation tests

drizzle/
  schema.ts              # Database schema
```

## Design System

### Colors

- **Background**: Deep navy (#0f172a)
- **Foreground**: Light slate (#f1f5f9)
- **Primary**: Cyan (#0891b2)
- **Secondary**: Teal (#14b8a6)
- **Accent**: Cyan (#06b6d4)

### Typography

- **Headings**: Bold with tight tracking
- **Body**: Clear, readable sans-serif
- **Spacing**: 8px grid system

### Layout

- **50/50 Asymmetric**: Text left, image right (responsive)
- **Desktop**: 1024px+
- **Tablet**: 768-1023px
- **Mobile**: <768px

## SEO & Meta Tags

All pages include:
- Meta descriptions
- Open Graph tags (og:title, og:description, og:image, og:type)
- Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- JSON-LD structured data
- Canonical URLs

Update the following in each page component:

```tsx
<SEOMeta
  title="Page Title"
  description="Page description"
  canonical="https://zinara.digital/page"
  ogImage="https://zinara.digital/og-image.png"
  structuredData={/* JSON-LD object */}
/>
```

## Accessibility (WCAG 2.1 AA)

The website implements:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High color contrast (4.5:1 for text)
- Focus indicators
- Screen reader compatibility
- Responsive design

Test accessibility with:
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- Chrome DevTools Lighthouse

## Contact Form

The contact form:
- Validates all fields with Zod
- Sends notifications to project owner
- Provides user feedback with toast notifications
- Handles errors gracefully

Form fields:
- **Name**: Required, min 2 characters
- **Email**: Required, valid email format
- **Company**: Optional
- **Message**: Required, min 10 characters

## Performance Optimization

- **Code Splitting**: Vite handles automatic code splitting
- **Lazy Loading**: Images use native lazy loading
- **Asset Optimization**: Vite optimizes assets automatically
- **Tree Shaking**: Unused code is removed in production

## Testing

Run the test suite:

```bash
pnpm test
```

Tests include:
- Contact form validation (22 tests)
- Auth logout functionality
- Form field validation
- Email format validation
- Message length validation

## Deployment

### Manus Hosting (Recommended)

The website is ready to deploy on Manus:

1. Click the "Publish" button in the Management UI
2. A checkpoint must be created first
3. The site will be available at `https://your-domain.manus.space`

### Custom Domain

To use a custom domain:
1. Go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Environment Variables

Required environment variables (automatically injected):
- `DATABASE_URL`: Database connection string
- `JWT_SECRET`: Session signing secret
- `VITE_APP_ID`: OAuth app ID
- `OAUTH_SERVER_URL`: OAuth server URL

## Troubleshooting

### Dev Server Issues

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Restart dev server
pnpm dev
```

### TypeScript Errors

```bash
# Check for errors
pnpm check

# Fix formatting
pnpm format
```

### Build Issues

```bash
# Clean build
rm -rf dist
pnpm build
```

## Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Documentation](https://react.dev/)
- [tRPC Documentation](https://trpc.io/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org Structured Data](https://schema.org/)

## Support

For questions or issues:
- Email: hello@zinara.digital
- Use the contact form on the website
- Check the accessibility compliance documentation

## License

© 2026 Zinara Digital. All rights reserved.
