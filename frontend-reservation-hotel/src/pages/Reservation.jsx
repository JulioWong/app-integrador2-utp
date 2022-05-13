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
					sx={{m:3, p:2,  border: '1px dashed grey' }}
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
													max: 100, min: 10 
											}
									}}
									label="Habitaciones"
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
							<Button variant="contained" style={{width:"100%",marginTop:12}}>Buscar</Button>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</AppFrame>
	)
}

export default Reservation
