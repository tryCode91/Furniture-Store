import { Box, Button, Card, CardContent, CardHeader, CardMedia, Container, Divider, IconButton, Typography } from "@mui/material";
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from "axios";

const Detail = () => {
  const navigate = useNavigate();
  //hämtar object från bed/char/sofa
  const location = useLocation();
  const { from } = location.state;

  //spara id för senare
  const userIdFromStorage = JSON.parse(sessionStorage.getItem("userId"));

  //lagrar i state variabler som ska skickas till databasen.
  const [insertIntoDB, setIntoDB] = useState({
    choosenItem: from,
    userId: userIdFromStorage,
    quantity: 1,
  });
  
  //update database with shoppingcart items 
  const handleCart = async (e) => {
    e.preventDefault();
    await API();
  };

  const API = () => {
    setIntoDB((state) => {
      return {
        choosenItem: state.choosenItem,
        userId: state.userId,
        quantity: state.quantity + 1
      }
    });
    const sendPostRequest = { ...insertIntoDB };
    console.log("Sending to API: ",sendPostRequest);
    const url = "http://localhost/react-php/react-backend/Api/addShoppingCart.php";
    //sending data as object
    return axios.post(url, sendPostRequest)
      .then((res) => {
        console.log("Response from Cart Script: ", res.data);
      }
      )
      .catch(err => console.log(err));
  }

  const goBack = () => {
    navigate(-1, { replace: true });
  }

  useEffect(() => {
    sessionStorage.setItem("cart", insertIntoDB);
  }, [insertIntoDB]);
  return (
    <div>
      <Container sx={{ m: 3 }} >
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ marginBottom: 2 }}
        >
          <Button variant="contained" color="primary" onClick={goBack} sx={{ height: 40 }}>
            Go Back
          </Button>
        </Box>
        <Card variant="outlined" sx={{ maxWidth: 1200 }} style={{ background: "#1e88e5" }}>
          <CardHeader
            avatar={
              <IconButton aria-label="settings">
                <LocalHotelIcon sx={{ fontSize: "100px", color: "white" }} />
              </IconButton>
            }
            title={`${from.title}`}
            titleTypographyProps={{ variant: 'h1', color: "#fff" }}
          />
          <CardMedia
            component="img"
            height="600"
            image={require(`../../assets/furniture/${from.type}/${from.name}.webp`)}
            alt={`${from.type}`}
          />
          <CardContent>
            <Typography sx={{ color: "white" }} variant="h6" color="text.primary">{from.name}</Typography>
            <Typography sx={{ color: "white" }} variant="paragraph" color="text.secondary">
              {from.description}
            </Typography>

            <Divider sx={{ marginTop: 2, marginBottom: 2, borderBottomWidth: 5, bgColor: "secondary.white" }} variant="fullWidth" />

            <Typography sx={{ color: "white" }} variant="h6" >Price: {from.price} SEK</Typography>
            <Typography variant="h6" align="right" sx={{ color: "white" }}>
              <div onClick={(e) => handleCart(e)}>
                <IconButton>
                  <ShoppingCartIcon aria-label="shoppingcart" sx={{ fontSize: "50px", color: "white" }} />
                </IconButton>
              </div>
              Add To Cart
            </Typography>
          </CardContent>
        </Card>
      </Container >
    </div>
  );
};
export default Detail;
