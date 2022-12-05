export interface ICountry {
  name: { common: string; offocial: string; nativeName: string };
  population: number;
  region: string;
  subregion: string;
  currencies: { any: { name: string; symbol: string } };
  tld: string[];
  languages: { any: string };
  borders: string[];
  capital: string;
  flags: { png: string; svg: string };
  continents: string[];
}
