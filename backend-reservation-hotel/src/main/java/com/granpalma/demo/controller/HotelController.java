package com.granpalma.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.granpalma.demo.service.HotelService;
import com.granpalma.dto.demo.dto.HotelResponse;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@OpenAPIDefinition(info = @Info(
		title = "Gran Palma hoteles", version = "2.0", description = "Hoteles"))
@RequestMapping("/api")
public class HotelController {

	@Autowired
	private HotelService hotelService;
	
	@GetMapping("/hotel")
	public ResponseEntity<?> getAllCountries() {
		List<HotelResponse> hotelList = hotelService.getHotels();
		
		if (hotelList != null && hotelList.size() > 0) {
			return new ResponseEntity<>(hotelList, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
