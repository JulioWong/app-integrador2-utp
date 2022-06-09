import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, FormControl, MenuItem, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/system';

import AppFrame from './../components/AppFrame'

import { connect } from 'react-redux'
import { getAllCountries } from '../redux/actions/countryActions'
import { getAllDocumentsTypes } from '../redux/actions/documentTypesActions'
import { setGuest } from '../redux/actions/guestActions'

const Register = ({ 
	countries, 
	documentsTypes, 
	guest, 
	getAllCountries, 
	getAllDocumentsTypes, 
	setGuest
}) => {
	const navigate = useNavigate();
	const [name, setName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [repeatPassword, setRepeatPassword] = React.useState('');
	const [country, setCountry] = React.useState('');
	const [document, setDocument] = React.useState('');
	const [documentNumber, setDocumentNumber] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [address, setAddress] = React.useState('');

	const [loading, setLoading] = React.useState(false);
	const [disabledButton, setdisabledButton] = React.useState(true);

	const [validEmail, setValidEmail] = React.useState(false);
	const [validEmailText, setValidEmailText] = React.useState('');
	const [validDocumentNumber, setValidDocumentNumber] = React.useState(false);
	const [validDocumentNumberText, setValidDocumentNumberText] = React.useState('');
	const [validPassword, setValidPassword] = React.useState(false);
	const [validPasswordText, setValidPasswordText] = React.useState('');
	const [validRepeatPassword, setValidRepeatPassword] = React.useState(false);
	const [validRepeatPasswordText, setValidRepeatPasswordText] = React.useState('');

	const handleDisabled = () => {
		if (name && lastName && email && password && repeatPassword 
			&& country && document && documentNumber && phone && address) 
			setdisabledButton(false);
		else {
			setdisabledButton(true);
		}
	}
	
	const handleName = (e) => {
		setName(e.target.value);
		handleDisabled()
	};

	const handleLastName = (e) => {
		setLastName(e.target.value);
		handleDisabled()
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
		handleDisabled()
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		handleDisabled()
	};

	const handleRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
		handleDisabled()
	};

	const handleCountry = (e) => {
		setCountry(e.target.value);
		handleDisabled()
	};

	const handleDocument = (e) => {
		setDocument(e.target.value);
		handleDisabled()
	};

	const handleDocumentNumber = (e) => {
		setDocumentNumber(e.target.value);
		handleDisabled()
	};

	const handlePhone = (e) => {
		setPhone(e.target.value);
		handleDisabled()
	};

	const handleAddress = (e) => {
		setAddress(e.target.value);
		handleDisabled();
	};

	const handleForm = () => { 
		let error = false;
		const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		setValidEmail(false);
		setValidPassword(false);
		setValidRepeatPassword(false);
		setValidEmailText('');
		setValidPasswordText('')
		setValidRepeatPasswordText('')

		if (!regEmail.test(email) ) {
			error = true;
			setValidEmail(true);
			setValidEmailText('El correo electrónico no es válido')
		}

		const errorPassword = true;

		if (password !== repeatPassword) {
			error = true;
			setValidRepeatPassword(errorPassword);
			setValidRepeatPasswordText('Las contraseña debe coincidir con la anterior')

		}

		if (password.length < 6) {
			error = true;
			const messageErrorPassword = 'Las contraseña debe tener minimo 6 caracteres';
			setValidPassword(errorPassword);
			setValidRepeatPassword(errorPassword);
			setValidPasswordText(messageErrorPassword)
			setValidRepeatPasswordText(messageErrorPassword)
		}
		
		if (!error) {
			setLoading(true);
			setGuest({
				name,
				lastName,
				countryId: country,
				documentTypeId: document,
				documentNumber,
				address,
				phone,
				email,
				password
			});
		} 
	}

	useEffect(() => { 
		getAllCountries();
		getAllDocumentsTypes();

	}, [ getAllCountries, getAllDocumentsTypes ])

	useEffect(() => { 
		if (name && lastName && email && password && repeatPassword 
			&& country && document && documentNumber && phone && address) {
			setValidDocumentNumber(false);
			setValidEmail(false);
			setLoading(false);
			setValidDocumentNumberText('');
			setValidEmailText('');

			if (guest.id === 0) {
				if (guest.typeError === 1) {
					setValidDocumentNumber(true);
					setValidDocumentNumberText(guest.errors[0]);
				} else if(guest.typeError === 2) {
					setValidEmail(true);
					setValidEmailText(guest.errors[0]);
				}
			} else if(guest.id > 0) {
				navigate("/iniciar-sesion", { state: {message: 'Te has registrado correctamente'} });
			}
		}
	}, [ guest, setLoading ])

	return (
		<AppFrame>
			<Container maxWidth="sm" style={{marginTop:25, marginBottom:25}}>
				<Box
					component="form"
					noValidate
					autoComplete="off"
				>
					<FormControl fullWidth  variant="standard">
						<TextField
							id="input-name"
							label="Nombre"
							variant="outlined"
							margin="dense"
							value={name}
							onChange={handleName}
							onBlur={handleName}
							required
						/>

						<TextField
							id="input-apellido"
							label="Apellido"
							variant="outlined"
							margin="dense"
							value={lastName}
							onChange={handleLastName}
							onBlur={handleLastName}
							required
						/>

						<TextField
							id="input-email"
							label="Correo electrónico"
							type="email"
							variant="outlined"
							margin="dense"
							value={email}
							onChange={handleEmail}
							onBlur={handleEmail}
							helperText={validEmailText}
							error={validEmail}
							required
						/>

						<TextField
							id="input-password"
							label="Contraseña"
							variant="outlined"
							margin="dense"
							type="password"
							value={password}
							onChange={handlePassword}
							onBlur={handlePassword}
							helperText={validPasswordText}
							error={validPassword}
							required
						/>

						<TextField
							id="input-repeat-password"
							label="Repite contraseña"
							variant="outlined"
							margin="dense"
							type="password"
							value={repeatPassword}
							onChange={handleRepeatPassword}
							onBlur={handleRepeatPassword}
							helperText={validRepeatPasswordText}
							error={validRepeatPassword}
							required
						/>

						<TextField
							id="select-country"
							select
							label="Pais"
							margin="dense"
							value={country}
							onChange={handleCountry}
							onBlur={handleCountry}
							required
						>
							{countries.map((option) => (
								<MenuItem key={option.id} value={option.id}>
									{option.country}
								</MenuItem>
							))}
						</TextField>

						<TextField
							id="select-tipo-documento"
							select
							label="Tipo de documento"
							margin="normal"
							value={document}
							onChange={handleDocument}
							onBlur={handleDocument}
							required
						>
							{documentsTypes.map((option) => (
								<MenuItem key={option.id} value={option.id}>
									{option.type}
								</MenuItem>
							))}
						</TextField>

						<TextField
							id="input-number-document"
							label="Documento"
							variant="outlined"
							margin="dense"
							value={documentNumber}
							onChange={handleDocumentNumber}
							onBlur={handleDocumentNumber}
							helperText={validDocumentNumberText}
							error={validDocumentNumber}
							required
						/>

						<TextField
							id="input-phone"
							label="Teléfono"
							variant="outlined"
							margin="dense"
							value={phone}
							onChange={handlePhone}
							onBlur={handlePhone}
							required
						/>

						<TextField
							id="input-address"
							label="Dirección"
							multiline
							rows={4}
							variant="outlined"
							margin="dense"
							value={address}
							onChange={handleAddress}
							onBlur={handleAddress}
							required
						/>
					</FormControl>

				</Box>
				<div style={{marginTop:10}}>
					<LoadingButton variant="contained" size="medium" loading={loading} onClick={handleForm} disabled={disabledButton}>
						Registrar
					</LoadingButton>
				</div>
			</Container>
		</AppFrame>
	)
}

const mapStateToProps = state => ({
	countries: state.countries.all,
	documentsTypes: state.documentsTypes.all,
	guest: state.guest.newGuest
})

const mapDispachToProps = {
	getAllCountries,
	getAllDocumentsTypes,
	setGuest,
}

export default connect(mapStateToProps, mapDispachToProps)(Register)
