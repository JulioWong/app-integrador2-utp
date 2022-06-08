package com.granpalma.dto.demo.dto;

public class GuestLoginResponse {

	private int id;
	private String name;
	private String lastName;
	private String email;
	private String token;
	private String[] errors;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getToken() {
		return token;
	}
	
	public void setToken(String token) {
		this.token = token;
	}
	
	public String[] getErrors() {
		return errors;
	}
	
	public void setErrors(String[] errors) {
		this.errors = errors;
	}
}
