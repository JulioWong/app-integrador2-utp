package com.granpalma.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.granpalma.demo.entity.Hotel;
import com.granpalma.demo.repository.HotelRepository;
import com.granpalma.dto.demo.dto.HotelResponse;

@Service
public class HotelServiceImpl implements HotelService {
	
	@Autowired
	private HotelRepository hotelRepository;

	@Override
	public List<HotelResponse> getHotels() {
		List<Hotel> hotel = hotelRepository.findAll();
		
		List<HotelResponse> hotelResponseList = hotel.stream().map(i -> {
			HotelResponse hotelResponse = new HotelResponse();
			hotelResponse.setId(i.getId());
			hotelResponse.setDescription(i.getDescription());
			return hotelResponse;
		}).collect(Collectors.toList());
		
		return hotelResponseList;
	}

}
