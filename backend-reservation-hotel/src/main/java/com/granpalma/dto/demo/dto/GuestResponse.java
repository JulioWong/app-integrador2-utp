package com.granpalma.dto.demo.dto;

import java.io.Serializable;

public class GuestResponse implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private int id;
	private String[] errors;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String[] getErrors() {
		return errors;
	}

	public void setErrors(String[] errors) {
		this.errors = errors;
	}
}
