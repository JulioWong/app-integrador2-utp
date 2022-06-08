package com.granpalma.dto.demo.dto;

import java.io.Serializable;

public class CountryResponse implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private int id;
	private String country;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
}
