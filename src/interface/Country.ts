export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  population: number;
  region: string;
  flags: {
    png: string;
  };
  languages: { [key: string]: string };
  currencies: { [key: string]: { name: string } };
  timezones: string[];
}
export interface Currency {
  name: string;
  symbol: string;
}
