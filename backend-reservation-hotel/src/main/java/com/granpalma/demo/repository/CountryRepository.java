package com.granpalma.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.granpalma.demo.entity.Country;

public interface CountryRepository extends CrudRepository<Country, Long> {

	public List<Country> findAll();
	
}
