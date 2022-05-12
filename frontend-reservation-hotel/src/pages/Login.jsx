import { AccountCircle, Security } from '@mui/icons-material';
import { Button, Container, FormControl, Grid, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AppFrame from './../components/AppFrame'
import Link from '@mui/material/Link';
import { Link as LinkRouter } from 'react-router-dom';

const Login = () => {

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
							label="Correo electrónico"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
							variant="outlined"
							margin="normal"
						/>
					
						<TextField
							id="outlined-password-input"
							label="Password"
							type="password"
							autoComplete="current-password"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Security />
									</InputAdornment>
								),
							}}
							variant="outlined"
							margin="normal"
						/>

					</FormControl>
				</Box>
				<div style={{marginTop:10}}>

					<Grid
						container
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Grid item xs={6}>
								<Button variant="contained" size="medium">Iniciar sesión</Button>
						</Grid>
						<Grid item xs={6} style={{textAlign:"right"}}><Link 
							component={LinkRouter}
							to="/registrar" 
							underline="hover"
							aria-label="menu"
							>¿No tienes cuenta?
							</Link>
						</Grid>

					</Grid>
				</div>
			</Container>
		</AppFrame>
	)
}

export default Login
