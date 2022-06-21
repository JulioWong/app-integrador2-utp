package com.granpalma.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.granpalma.demo.service.RoomService;
import com.granpalma.dto.demo.dto.GetAvailableRoomsResponseDB;
import com.granpalma.dto.demo.dto.RoomAvailableRequest;
import com.granpalma.dto.demo.dto.RoomResponse;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@OpenAPIDefinition(info = @Info(
		title = "Gran Palma hoteles", version = "2.0", description = "Habitaciones"))
@RequestMapping("/api")
public class RoomController {
	
	@Autowired
	private RoomService roomService;
	
	@PostMapping("/hotel/{id}/room")
	public ResponseEntity<?> getRoomsAvailable(@PathVariable int id, @RequestBody RoomAvailableRequest roomAvailableRequest) {
		
		List<GetAvailableRoomsResponseDB> roomResponse = roomService.getAvailableRooms(id, roomAvailableRequest);
		if (roomResponse != null) return new ResponseEntity<>(roomResponse, HttpStatus.OK);
		return new ResponseEntity<>(roomResponse, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("/room/{id}")
	public ResponseEntity<?> getRoom(@PathVariable long id) {
		RoomResponse roomResponse = roomService.getInfo(id);
		if (roomResponse != null) return new ResponseEntity<>(roomResponse, HttpStatus.OK);
		return new ResponseEntity<>(roomResponse, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
