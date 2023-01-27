import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import "../../App.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

const Furniture = () => {
    const [furnitures, setFurnitures] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [search, setSearchParams] = useSearchParams();

    //tar emot typen t.ex sofas

    const getFurniture = async () => {
        let furnitureType = search.get("type");
        let formData = new FormData();
        formData.append("furniture", furnitureType);
        const url = "http://localhost/react-php/react-backend/Api/Furniture.php";
        await axios.post(url, formData)
            .then(res => {
                console.log("Backend Response: ", res.data);
                setFurnitures(res.data);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }

    const goBack = () => {
        navigate('/shop', { replace: true })
    }

    useEffect(() => {
        getFurniture();
    }, []);
    return (
        <div>
            <Container sx={{ m: 5 }}>
                <Box
                    m={1} //margin
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{ }}
                >
                    <Button variant="contained" color="primary" onClick={goBack} sx={{ height: 40 }}>
                        Go Back
                    </Button>
                </Box>
                {loading ? <CircularProgress color="secondary" />
                    :
                    <>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            sx={{ maxWidth: 1200 }}
                        >
                            {furnitures.map((furniture) => {
                                return (
                                    <Grid item xs={5} sm={5} md={4} key={furniture.id}>
                                        <Card sx={{ maxWidth: 345, marginTop: 2 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={require(`../../assets/furniture/${furniture.type}/${furniture.name}.webp`)}
                                                title="Gunnar model"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {furniture.name}
                                                </Typography>
                                                <Typography variant="body2" color="secondary">
                                                    {furniture.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Link to="/detail/"
                                                    state={{ from: furniture }}
                                                >
                                                    Learn More
                                                </Link>
                                                <Link href="detail/share" variant="underlined" color="primary" size="medium">
                                                    Share
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                            }
                        </Grid>
                    </>
                }
            </Container>
        </div>
    )
};
export default Furniture;