package com.granpalma.demo.service;

import java.util.List;

import com.granpalma.dto.demo.dto.CarRequest;
import com.granpalma.dto.demo.dto.CarResponse;

public interface CarService {
	public List<CarResponse> getCar(int guestId);
	public CarResponse setCar(CarRequest carRequest);
	public boolean removeCar(long id);
}
