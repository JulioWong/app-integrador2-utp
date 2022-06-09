import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'

import { AccountCircle, Security } from '@mui/icons-material';
import { Alert, Button, Container, FormControl, Grid, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';
import { Link as LinkRouter } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import AppFrame from './../components/AppFrame'

import { loginGuest } from '../redux/actions/guestActions'

const Login = ({ loginGuest, currentGuest }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const [loading, setLoading] = React.useState(false);
	const [disabledButton, setdisabledButton] = React.useState(true);

	const [validEmail, setValidEmail] = React.useState(false);
	const [validEmailText, setValidEmailText] = React.useState('');

	const [validPassword, setValidPassword] = React.useState(false);
	const [validPasswordText, setValidPasswordText] = React.useState('');

	const [errorLogin, setErrorLogin] = React.useState('');

	const handleDisabled = () => {
		if (email && password ) setdisabledButton(false);
		else {
			setdisabledButton(true);
		}
	}

	const handleEmail = (e) => {
		setEmail(e.target.value);
		handleDisabled()
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		handleDisabled()
	};

	const handleLogin = () => {
		let error = false;
		const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		setValidEmail(false);
		setValidPassword(false);
		setValidEmailText('');
		setValidPasswordText('')

		if (!regEmail.test(email) ) {
			error = true;
			setValidEmail(true);
			setValidEmailText('El correo electrónico no es válido')
		}

		if (password.length < 6) {
			error = true;
			setValidPassword(true);
			setValidPasswordText('Las contraseña debe tener minimo 6 caracteres')
		}

		if (!error) {
			setLoading(true);
			loginGuest({ email, password })
		}
	}

	useEffect(() => { 
		if (email && password) {
			setLoading(false);

			if (currentGuest.id === 0) {
				setErrorLogin(currentGuest.errors[0])

			} else if(currentGuest.id > 0) {
				navigate("/reservar")
			}
		}
	}, [ currentGuest ])

	return (
		<AppFrame>
			<Container maxWidth="sm" style={{marginTop:40}}>
				{location?.state?.message && <Alert severity="success" style={{marginBottom:30}}>{location.state.message} — Inicia sesión!</Alert>}
				{errorLogin && <Alert severity="error" style={{marginBottom:30}}>{errorLogin}</Alert>}
				<Box
					component="form"
					noValidate
					autoComplete="off"
				>
					<FormControl fullWidth  variant="standard">
						<TextField
							id="input-email"
							label="Correo electrónico"
							value={email}
							onChange={handleEmail}
							onBlur={handleEmail}
							helperText={validEmailText}
							error={validEmail}
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
							id="input-password"
							label="Password"
							type="password"
							autoComplete="current-password"
							value={password}
							onChange={handlePassword}
							onBlur={handlePassword}
							helperText={validPasswordText}
							error={validPassword}
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
								<LoadingButton variant="contained" size="medium" loading={loading} disabled={disabledButton} onClick={handleLogin}>
									Iniciar sesión
								</LoadingButton>
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

const mapStateToProps = state => ({
	currentGuest: state.guest.currentGuest
})

const mapDispachToProps = {
	loginGuest
}

export default connect(mapStateToProps, mapDispachToProps)(Login)
