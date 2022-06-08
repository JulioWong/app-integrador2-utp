package com.granpalma.demo.service;

import java.util.List;

import com.granpalma.dto.demo.dto.CountryResponse;

public interface CountryService {
	
	public List<CountryResponse> getCountries();
	
}
