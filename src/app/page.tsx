"use client";

import React, { useState, useEffect } from "react";
import { useCountries } from "../hooks/useCountries";
import {
  sortCountriesByPopulation,
  getUniqueRegions,
  searchCountries,
} from "../utils/countryUtils";
import Link from "next/link";
import CountryCard from "@/Components/CountryCard";
import Loader from "@/Components/Loader";

const HomePage: React.FC = () => {
  const { countries, loading, error } = useCountries();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [region, setRegion] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [regions, setRegions] = useState<string[]>([]);

  // Extract unique regions when countries data is available
  useEffect(() => {
    if (countries) {
      const uniqueRegions = getUniqueRegions(countries);
      setRegions(["All", ...uniqueRegions]);
    }
  }, [countries]);

  const filteredCountries =
    region === "All"
      ? countries
      : countries.filter((country) => country.region === region);
  const searchedCountries = searchCountries(filteredCountries, searchQuery);
  const sortedCountries = sortCountriesByPopulation(
    searchedCountries,
    sortOrder
  );

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="filtersContainer">
        <input
          type="text"
          placeholder="Search by name or capital..."
          className="inputField"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="selectField"
          onChange={(e) => setRegion(e.target.value)}
        >
          {regions.map((reg) => (
            <option key={reg} value={reg}>
              {reg}
            </option>
          ))}
        </select>
        <select
          className="selectField"
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        >
          <option value="asc">Population Ascending</option>
          <option value="desc">Population Descending</option>
        </select>
      </div>

      <div className="country-grid">
        {sortedCountries.map((country) => (
          <Link
            className="link"
            key={country.name.common}
            href={`/country/${country.name.common}`}
          >
            <CountryCard country={country} onClick={() => {}} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
