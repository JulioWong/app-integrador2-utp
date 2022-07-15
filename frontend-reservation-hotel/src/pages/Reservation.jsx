import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate  } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Button, Container, FormControl, Grid, MenuItem } from '@mui/material';
import { Box } from '@mui/system';

import { formatDate, formatDateToPrint } from '../helpers/formatDate';
import { getAllHotels } from '../redux/actions/hotelActions'
import { getAvailableRoom, infoSelected } from '../redux/actions/roomActions'

const Reservation = ({ 
	hotelsList, 
	roomAvailableList,
	getAllHotels, 
	getAvailableRoom,
	infoSelected 
}) => {

	const navigate = useNavigate(); 

	const [hotel, setHotel] = React.useState('');
	const [cantidadPersonas, setCantidadPersonas] = React.useState('');
	const [fechaMinInicio, setFechaMinInicio] = React.useState(new Date());
	const [fechaInicio, setFechaInicio] = React.useState(null);
	const [fechaFin, setFechaFin] = React.useState(null);
	const [fechaMinFin, setFechaMinFin] = React.useState('');
	
	const handleChangeHotel = (event) => setHotel(event.target.value)
	const handleChangeCantidadPersonas = (event) => setCantidadPersonas(event.target.value)
	const handleFechaInicio = (newDate) => {
		setFechaMinInicio(new Date())
		setFechaInicio(newDate)
		setFechaFin(newDate)
		setFechaMinFin(newDate)
	}

	const handleFechaFin = (newDate) => setFechaFin(newDate)
	const handleSearchRooms = () => { 

		getAvailableRoom(hotel, {
			since: formatDate(fechaInicio),
			to: formatDate(fechaFin),
			quantity: cantidadPersonas
		})

		infoSelected({ 
			hotel, 
			sinceDB: formatDate(fechaInicio),
			toDB: formatDate(fechaFin),
			since: formatDateToPrint(fechaInicio), 
			until: formatDateToPrint(fechaFin) 
		})

	}

	useEffect(() => { getAllHotels(); }, [ getAllHotels ])

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
									value={hotel}
									variant="standard"
									onChange={handleChangeHotel}
								>
									{hotelsList.map((option) => (
										<MenuItem key={option.id} value={option.id}>
											{option.description}
										</MenuItem>
									))}
								</TextField>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={3} >
							<FormControl fullWidth>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										label="Entrada"
										minDate={ fechaMinInicio }
										value={ fechaInicio }
										onChange={ (d) => handleFechaInicio(d) }
										renderInput={(params) => <TextField {...params}  variant="standard"/>}
									/>
								</LocalizationProvider>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControl fullWidth>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										disabled={ fechaInicio === null }
										label="Salida"
										minDate={ fechaMinFin }
										value={ fechaFin }
										onChange={(d) => handleFechaFin(d)}
										renderInput={(params) => <TextField {...params}  variant="standard"/>}
									/>
								</LocalizationProvider>
							</FormControl>
						</Grid>
						<Grid item xs={6} md={2}>
							<FormControl fullWidth>
							<TextField 
								type="number"
								variant="standard"
								value={cantidadPersonas}
								onChange={handleChangeCantidadPersonas}
								InputProps={{
										inputProps: { 
												max: 3, min: 1 
										}
								}}
								label="Personas"
							/>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={2}>
							<Button
							 disabled={!hotel || !fechaInicio || !fechaFin || !cantidadPersonas}
							 onClick={handleSearchRooms} variant="contained" style={{width:"100%",marginTop:12, backgroundColor: "#D6B637"}}>Buscar</Button>
						</Grid>
					</Grid>
				</Box>
				{	
					roomAvailableList?.length > 0 ? (
						<Box>
							{roomAvailableList.map(room=>(
								<div key={room.id}>
									<Box
										component={Grid}
										sx={{m:3, p:2, borderRadius: 1, color:"#707070" }}
										boxShadow={2}
									>
										<Grid container>
											<Grid item xs={12} md={3} textAlign="center">
												<img src={room.description} width="100%" alt=""/>
											</Grid>
											<Grid item xs={12} md={9}>
												<Box sx={{pb:1, pl:2}} fontWeight="bold">
													{room.title}
												</Box>
												<Box sx={{pb:1, pl:2}}>
													{room.image}
												</Box>
												<Grid container flexDirection="row-reverse" alignContent="center" alignItems="center">
													<Grid>
														<Button variant="contained" onClick={() => navigate(`/detalle/${room.id}`)}>Ver detalle</Button>
													</Grid>
													<Grid sx={{p:1, fontSize:25}} fontWeight="bold">
														S/ {room.cost}
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Box>
								</div>
							))}
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

const mapStateToProps = state => ({
	hotelsList: state.hotel.all,
	roomAvailableList: state.room.availables
})

const mapDispachToProps = {
	getAllHotels,
	getAvailableRoom,
	infoSelected,
}

export default connect(mapStateToProps, mapDispachToProps)(Reservation)
