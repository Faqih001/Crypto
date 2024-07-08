import axios from 'axios';

// Get All Currencies from API with vsCurrency as parameter (usd, eur, etc) and return the data as JSON object 
const getAllCurrencies = async (vsCurrency) => {
  const apiLink = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  const response = await axios.get(apiLink);
  return response.data;
}

// Get Coin Data from API with coin as parameter and return the data as JSON object
const getCoinData = async (coin) => {
  const apiLink = `https://api.coingecko.com/api/v3/coins/${coin}`;
  const response = await axios.get(apiLink);
  return response.data;
}

const search = async (searchValue) => {
  const apiLink = `https://api.coingecko.com/api/v3/search?query=${searchValue}`;
  const response = await axios.get(apiLink);
  return response.data;
}

export { getAllCurrencies, getCoinData, search };
