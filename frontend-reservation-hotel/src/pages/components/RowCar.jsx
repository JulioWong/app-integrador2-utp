import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IconButton} from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import { deleteCar, getListCar } from '../../redux/actions/carActions'

import { connect } from 'react-redux';

const RowCar = ({ car, deleteCar, getListCar, currentGuest }) => {
  const handlerDelete = async () => {
    await deleteCar(car.id);
    await getListCar(currentGuest.id);
  }
  return (
    <TableRow
      key={car.id}
    >
      <TableCell size='small'>
      <img src={car.image} width="100px" alt=""/>
      </TableCell>
      <TableCell align="left">{car.description}</TableCell>
      <TableCell align="center" style={{fontWeight:500}}>1</TableCell>
      <TableCell align="right" style={{fontWeight:500}}>
        <IconButton aria-label="delete" onClick={handlerDelete}>
          <DeleteIcon/>
        </IconButton>
      </TableCell>
      <TableCell align="right" style={{fontWeight:500}}>S/{car?.price?.toFixed(2)}</TableCell>
      <TableCell align="right" style={{fontWeight:500}}>S/{car?.price?.toFixed(2)}</TableCell>
    </TableRow>
  )
} 

const mapStateToProps = state => ({
  currentGuest: state.guest.currentGuest
})

const mapDispachToProps = {
  deleteCar,
  getListCar
}

export default connect(mapStateToProps, mapDispachToProps)(RowCar)