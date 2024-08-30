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

