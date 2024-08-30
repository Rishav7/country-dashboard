import React from "react";
import { Country } from "../../../interface/Country";
import styles from "./countryDetails.module.css";
import Image from "next/image";
interface CountryDetailProps {
  country: Country;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country }) => {
  if (!country) return <div>Country not found</div>;

  const formatLanguages = (languages: { [key: string]: string }) => {
    return Object.values(languages).join(", ");
  };

  const formatTimeZones = (timezones: string[]) => {
    return timezones.join(", ");
  };

  const formatCurrencies = (currencies: {
    [key: string]: { name: string; symbol?: string };
  }) => {
    return Object.values(currencies)
      .map(
        (currency) =>
          `${currency.name}${currency.symbol ? ` (${currency.symbol})` : ""}`
      )
      .join(", ");
  };

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>{country.name.common}</h1>
        <Image
          className={styles.countryImage}
          src={country.flags.png}
          alt={country.name.common}
          width={200}
          height={120}
        />
        <p className={styles.info}>
          <span className={styles.label}>Capital:</span>
          <span className={styles.value}>
            {country.capital ? country.capital[0] : "N/A"}
          </span>
        </p>
        <p className={styles.info}>
          <span className={styles.label}>Population:</span>
          <span className={styles.value}>
            {country.population.toLocaleString()}
          </span>
        </p>
        <p className={styles.info}>
          <span className={styles.label}>Region:</span>
          <span className={styles.value}>{country.region}</span>
        </p>
        <p className={styles.info}>
          <span className={styles.label}>Time Zones:</span>
          <span className={styles.value}>
            {country.timezones ? formatTimeZones(country.timezones) : "N/A"}
          </span>
        </p>
        <p className={styles.info}>
          <span className={styles.label}>Languages:</span>
          <span className={styles.value}>
            {country.languages ? formatLanguages(country.languages) : "N/A"}
          </span>
        </p>
        <p className={styles.info}>
          <span className={styles.label}>Currencies:</span>
          <span className={styles.value}>
            {country.currencies ? formatCurrencies(country.currencies) : "N/A"}
          </span>
        </p>
      </div>
    </div>
  );
};

// Fetch country data
export async function getCountryData(name: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  if (!res.ok) {
    throw new Error("Country not found");
  }
  const data: Country[] = await res.json();
  if (data.length === 0) {
    throw new Error("Country not found");
  }
  return data[0];
}

export default async function CountryPage({
  params,
}: {
  params: { name: string };
}) {
  const country = await getCountryData(params.name);

  return <CountryDetail country={country} />;
}
