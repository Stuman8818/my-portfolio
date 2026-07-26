# Portfolio Asset Inventory

This inventory documents the current portfolio assets, links, and project content without moving, renaming, or deleting anything.

## 1. Files in the public directory

| File                                                       | Type  | Status | Notes                                                                       |
| ---------------------------------------------------------- | ----- | ------ | --------------------------------------------------------------------------- |
| public/ColletteHealth.png                                  | Image | Active | Used as a screenshot for the Collette Health project                        |
| public/Dave_Stewart_Frontend_Software_Developer_Resume.pdf | PDF   | Active | Used as the résumé download link                                            |
| public/favicon.ico                                         | Icon  | Active | Used by Next.js as the site favicon via the default public asset convention |

## 2. Image and screenshot usage

### public/ColletteHealth.png

- Current usage: Used in the Collette Health project card in [src/app/components/portfolio-content.tsx](src/app/components/portfolio-content.tsx)
- Rendered as:
  - Image source: /ColletteHealth.png
  - Alt text: "Collette Health screenshot"
- Notes: This is the only screenshot currently referenced from the public directory.

### public/Dave_Stewart_Frontend_Software_Developer_Resume.pdf

- Current usage: Used as the résumé download target in [src/app/components/portfolio-header.tsx](src/app/components/portfolio-header.tsx)
- Notes: This file is referenced via a Google Drive download link rather than a direct local public path.

### public/favicon.ico

- Current usage: Used implicitly as the site favicon through Next.js public asset handling
- Notes: No explicit import or hardcoded reference appears in the current source files

## 3. Images that appear unused

No image files in the public directory appear to be completely unused.

However, the current codebase shows only one project image being rendered directly from the public folder:

- [public/ColletteHealth.png](public/ColletteHealth.png)

The favicon is still active through the standard Next.js public assets convention.

## 4. GitHub repository links

The current portfolio references these GitHub links:

- https://github.com/Stuman8818
- https://github.com/DaveStu-Rain

Current source location:

- [src/app/components/portfolio-header.tsx](src/app/components/portfolio-header.tsx)

## 5. Live project links

The following live/demo links are currently present:

- Collette Health: https://www.collettehealth.com/solutions/#VirtualNursing
- Daily Quest Book: https://journal-app-beige-five.vercel.app/
- Indiana Drone Media: https://indianadronemedia.com

Current source location:

- [src/app/components/portfolio-content.tsx](src/app/components/portfolio-content.tsx)

## 6. LinkedIn links

The current portfolio references these LinkedIn links:

- Personal profile: https://www.linkedin.com/in/dave-stewart-engineer
- Rain Engineering company page: https://www.linkedin.com/company/raineng/posts/?feedView=all
- Collette Health company page: https://www.linkedin.com/company/collettehealth/posts/?feedView=all

Current source location:

- [src/app/components/portfolio-header.tsx](src/app/components/portfolio-header.tsx)
- [src/app/components/portfolio-content.tsx](src/app/components/portfolio-content.tsx)

## 7. Résumé download links

The current portfolio includes this résumé download link:

- https://drive.google.com/uc?export=download&id=1h63eHfaUTXZWs-DBjQCKTaYqktYeQTbA

Current source location:

- [src/app/components/portfolio-header.tsx](src/app/components/portfolio-header.tsx)

## 8. Email addresses

No email address is currently present in the portfolio source files.

## 9. Social media links

The current portfolio includes:

- LinkedIn
- GitHub (personal)
- GitHub (Rain Engineering)

Current source location:

- [src/app/components/portfolio-header.tsx](src/app/components/portfolio-header.tsx)

## 10. External URLs found in the project

Other external URLs present in the source include:

- Google Fonts stylesheet in [src/app/layout.tsx](src/app/layout.tsx)
- Google Drive resume download URL in [src/app/components/portfolio-header.tsx](src/app/components/portfolio-header.tsx)
- LinkedIn and GitHub links shown above
- Project/demo URLs shown above

## 11. Existing project names and technology lists

### Project: EBR (Electronic Bench Record)

- Description summary: Manufacturing quality-control and material-tracking application used in Sherwin-Williams plants
- Technology list:
  - React
  - Python
  - MUI
  - JavaScript
  - CSS
  - HTML

### Project: Kellogg's QC Platform

- Description summary: Quality control application for Cheez-It manufacturing processes
- Technology list:
  - AngularJS
  - Node.js
  - Express.js
  - TypeScript
  - SCSS

### Project: Collette Health

- Description summary: Virtual observation and monitoring platform for healthcare use
- Technology list:
  - Next.js
  - MongoDB
  - Tailwind CSS
  - TypeScript
  - JavaScript
- Screenshot asset: [public/ColletteHealth.png](public/ColletteHealth.png)
- Live/demo link: https://www.collettehealth.com/solutions/#VirtualNursing

### Project: Daily Quest Book

- Description summary: Habit-tracking application with journaling and analytics features
- Technology list:
  - Next.js
  - TypeScript
  - MongoDB
  - Tailwind CSS
  - React
- Live/demo link: https://journal-app-beige-five.vercel.app/

### Project: Indiana Drone Media

- Description summary: Drone photography and videography platform for real estate, events, and marketing
- Technology list:
  - Next.js
  - TypeScript
  - MongoDB
  - Tailwind CSS
  - React
- Live/demo link: https://indianadronemedia.com

## 12. Notes for the rebuild

- The current portfolio already contains useful public-facing assets and links that should be preserved
- The screenshot asset [public/ColletteHealth.png](public/ColletteHealth.png) should be retained for reuse if appropriate
- The résumé PDF [public/Dave_Stewart_Frontend_Software_Developer_Resume.pdf](public/Dave_Stewart_Frontend_Software_Developer_Resume.pdf) should also be preserved
- No assets were deleted, renamed, or moved as part of this inventory
