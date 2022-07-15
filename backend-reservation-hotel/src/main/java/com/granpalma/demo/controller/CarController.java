package com.granpalma.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.granpalma.demo.service.CarService;
import com.granpalma.dto.demo.dto.CarRequest;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
@OpenAPIDefinition(info = @Info(
		title = "Gran Palma hoteles", version = "2.0", description = "Car"))
@RequestMapping("/api")
public class CarController {

	@Autowired
	private CarService carService;
	
	@GetMapping("/car/{id}")
	public ResponseEntity<?> getCar(@PathVariable int id) {
		return new ResponseEntity<>(carService.getCar(id), HttpStatus.OK);
	}
	
	@PostMapping("/car")
	public ResponseEntity<?> setCar(@Valid @RequestBody CarRequest carRequest) {
		return new ResponseEntity<>(carService.setCar(carRequest), HttpStatus.OK);
	}
	
	@DeleteMapping("/car/item/{id}")
	public ResponseEntity<?> setCar(@PathVariable int id) {
		return new ResponseEntity<>(carService.removeCar(id), HttpStatus.ACCEPTED);
	}
}
