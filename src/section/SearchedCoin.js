import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from 'App';

// SearchedCoin component is a functional component that returns a Box component with a list of Searched Coins
const SearchedCoin = ({name, image, id, pickedCurrency}) => {

  // useContext is used to get the values from the AppContext provider in App.js
  const {setCurrency, setShowCapSide} = useContext(AppContext);

  // changeCoin function is used to change the currency when a currency is clicked
  const changeCoin = () => {
    setCurrency(id);
    setShowCapSide(false);
  }

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
      cursor: "pointer",
      width: "100%"
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
        </Box>
      </Box>
    </Box>
  );
}

export default SearchedCoin;
