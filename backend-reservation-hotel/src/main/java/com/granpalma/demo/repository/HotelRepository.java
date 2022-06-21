package com.granpalma.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.granpalma.demo.entity.Hotel;

public interface HotelRepository extends CrudRepository<Hotel, Long> {
	public List<Hotel> findAll();
}
