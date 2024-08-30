# Country Dashboard Application

This is a Country Dashboard built with Next.js and TypeScript that fetches country data from the REST Countries API and displays it in an interactive, user-friendly interface.

## Features

- **API Integration**: Fetches country data from the [REST Countries API](https://restcountries.com/v3.1/all).
- **Data Manipulation**:
  - Sort countries by population (ascending and descending).
  - Filter countries by region.
  - Search countries by name or capital.
- **UI Components**:

  - Responsive grid layout to display country cards.
  - Loader Component load country cards.
  - Each card shows the country's flag, name, capital, population, and region.
  - Detailed view for each country with additional information like currencies, languages, and time zones.

- **State Management**: Uses React hooks and Context API for managing local and global states.

- **Performance Optimization**:
  - Next.js `Image` component for optimized image loading.


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


First, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
