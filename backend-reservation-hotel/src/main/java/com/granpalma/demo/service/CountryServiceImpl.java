package com.granpalma.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.granpalma.demo.entity.Country;
import com.granpalma.demo.repository.CountryRepository;
import com.granpalma.dto.demo.dto.CountryResponse;

@Service
public class CountryServiceImpl implements CountryService {

	@Autowired
	private CountryRepository countryRepository;
	
	@Override
	public List<CountryResponse> getCountries() {
		
		List<Country> country = countryRepository.findAll();
		
		List<CountryResponse> countryResponseList = country.stream().map(i -> {
			CountryResponse countryResponse = new CountryResponse();
			countryResponse.setId(i.getId());
			countryResponse.setCountry(i.getDescription());
			return countryResponse;
		}).collect(Collectors.toList());
		
		return countryResponseList;
	}
}
