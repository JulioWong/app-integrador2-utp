package com.granpalma.dto.demo.dto;

public class RoomAvailableRequest {

	private String since;
	private String to;
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
