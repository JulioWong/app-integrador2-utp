import * as React from 'react';
import { connect } from 'react-redux'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';

import { logoutGuest } from '../redux/actions/guestActions'

const pages = [
	{
		label: 'Inicio',
		redirect: '/'
	},
	{
		label: 'Habitaciones',
		redirect: '/'
	}, 
	{
		label: 'Reservas',
		redirect: '/reservar'
	},
	{
		label: 'Servicios',
		redirect: '/'
	}, 
	{
		label: 'Contáctenos',
		redirect: '/'
	}, 
];

const AppFrame = ({ children, currentGuest, logoutGuest }) => {
	const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

	const handlerLogout = () => {
		logoutGuest();
		navigate('/')
	}

  return (
		<div>
			<div style={{backgroundColor: "#0B222E"}}>
				<AppBar position="static" color="transparent">
					<Container maxWidth="xl">
						<Toolbar disableGutters>
							<Typography
								variant="h6"
								noWrap
								component="a"
								href="/"
								sx={{
									mr: 2,
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.3rem',
									color: 'inherit',
									textDecoration: 'none',
								}}
							>
								
								<img src="/Granpalma.png" alt='logo' width={200}/>
							</Typography>

							<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleOpenNavMenu}
									color="inherit"
								>
									<MenuIcon style={{ color: 'white' }} />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorElNav}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'left',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'left',
									}}
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
									sx={{
										display: { xs: 'block', md: 'none' },
									}}
								>
									{pages.map((page) => (
										<MenuItem key={page.label} onClick={handleCloseNavMenu} >
											<Link 
											component={LinkRouter}
											to={page.redirect} 
											color="inherit" 
											aria-label="menu"
											underline="none">{page.label}</Link>
										</MenuItem>
									))}
									<MenuItem onClick={handleCloseNavMenu} >
										<Link 
											component={LinkRouter}
											to='/iniciar-sesion' 
											color="inherit" 
											aria-label="menu"
											underline="none">Iniciar sesión</Link>
									</MenuItem>
								</Menu>
							</Box>
							<Typography
								variant="h5"
								noWrap
								component="a"
								href=""
								sx={{
									mr: 2,
									display: { xs: 'flex', md: 'none' },
									flexGrow: 1,
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.3rem',
									color: 'inherit',
									textDecoration: 'none',
								}}
							>
								<img src="/Granpalma.png" alt='logo' width={150}/>
							</Typography>
							<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
								{pages.map((page) => (
									<Link 
									key={page.label}
									sx={{ my: 2, color: 'white', display: 'block', paddingLeft: 4 }}
									component={LinkRouter}
									to={page.redirect} 
									color="inherit" 
									aria-label="menu"
									underline="none">{page.label}</Link>
								))}
							</Box>
							
							<Badge badgeContent={1} color="error" sx={{mr:4}} onClick={() => navigate("/carrito", { replace: true })}>
								<ShoppingCartIcon style={{ color: 'white' }} />
							</Badge>

							{
								(currentGuest.id > 0) ? (
									<Box sx={{ flexGrow: 0 }}>
										<Tooltip title="Open settings">
											<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
												<Avatar alt={currentGuest.name} src="/static/images/avatar/2.jpg" />
											</IconButton>
										</Tooltip>
										<Menu
											sx={{ mt: '45px' }}
											id="menu-appbar"
											anchorEl={anchorElUser}
											anchorOrigin={{
												vertical: 'top',
												horizontal: 'right',
											}}
											keepMounted
											transformOrigin={{
												vertical: 'top',
												horizontal: 'right',
											}}
											open={Boolean(anchorElUser)}
											onClose={handleCloseUserMenu}
										>
											<MenuItem onClick={handlerLogout}>
												<Typography textAlign="center">Mis reservas</Typography>
											</MenuItem>
											<MenuItem onClick={handlerLogout}>
												<Typography textAlign="center">Salir</Typography>
											</MenuItem>
										</Menu>
									</Box>

								) : (
									<Button sx={{ display: { xs: 'none', md: 'flex' } }} style={{color: "white"}}>
										<Link 
										component={LinkRouter}
										to="/iniciar-sesion" 
										color="inherit" 
										aria-label="menu"
										underline="none">Iniciar sesión</Link>
									</Button>
									)

							}
						</Toolbar>
					</Container>
				</AppBar>
			</div>
			<div>{children}</div>
		</div>
  );
};

const mapStateToProps = state => ({
	currentGuest: state.guest.currentGuest
})

const mapDispachToProps = {
	logoutGuest
}

export default connect(mapStateToProps, mapDispachToProps)(AppFrame);
