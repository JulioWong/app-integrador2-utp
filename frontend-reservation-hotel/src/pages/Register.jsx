import { Button, Container, FormControl, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AppFrame from './../components/AppFrame'

const currencies = [
  {
    value: '1',
    label: 'Perú',
  },
  {
    value: '2',
    label: 'Colombia',
  },
  {
    value: '3',
    label: 'Argentina',
  },
  {
    value: '4',
    label: 'Chile',
  },
];

const Register = () => {

	const [currency, setCurrency] = React.useState('1');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

	return (
		<AppFrame>
			<Container maxWidth="sm" style={{marginTop:40}}>
				
				<Box
					component="form"
					noValidate
					autoComplete="off"
				>
					<FormControl fullWidth  variant="standard">
						<TextField
							id="input-with-icon-textfield"
							label="Nombre"
							variant="outlined"
							margin="dense"
						/>
						<TextField
							id="input-with-icon-textfield"
							label="Apellido"
							variant="outlined"
							margin="dense"
						/>
					

						<TextField
							id="outlined-select-currency"
							select
							label="Pais"
							value={currency}
							margin="normal"
							onChange={handleChange}
						>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>

					</FormControl>



				</Box>
				<div style={{marginTop:10}}>
					<Button variant="contained" size="medium">Registrar</Button>
				</div>
			</Container>
		</AppFrame>
	)
}

export default Register
