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

import com.granpalma.demo.service.CountryService;
import com.granpalma.dto.demo.dto.CountryResponse;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@OpenAPIDefinition(info = @Info(
		title = "Gran Palma hoteles", version = "2.0", description = "Countries"))
@RequestMapping("/api")
public class CountryController {

	@Autowired
	private CountryService countryService;
	
	@GetMapping("/country")
	public ResponseEntity<?> getAllCountries() {
		List<CountryResponse> contriesList = countryService.getCountries();
		
		if (contriesList != null && contriesList.size() > 0) {
			return new ResponseEntity<>(contriesList, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
