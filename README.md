# Can Nakliyat - Modern Website

This is a modern website for Can Nakliyat built with Vite, React, and React Router.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Building for Production

To build the project for production:

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file handles:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing configuration

## Project Structure

- `src/app/` - Main application code
  - `components/` - React components
  - `pages/` - Page components
  - `routes.ts` - Route configuration
- `src/assets/` - Image assets
- `src/styles/` - CSS and styling files
- `public/` - Static public files

## Technologies

- **Vite** - Build tool and dev server
- **React** - UI library
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
