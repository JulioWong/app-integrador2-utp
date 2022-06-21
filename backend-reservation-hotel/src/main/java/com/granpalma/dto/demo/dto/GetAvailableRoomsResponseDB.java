package com.granpalma.dto.demo.dto;

import java.io.Serializable;

public class GetAvailableRoomsResponseDB implements Serializable{

	private static final long serialVersionUID = 1L;

	private int id;
	private String title;
	private String image;
	private String description;
	private double cost;
	
	public GetAvailableRoomsResponseDB(int id, String title, String image, String description, double cost) {
		super();
		this.id = id;
		this.title = title;
		this.image = image;
		this.description = description;
		this.cost = cost;
	}

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getImage() {
		return image;
	}
	
	public void setImage(String image) {
		this.image = image;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}
	
}
