import React from 'react';
import AppFrame from './../components/AppFrame'

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Button, Container, FormControl, Grid, MenuItem } from '@mui/material';
import { Box } from '@mui/system';

const currencies = [
  {
    value: '1',
    label: 'Paracas',
  },
  {
    value: '2',
    label: 'Huancayo',
  },
  {
    value: '3',
    label: 'Piura',
  },
  {
    value: '4',
    label: 'Talara',
  },
];

const Reservation = () => {
	const [currency, setCurrency] = React.useState('1');
	
	const handleChange = (event) => {
		setCurrency(event.target.value);
	};
	const [value, setValue] = React.useState(null);

	return (
		<AppFrame>
			<Container>
				<Box
					component="form"
					noValidate
					sx={{m:3, p:2,  border: '1px dashed #d8d8d8' }}
					autoComplete="off"
				>
					<Grid container spacing={2} >
						<Grid item xs={12} md={2}>
							<FormControl fullWidth>
								<TextField
									id="outlined-select-currency"
									select
									label="Sede"
									value={currency}
									
									variant="standard"
									onChange={handleChange}
								>
									{currencies.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={2} >
							<FormControl fullWidth>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										label="Entrada"
										value={value}
										onChange={(newValue) => {
											setValue(newValue);
										}}
										renderInput={(params) => <TextField {...params}  variant="standard"/>}
									/>
								</LocalizationProvider>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={2}>
							<FormControl fullWidth>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										label="Salida"
										value={value}
										onChange={(newValue) => {
											setValue(newValue);
										}}
										renderInput={(params) => <TextField {...params}  variant="standard"/>}
									/>
								</LocalizationProvider>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={2}>
							<FormControl fullWidth>
								<TextField 
									type="number"
									
									variant="standard"
									InputProps={{
											inputProps: { 
													max: 100, min: 1 
											}
									}}
									label="Adultos"
								/>
							</FormControl>
						</Grid>
						<Grid item xs={6} md={1}>
							<FormControl fullWidth>
							<TextField 
								type="number"
								
								variant="standard"
								InputProps={{
										inputProps: { 
												max: 100, min: 10 
										}
								}}
								label="Niños +5"
							/>
							</FormControl>
						</Grid>
						<Grid item xs={6} md={1}>
							<FormControl fullWidth>
								<TextField 
									type="number"
									id='outlined-multiline-flexible'
									
									variant="standard"
									InputProps={{
											inputProps: { 
													max: 100, min: 10 
											}
									}}
									label="Niños -5"
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={2}>
							<Button variant="contained" style={{width:"100%",marginTop:12, backgroundColor: "#D6B637"}}>Buscar</Button>
						</Grid>
					</Grid>
				</Box>


				{
					(1==1) ? (
						<Box>
							<Box
								component={Grid}
								sx={{m:3, p:2, borderRadius: 1, color:"#707070" }}
								boxShadow={2}
							>
								<Grid container>
									<Grid item xs={12} md={3} textAlign="center">
										<img src="/1.jpg" width="100%" alt="" />
									</Grid>
									<Grid item xs={12} md={9}>
										<Box sx={{pb:1, pl:2}} fontWeight="bold">
											STANDARD MATRIMONIAL
										</Box>
										<Box sx={{pb:1, pl:2}}>
											Habitaciones confortables diseñadas para alojar a una persona, cuenta con una cama individual, equipadas con calefacción, insonorizadas, baño privado, ducha caliente, Smart Tv y televisión por cable, corriente eléctrica de 220V, teléfono e internet inalámbrico. Todas las tarifas incluyen desayuno diario, acceso libre al gimnasio y centro de negocios.
										</Box>
										<Grid container flexDirection="row-reverse" alignContent="center" alignItems="center">
											<Grid>
												<Button variant="contained" href='/detalle/1'>Ver detalle</Button>
											</Grid>
											<Grid sx={{p:1, fontSize:25}} fontWeight="bold">
												S/ 230.60
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Box>

							<Box
								component={Grid}
								sx={{m:3, p:2, borderRadius: 1, color:"#707070" }}
								boxShadow={2}
							>
								<Grid container>
									<Grid item xs={12} md={3} textAlign="center">
										<img src="/1.jpg" width="100%" alt=""/>
									</Grid>
									<Grid item xs={12} md={9}>
										<Box sx={{pb:1, pl:2}} fontWeight="bold">
											STANDARD MATRIMONIAL
										</Box>
										<Box sx={{pb:1, pl:2}}>
											Habitaciones confortables diseñadas para alojar a una persona, cuenta con una cama individual, equipadas con calefacción, insonorizadas, baño privado, ducha caliente, Smart Tv y televisión por cable, corriente eléctrica de 220V, teléfono e internet inalámbrico. Todas las tarifas incluyen desayuno diario, acceso libre al gimnasio y centro de negocios.
										</Box>
										<Grid container flexDirection="row-reverse" alignContent="center" alignItems="center">
											<Grid>
												<Button variant="contained" href='/detalle/1'>Ver detalle</Button>
											</Grid>
											<Grid sx={{p:1, fontSize:25}} fontWeight="bold">
												S/ 230.60
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Box>
						</Box>
					) : (
						<Box
							component={Grid}
							sx={{m:3, p:2, borderRadius: 1, color:"#707070" }}
							boxShadow={2}
						>
							<img src="/search.png" width="100%" alt=""/>
						</Box>
					)
				}
			</Container>
		</AppFrame>
	)
}

export default Reservation
