import * as React from 'react';
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
import { Link as LinkRouter } from 'react-router-dom';

const pages = ['Inicio', 'Habitaciones', 'Reservas', 'Servicios', 'Contáctenos'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AppFrame = ({ children }) => {
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
										<MenuItem key={page} onClick={handleCloseNavMenu} >
											<Typography textAlign="center">{page}</Typography>
										</MenuItem>
									))}
									<MenuItem onClick={handleCloseNavMenu} >
										<Typography textAlign="center">Iniciar sesión</Typography>
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
									<Button
										key={page}
										onClick={handleCloseNavMenu}
										sx={{ my: 2, color: 'white', display: 'block' }}
									>
										{page}
									</Button>
								))}
							</Box>
							{
								(1 == 0) ? (

									<Box sx={{ flexGrow: 0 }}>
										<Tooltip title="Open settings">
											<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
												<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
											{settings.map((setting) => (
												<MenuItem key={setting} onClick={handleCloseUserMenu}>
													<Typography textAlign="center">{setting}</Typography>
												</MenuItem>
											))}
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
export default AppFrame;