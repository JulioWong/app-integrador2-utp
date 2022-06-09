package com.granpalma.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.granpalma.demo.service.GuestService;
import com.granpalma.dto.demo.dto.GuestLoginRequest;
import com.granpalma.dto.demo.dto.GuestLoginResponse;
import com.granpalma.dto.demo.dto.GuestRequest;
import com.granpalma.dto.demo.dto.GuestResponse;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@OpenAPIDefinition(info = @Info(
		title = "Gran Palma hoteles", version = "2.0", description = "Guest"))
@RequestMapping("/api")
public class GuestController {

	@Autowired
	private GuestService guestService;
	
	@PostMapping("/guest")
	public ResponseEntity<?> getAllGuest(@Valid @RequestBody GuestRequest guestRequest) {
		
		GuestResponse guestResponse = guestService.saveGuest(guestRequest);
		
		if (guestResponse != null) return new ResponseEntity<>(
				guestResponse, HttpStatus.CREATED);

		return new ResponseEntity<>(guestResponse, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping("/guest/login")
	public ResponseEntity<?> loginGuest(@RequestBody GuestLoginRequest guestRequest) {
		GuestLoginResponse guestResponse = guestService.login(guestRequest);
		
		return new ResponseEntity<>(guestResponse, HttpStatus.OK);
	}
}
