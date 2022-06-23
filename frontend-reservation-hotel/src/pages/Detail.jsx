import { Slide } from 'react-slideshow-image';
import React from 'react';
import AppFrame from './../components/AppFrame'
import { useParams } from 'react-router-dom'

import './../style.css';
import { Button, Container, Grid, Typography } from '@mui/material';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { useFetch } from '../hooks/useFetch';
import constants from '../redux/constants';


const Detail = (props) => {

  const params = useParams()
  const { data: room, loading } = useFetch(`${constants.api}/room/${params.id}`)

  return (
    <AppFrame>
      {(room && !loading) && (
        <Container lg>
          <Grid container sx={{pt:4}}>
            <Grid xs={12} md={12} lg={8}>
              <Slide easing="ease">
                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${room.image})`}} />
                </div>

              </Slide>
            </Grid>
            <Grid xs={12} md={12} lg={4} sx={{p:2, color:"#707070"}}>
              <Typography variant="h6" component="h5" fontWeight="bold" sx={{pt: 2, pb: 2}}>{room.title}</Typography>
              <Typography sx={{mt:1, mb:1, fontWeight:500}}>Del 01/02/2022 al 10/02/2022</Typography>
              <Typography>
                {room.description}
              </Typography>

              <Typography sx={{mt:1, mb:1, pr: 2, fontSize: 25, fontWeight:"bold",textAlign:"right"}}>S/ {room.cost}</Typography>
              <Grid container flexDirection="row-reverse" alignContent="center" alignItems="center" sx={{pr:2}}>
                <Grid>
                  <Button variant="contained" size='large' startIcon={<AddShoppingCart />}>Añadir</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}      
    </AppFrame>
  )
}

export default Detail