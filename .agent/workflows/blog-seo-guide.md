# Blog & SEO Strategy Guide

This guide explains the blog infrastructure and SEO strategy for alfirma.com.

---

## Overview

Al Firma is a web/mobile development agency targeting **France** and **Morocco**. The blog serves to:
- Capture organic search traffic for high-value keywords
- Establish authority in web/mobile development
- Generate leads through CTAs linking to Calendly

---

## Blog Architecture

### File Structure
```
src/
├── app/blog/
│   ├── page.tsx              # Blog listing (server component)
│   ├── [slug]/page.tsx       # Individual posts (MDX rendering)
│   └── components/
│       ├── BlogNavBar.tsx    # Navigation (client)
│       ├── BlogContent.tsx   # Category filter (client)
│       ├── BlogCard.tsx      # Post preview card
│       ├── BlogHeader.tsx    # Post header
│       └── ArticleSchema.tsx # JSON-LD structured data
├── content/blog/             # MDX blog posts
│   └── *.mdx
└── lib/blog.ts               # Server-side utilities (uses fs)
```

### Key Constraint
> **IMPORTANT**: `lib/blog.ts` uses Node.js `fs` module. Never import it from client components (`"use client"`). Use inline types/constants instead.

---

## Adding New Blog Posts

### 1. Create MDX File
Create `src/content/blog/{slug}.mdx`:

```yaml
---
title: "Your Title Here"
slug: "your-slug-here"
description: "150-160 char description for meta tags"
date: "2026-01-09"
author: "Karim Benchekroun"
category: "mobile" | "web" | "design" | "backend" | "business"
tags: ["tag1", "tag2"]
image: "/assets/illustrations/your-image.png"
imageAlt: "Alt text for image"
featured: false
locale: "fr"
---

Your markdown content here...
```

### 2. Build & Verify
```bash
npm run build
# Verify in sitemap: out/sitemap.xml
```

---

## SEO Implementation

### Structured Data (JSON-LD)

| Schema | Location | Purpose |
|--------|----------|---------|
| `Organization` | `layout.tsx` | Company info for knowledge panel |
| `WebSite` | `layout.tsx` | Site-wide search eligibility |
| `LocalBusiness` | `[city]/page.tsx` | Local SEO for each city |
| `Article` | `blog/[slug]/page.tsx` | Rich snippets in search results |
| `FAQPage` | `home/page.tsx` | FAQ rich snippets |
| `Service` | `home/page.tsx` | Service offerings |

### Location Pages

8 dedicated city pages for local SEO:
- **France**: Paris, Nantes, Angers, Cholet
- **Morocco**: Casablanca, Rabat, Tanger, Marrakech

Each has unique metadata, keywords, and `LocalBusinessSchema` with coordinates.

### Sitemap

Auto-generated in `src/app/sitemap.ts`:
- All static pages
- All location pages
- All blog posts (dynamically from MDX files)

---

## Target Keywords

### High-Intent (Commercial)
| Keyword | Volume | Article |
|---------|--------|---------|
| `prix application mobile` | 1,300/mo | Combien coûte une application mobile |
| `création application mobile` | 1,600/mo | Guide créer application mobile |
| `agence développement mobile` | 720/mo | Comment choisir son agence |

### Informational
| Keyword | Volume | Article |
|---------|--------|---------|
| `react native vs flutter` | 880/mo | React Native vs Flutter |
| `django vs node` | 480/mo | (To be created) |
| `ux design application mobile` | 390/mo | (To be created) |

### Local SEO
| Keyword | Target |
|---------|--------|
| `agence web casablanca` | City page + local content |
| `développeur freelance paris` | France-focused articles |
| `création site web maroc` | Morocco-focused articles |

---

## Content Guidelines

### Article Structure
```markdown
# H1: Main Title (include primary keyword)

**Intro** (100-150 words, keyword in first paragraph)

## H2: Section (secondary keywords)
### H3: Subsection

Content with internal links to:
- Service pages: /home#SECTION_A_PROPOS
- Location pages: /paris/, /casablanca/
- Other articles: /blog/related-post/

## FAQ Section (for featured snippets)
### Question 1?
Answer...

## Conclusion
CTA linking to Calendly
```

### Internal Linking
Each article should include:
- 2-3 links to service sections
- 1-2 links to location pages
- 2-3 links to related articles
- 1 CTA to contact/Calendly

---

## Category System

| Category | Color | Target Topics |
|----------|-------|---------------|
| `mobile` | blue | React Native, Flutter, iOS, Android |
| `web` | green | Next.js, Django, sites web |
| `design` | purple | UX/UI, Figma, accessibility |
| `backend` | orange | APIs, Django, Node.js, databases |
| `business` | rose | Pricing, entrepreneurship, startup |

---

## Troubleshooting

### "Module not found: Can't resolve 'fs'"
**Cause**: Client component importing from `lib/blog.ts`  
**Fix**: Inline the types and `CATEGORY_CONFIG` in the client component

### Images not displaying
**Cause**: Missing image in `/public/assets/`  
**Fix**: Add image and update frontmatter path

### Post not in sitemap
**Cause**: Missing or invalid frontmatter  
**Fix**: Verify YAML syntax and required fields

---

## Future Improvements

- [ ] Add more city pages (Lyon, Marseille, Fès, Agadir)
- [ ] Create dedicated service pages (not anchor links)
- [ ] Add `hreflang` tags for multi-region SEO
- [ ] Implement `AggregateRating` schema when reviews available
- [ ] Optimize large images (favicon.ico, logo.png)
