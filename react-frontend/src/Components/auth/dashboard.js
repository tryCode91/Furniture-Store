import '../../App.css';
import { useEffect } from 'react';
import { Container } from '@mui/material';
const Dashboard = () => {


    useEffect(() => {
        if (window.location.href.substr(-2) !== '?r') {
            window.location = window.location.href + '?r';
        }
    }, [])
    return (
        <Container sx={{ marginTop: "4em" }}>
            Go to <a href="/shop">shop</a> and Browse our furniture collection!
        </Container>
    )
};
export default Dashboard;