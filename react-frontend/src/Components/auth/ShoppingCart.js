import { IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../App.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCart = () => {
  const [cart, setCart] = useState();
  const [loading, setLoading] = useState(true);

  const deleteProduct = async (e, productId) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("productId", productId);
    const url = "http://localhost/react-php/react-backend/Api/deleteFromShoppingCart.php";
    await axios.post(url, formData)
      .then(res => {
        if (res.data !== null) {
          console.log("Response From Backend/Delete: ", res.data);
          if (res.data === "Success") {
            alert("Product Deleted From Cart!");
            window.location.reload();
          }
        }
      })
      .catch((err) => console.log(err))
  }

  const getCart = async () => {
    const userId = JSON.parse(sessionStorage.getItem("userId"));
    const url = "http://localhost/react-php/react-backend/Api/showShoppingCart.php";
    await axios.post(url, userId)
      .then(res => {
        if (res.data === "0") {
          return;
        }
        console.log(res.data);
        if (typeof (res.data) !== "undefined") {
          setCart(res.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      {loading ? <Typography sx={{ marginTop: 4 }} variant="h5">No items In Cart</Typography>
        :
        <div>
          <TableContainer sx={{ maxWidth: 650, marginTop: 10 }} align="center" component={Paper}>
            <Typography variant="h4">
              Your items
            </Typography>
            <Table sx={{ maxWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                 {cart.map((cartStorage) => (
                   <TableRow key={cartStorage.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                     <TableCell component="th" scope="row">{cartStorage.name}</TableCell>
                     <TableCell align="right">{cartStorage.type}</TableCell>
                     <TableCell align="right">{cartStorage.price}</TableCell>
                     <TableCell align="right">{cartStorage.quantity}</TableCell>
                     <TableCell onClick={(e) => deleteProduct(e, cartStorage.id)} align="right">
                         <IconButton aria-label="settings">
                           <DeleteIcon style={{ color: "#FF0000" }} />
                         </IconButton>
                     </TableCell>
                   </TableRow>
                 ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography sx={{ marginTop: 3 }} variant="h5" align="right">Total price</Typography>
        </div>
      }
    </div>
  )
};
export default ShoppingCart;