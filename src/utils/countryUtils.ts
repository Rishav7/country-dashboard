import { Country } from "../interface/Country";

// Sort countries by population
export const sortCountriesByPopulation = (
  countries: Country[],
  order: "asc" | "desc"
) => {
  return [...countries].sort((a, b) =>
    order === "asc" ? a.population - b.population : b.population - a.population
  );
};

// Filter countries by region
export const getUniqueRegions = (countries: Country[]): string[] => {
  const regions = countries.map((country) => country.region).filter(Boolean);
  const uniqueRegions = Array.from(new Set(regions));
  return uniqueRegions;
};

// Search countries by name or capital
export const searchCountries = (countries: Country[], query: string) => {
  return countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase()) ||
      (country.capital &&
        country.capital[0].toLowerCase().includes(query.toLowerCase()))
  );
};
