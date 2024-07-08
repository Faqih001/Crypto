import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from "App";

// Currencies component is a functional component that returns a Box component with a list of Currencies
const Currencies = ({name, image, currentPrice, marketCap, pickedCurrency, id}) => {
  
  // useContext is used to get the values from the AppContext provider in App.js
  const {vsCurrency ,setCurrency, setShowCapSide} = useContext(AppContext);

  // numberWithSpaces function is used to add space between every 3 digits in a number
  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  // selectedCoinPricesStyle function is used to change the color of the text based on the selected currency
  const selectedCoinPricesStyle = () => {
    return id === pickedCurrency ? "rgb(211 211 211)" : "rgb(183 183 183 / 62%)"
  }

  // changeCoin function is used to change the currency when a currency is clicked
  const changeCoin = () => {
    setCurrency(id);
    setShowCapSide(false);
  }

  // currencySymbol is used to get the currency symbol based on the selected currency
  const currencySymbol = marketCap.toLocaleString('en-US', { style: 'currency', currency: `${vsCurrency}`,}).replace(/,*[0-9]+./g, '');

  return (
    <Box onClick={changeCoin} sx={{
      p: 1,
      mb: 1,
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      background: (id === pickedCurrency ? "rgb(0,141,255)" : "transparent"),
      borderRadius: 3,
      transition: "background .15s ease-in-out",
      cursor: "pointer"
    }}>
      <Box sx={{
        display: "flex"
      }}>
        <Box component={"img"} src={image} alt={"coin_image"} sx={{
          width: "42px",
          mr: 2
        }} />
        <Box sx={{my: "auto"}}>
          <Typography component={"h4"} fontSize={"1rem"} fontWeight={600} sx={{lineHeight: 1}}>{name}</Typography>
          <Typography component={"p"} fontSize={".7rem"} sx={{lineHeight: 1.6, color: selectedCoinPricesStyle()}} >{currencySymbol}{numberWithSpaces(marketCap)}</Typography>
        </Box>
      </Box>
      <Typography component={"p"} fontSize={".7rem"} sx={{alignSelf: "self-end", pb: .5, color: selectedCoinPricesStyle()}}>{currentPrice.toLocaleString('en-US', { style: 'currency', currency: `${vsCurrency}`,})}
      </Typography>
    </Box>
  );
}

export default Currencies;
