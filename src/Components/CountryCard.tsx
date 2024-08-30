import React from "react";
import { Country } from "../interface/Country";
import Image from "next/image";
import styles from "./countryCard.module.css";

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
  return (
    <div className={styles.countryCard} onClick={onClick}>
      <Image
        className={styles.countryImage}
        src={country.flags.png}
        alt={country.name.common}
        width={200}
        height={120}
      />
      <h3 className={styles.countryName}>{country.name.common}</h3>
      <p className={styles.countryInfo}>
        <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}
      </p>
      <p className={styles.countryInfo}>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p className={styles.countryInfo}>
        <strong>Region:</strong> {country.region}
      </p>
    </div>
  );
};

export default CountryCard;
