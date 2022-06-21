package com.granpalma.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.granpalma.demo.entity.Room;
import com.granpalma.dto.demo.dto.GetAvailableRoomsResponseDB;

public interface RoomRepository extends CrudRepository<Room, Long> {

	@Query(nativeQuery = true)
	public List<GetAvailableRoomsResponseDB> findRoomAvilable(int idHotel, String fechaInicio, String fechaFin, int cantidad);
}
