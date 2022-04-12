import { Country } from "../lib/country";

const countryData: Country[] = require("../data/country_data.json").features;
countryData.sort((a, b) => {
  return a.properties.FLAG[1].localeCompare(b.properties.FLAG[1]);
});
function generateKeyNew(list: any[]) {
  localStorage.clear();
  const randNum = Math.floor(Math.random() * 820000000);
  const SHUFFLE_KEY = process.env.REACT_APP_SHUFFLE_KEY || "1";
  const key = Math.floor(randNum / parseInt(SHUFFLE_KEY + "5")) % list.length;
  return key;
}
  const key = generateKeyNew(countryData);
export const answerCountry = countryData[key];
export const answerName = answerCountry.properties.NAME;
console.log(answerName);