package com.granpalma.demo.service;

import java.util.List;
import com.granpalma.dto.demo.dto.GetAvailableRoomsResponseDB;
import com.granpalma.dto.demo.dto.RoomAvailableRequest;
import com.granpalma.dto.demo.dto.RoomResponse;

public interface RoomService {
	
	public List<GetAvailableRoomsResponseDB> getAvailableRooms(int idHotel, RoomAvailableRequest roomAvailableRequest);
	
	public RoomResponse getInfo(long id);
}
