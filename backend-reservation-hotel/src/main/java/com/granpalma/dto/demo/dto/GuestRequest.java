package com.granpalma.dto.demo.dto;

import java.io.Serializable;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class GuestRequest implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Valid
	@NotNull(message = "El nombre es requerido")
	@NotBlank(message = "El nombre no puede estar vacío")
	@Pattern(regexp="^[A-Za-z]*$",message = "El nombre debe ser texto")
	private String name;
	
	@Valid
	@NotNull(message = "El apellido es requerido")
	@NotBlank(message = "El apellido no puede estar vacío")
	@Pattern(regexp="^[A-Za-z]*$",message = "El apellido debe ser texto")
	private String lastName;
	
	@Valid
	@NotNull(message = "El pais es requerido")
	private int countryId;
	
	@Valid
	@NotNull(message = "El tipo de documento es requerido")
	private int documentTypeId;
	
	@Valid
	@NotNull(message = "El número de documento es requerido")
	@NotBlank(message = "El número de documento no puede estar vacío")
	private String documentNumber;
	
	@Valid
	@NotNull(message = "La dirección es requerida")
	@NotBlank(message = "La dirección no puede estar vacía")
	private String address;
	
	@Valid
	@NotNull(message = "El número de teléfono es requerido")
	@NotBlank(message = "El número de teléfono no puede estar vacío")
	private String phone;
	
	@Valid
	@NotNull(message = "El correo electrónico es requerido")
	@NotBlank(message = "El correo electrónico no puede estar vacío")
	@Email(message = "El correo electrónico debe ser válido")
	private String email;
	
	
	@Valid
	@NotNull(message = "La contraseña es requerida")
	@NotBlank(message = "La contraseña no puede estar vacía")
	private String password;
	
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
	
	public int getCountryId() {
		return countryId;
	}
	
	public void setCountryId(int countryId) {
		this.countryId = countryId;
	}
	
	public int getDocumentTypeId() {
		return documentTypeId;
	}
	
	public void setDocumentTypeId(int documentTypeId) {
		this.documentTypeId = documentTypeId;
	}
	
	public String getDocumentNumber() {
		return documentNumber;
	}
	
	public void setDocumentNumber(String documentNumber) {
		this.documentNumber = documentNumber;
	}
	
	public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
}
