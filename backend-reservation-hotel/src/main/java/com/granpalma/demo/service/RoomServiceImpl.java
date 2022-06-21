package com.granpalma.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.granpalma.demo.entity.Room;
import com.granpalma.demo.repository.RoomRepository;
import com.granpalma.dto.demo.dto.GetAvailableRoomsResponseDB;
import com.granpalma.dto.demo.dto.RoomAvailableRequest;
import com.granpalma.dto.demo.dto.RoomResponse;

@Service
public class RoomServiceImpl implements RoomService{

	@Autowired
	private RoomRepository roomRepository;
	
	@Override
	public List<GetAvailableRoomsResponseDB> getAvailableRooms(int idHotel, RoomAvailableRequest roomAvailableRequest) {
		return roomRepository.findRoomAvilable(
				idHotel, roomAvailableRequest.getSince(), 
				roomAvailableRequest.getTo(), 
				roomAvailableRequest.getQuantity()
		);
	}

	@Override
	public RoomResponse getInfo(long id) {
		Optional<Room> roomBD = roomRepository.findById(id);
		
		if(roomBD.isPresent()) {
			RoomResponse roomResponse = new RoomResponse();
			roomResponse.setId(roomBD.get().getId());
			roomResponse.setDescription(roomBD.get().getDescription());
			roomResponse.setImage(roomBD.get().getImage());
			roomResponse.setCost(roomBD.get().getCost());
			return roomResponse;

		} else {
			return null;
		}
	}
}
