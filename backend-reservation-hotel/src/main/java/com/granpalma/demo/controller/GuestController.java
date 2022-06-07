package com.granpalma.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.granpalma.demo.entity.Guest;
import com.granpalma.demo.service.GuestService;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@OpenAPIDefinition(info = @Info(title = "Gran Palma hoteles", version = "2.0", description = "Guest"))
@RequestMapping("/api")
public class GuestController {

	@Autowired
	private GuestService guestService;
	
	@PostMapping("/guest")
	public ResponseEntity<?> getAllGuest(@RequestBody Guest guest) {
		
		System.out.println("Direccion: ->"+guest.getAddress());
		System.out.println("Direccion: ->"+guest.getCountry().getDescription());
		
		
		guestService.saveGuest(guest);
		
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
}
