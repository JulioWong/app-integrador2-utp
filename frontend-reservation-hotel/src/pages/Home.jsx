import React from 'react';
import AppFrame from './../components/AppFrame'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const Home = () => {
  return (
		<AppFrame>
			<Box sx={{ display: { xs: 'none', md: 'flex' }}}>
				<img src="/sl1.jpg" alt='logo' width={"100%"}/>
			</Box>

			<Container maxWidth="xl" style={{marginTop:20, marginBottom:20}}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image="/1.jpg"
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Lorem ipsum
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} md={3}>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image="/2.jpg"
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Lorem ipsum
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} md={3}>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image="/3.jpg"
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Lorem ipsum
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} md={3}>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image="/4.jpg"
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Lorem ipsum
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</AppFrame>
  );
};
export default Home;
