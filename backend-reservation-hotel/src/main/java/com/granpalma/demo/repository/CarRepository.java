package com.granpalma.demo.repository;

import java.util.ArrayList;
import org.springframework.data.repository.CrudRepository;

import com.granpalma.demo.entity.Car;

public interface CarRepository extends CrudRepository<Car, Long> {
	public ArrayList<Car> findByGuestId(int guestId);
}
