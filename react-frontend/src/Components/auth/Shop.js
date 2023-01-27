import React from "react"
import "../../App.css"
import { Skeleton, Box, Avatar, Typography } from "@mui/material";
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';

const Shop = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <>
      {/* sofa */}
      <Box sx={{ minWidth: "10vh", marginTop: "20px" }}>
        {loading ?
          (
            <Skeleton variant="rectangular" width={600} height={300} animation="wave" />
          ) : (
            <a href="/furniture?type=sofas"><img src={require(`../../assets/furniture/mainsofa.webp`)} alt="bg" width={700} height={300} /></a>
          )
        }
        <Stack direction="row" spacing={1} sx={{ width: "100%", marginTop: "12px" }}>
          {
            loading ? (
              <>
                <Typography variant='body1'>
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
                <Typography variant='body2'>
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
              </>
            ) : (
              <>
                <Avatar>P</Avatar>
              </>
            )
          }
          <Stack >
            {
              loading ? (
                <>
                  <Typography variant='body1'>
                    <Skeleton variant="text" width={"100%"} animation="wave" />
                  </Typography>
                  <Typography variant='body2'>
                    <Skeleton variant="text" width={"100%"} animation="wave" />
                  </Typography>
                </>
              ) : (
                <Typography sx={{ marginTop: "8px" }} variant="body1">Sofas & Couches</Typography>
              )
            }
          </Stack>
        </Stack>
      </Box>
      {/* bed */}
      <Box sx={{ minWidth: "50vh", marginTop: "20px" }}>
        {loading ?
          (
            <Skeleton variant="rectangular" width={600} height={300} animation="wave" />
          ) : (
            <a href="/furniture?type=beds"><img src={require(`../../assets/furniture/mainbed.webp`)} alt="bg" width={700} height={300} /></a>
          )
        }
        <Stack direction="row" spacing={1} sx={{ width: "100%", marginTop: "12px" }}>
          {
            loading ? (
              <>
                <Typography variant='body1'>
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
                <Typography variant='body2'>
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
              </>
            ) : (
              <>
                <Avatar>P</Avatar>
              </>
            )
          }
          <Stack sx={{ width: "7px" }}>
            {
              loading ? (
                <>
                  <Typography variant='body1'>
                    <Skeleton variant="text" width={"100%"} animation="wave" />
                  </Typography>
                  <Typography variant='body2'>
                    <Skeleton variant="text" width={"100%"} animation="wave" />
                  </Typography>
                </>
              ) : (
                <Typography sx={{ marginTop: "8px", }} variant="body1">Beds</Typography>
              )
            }
          </Stack>
        </Stack>
      </Box>
      {/* chair */}
            <Box sx={{ minWidth: "50vh", marginTop: "20px" }}>
        {loading ?
          (
            <Skeleton variant="rectangular" width={600} height={300} animation="wave" />
          ) : (
            <a href="/furniture?type=chairs"><img src={require(`../../assets/furniture/mainchair.webp`)} alt="bg" width={700} height={300} /></a>
          )
        }
        <Stack direction="row" spacing={1} sx={{ width: "100%", marginTop: "12px" }}>
          {
            loading ? (
              <>
                <Typography variant='body1'>
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
                <Typography variant='body2'>
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
              </>
            ) : (
              <>
                <Avatar>P</Avatar>
              </>
            )
          }
          <Stack sx={{ width: "7" }}>
            {
              loading ? (
                <>
                  <Typography variant='body1'>
                    <Skeleton variant="text" width={"100%"} animation="wave" />
                  </Typography>
                  <Typography variant='body2'>
                    <Skeleton variant="text" width={"100%"} animation="wave" />
                  </Typography>
                </>
              ) : (
                <Typography sx={{ marginTop: "8px",marginBottom: "150px" }} variant="body1">Chairs</Typography>
              )
            }
          </Stack>
        </Stack>
      </Box>
    </>
  )
};

export default Shop;
