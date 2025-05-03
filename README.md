# Cologne Zoo Dashboard

## Overview
The Cologne Zoo Dashboard is a web application that helps zookeepers monitor and manage animals in the zoo. It displays a table of animals with their relevant health data and information.

## Technologies
- Nuxt.js 3
- Vue.js 3
- TypeScript
- TailwindCSS
- Vitest for testing

## Prerequisites
- Node.js (v16+)
- pnpm (recommended) or npm

## Installation
- pnpm install

# Start development server
pnpm run dev

# Run linting
pnpm run lint

# Format code
pnpm run format


## Project Structure
- `/components` - Vue components (e.g., TheAnimalTable.vue)
- `/composables` - Reusable Vue composition functions
- `/server/api` - Backend API endpoints
- `/utils` - Utility functions (e.g., age calculation)
- `/types.ts` - TypeScript type definitions
- `/app.vue` - Main application component

## API
The application uses a simple API with the following endpoints:

GET `/api/animals` - Returns a list of all animals in the zoo

## Support
Please contact to `mateenqazi125@gmail.com` for any issues or feature requests.