import { Slide } from 'react-slideshow-image';
import React from 'react';
import AppFrame from './../components/AppFrame'

import './../style.css';
import { Button, Container, Grid, Typography } from '@mui/material';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

const slideImages = [
  '/Talaranov8-1920x792.jpg',
  '/Talaranov6-1920x792.jpg',
  '/Talaranov5-1920x792.jpg',
  '/Talaranov4-1920x792.jpg'
]

const Detail = (props) => {
  return (
    <AppFrame>

      <Container lg>
        <Grid container sx={{pt:4}}>
          <Grid xs={12} md={12} lg={8}>
            <Slide easing="ease">
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}} />
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}} />
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}} />
              </div>
            </Slide>
          </Grid>
          <Grid xs={12} md={12} lg={4} sx={{p:2, color:"#707070"}}>
            <Typography variant="h6" component="h5" fontWeight="bold" sx={{pt: 2, pb: 2}}>STANDARD MATRIMONIAL</Typography>
            <Typography sx={{mt:1, mb:1, fontWeight:500}}>Del 01/02/2022 al 10/02/2022</Typography>
            <Typography>
              Son habitaciones modernas, confortables y acogedoras, cuentan con una cama individual, tienen sistema de ventanas insonorizadas con vista a la calle o vista interior. Estan equipadas con baño privado y ducha caliente, Smart TV y televisión por cable, teléfono, corriente eléctrica de 220v, internet inalámbrico. Todas las tarifas incluyen desayuno diario y acceso libre a la piscina.
            </Typography>

            <Typography sx={{mt:1, mb:1, pr: 2, fontSize: 25, fontWeight:"bold",textAlign:"right"}}>S/ 230.60</Typography>
            <Grid container flexDirection="row-reverse" alignContent="center" alignItems="center" sx={{pr:2}}>
              <Grid>
                <Button variant="contained" size='large' startIcon={<AddShoppingCart />}>Añadir</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      

      
    </AppFrame>
  )
}

export default Detail