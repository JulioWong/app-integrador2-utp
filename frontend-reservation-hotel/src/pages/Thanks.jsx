import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import AppFrame from './../components/AppFrame'

const Thanks = () => {
  return (
    <AppFrame>
      <Container lg>
        <Typography variant='h4' style={{
          background:"#fff5c1", textAlign:"center", fontWeight: "bold", padding: 20, 
          marginTop:20, marginBottom:20
        }}>
          Gracias por confiar en nosotros
          <Typography style={{marginTop:10}}>Estás a un paso de terminar tu reserva, solo te falta realizar el pago del <b>50%</b> del total.</Typography>
        </Typography>
        <Typography style={{marginTop:20,marginBottom:10, fontWeight:"bold"}}>DATOS DE PAGO</Typography>
        <Typography>Nro de reserva: 123456</Typography>
        <Typography>Monto: S/ 150.00</Typography>
        <Typography>Nro de cuenta: 19199325292075</Typography>
        <Typography>Banco: Interbank</Typography>

        <Typography style={{marginTop:20}}>
          Una vez realizado el depósito, por favor envía el voucher o captura de pantalla junto al Nro de reserva para proceder a confirmarla.</Typography>

        <div style={{textAlign:"right", marginTop:50}}>
          <Button variant="contained" href='/reservar' size="large">Seguir reservando</Button>
        </div>
      </Container>
    </AppFrame>
  )
}

export default Thanks