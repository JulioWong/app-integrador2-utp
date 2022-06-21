package com.granpalma.dto.demo.dto;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class RoomAvailableRequest {
	
	@Valid
	@NotNull(message = "Fecha de inicio es requerida")
	@NotBlank(message = "Fecha de inicio no puede estar vacío")
	private String since;
	
	@Valid
	@NotNull(message = "Fecha de salida es requerida")
	@NotBlank(message = "Fecha de salida no puede estar vacío")
	private String to;
	
	@Valid
	@NotNull(message = "La cantidad de personas es requerido")
	@NotBlank(message = "La cantidad de personas no puede estar vacío")
	private int quantity;
	
	public String getSince() {
		return since;
	}
	
	public void setSince(String since) {
		this.since = since;
	}
	
	public String getTo() {
		return to;
	}
	
	public void setTo(String to) {
		this.to = to;
	}
	
	public int getQuantity() {
		return quantity;
	}
	
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
}
