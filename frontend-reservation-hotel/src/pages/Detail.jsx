import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame'
import { useNavigate, useParams } from 'react-router-dom'
import './../style.css';

import { Slide } from 'react-slideshow-image';
import { Button, Container, Grid, Typography } from '@mui/material';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

import { getRoom } from '../redux/actions/roomActions'
import { getListCar, addCar } from '../redux/actions/carActions'

const Detail = ({ 
  detail, 
  getRoom,  
  addCar,
  infoSelected,
  currentGuest
}) => {

  const navigate = useNavigate(); 
  const params = useParams()
  useEffect(() => { getRoom(params.id); }, [ getRoom, params.id ])

  const handlerAddCar = async () => {
    await addCar({
        guestId: currentGuest.id,
        roomId: params.id,
        since: infoSelected.sinceDB,
        until: infoSelected.untilDB
    })

    navigate(`/carrito`)
  }

  return (
    <AppFrame>
      {detail && (
        <Container lg>
          <Grid container sx={{pt:4}}>
            <Grid xs={12} md={12} lg={8}>
              <Slide easing="ease">
                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${detail.image})`}} />
                </div>
              </Slide>
            </Grid>
            <Grid xs={12} md={12} lg={4} sx={{p:2, color:"#707070"}}>
              <Typography variant="h6" component="h5" fontWeight="bold" sx={{pt: 2, pb: 2}}>{detail.title}</Typography>
              <Typography sx={{mt:1, mb:1, fontWeight:500}}>Del {infoSelected.since} al {infoSelected.until}</Typography>
              <Typography>
                {detail.description}
              </Typography>

              <Typography sx={{mt:1, mb:1, pr: 2, fontSize: 25, fontWeight:"bold",textAlign:"right"}}>S/ {detail.cost}</Typography>
              <Grid container flexDirection="row-reverse" alignContent="center" alignItems="center" sx={{pr:2}}>
                <Grid>
                  <Button variant="contained" size='large' startIcon={<AddShoppingCart />} onClick={handlerAddCar}>Añadir</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}      
    </AppFrame>
  )
}

const mapStateToProps = state => ({
	detail: state.room.detail,
  infoSelected: state.room.infoSelected,
  currentGuest: state.guest.currentGuest
})

const mapDispachToProps = {
	getRoom,
  getListCar,
  addCar
}

export default connect(mapStateToProps, mapDispachToProps)(Detail)