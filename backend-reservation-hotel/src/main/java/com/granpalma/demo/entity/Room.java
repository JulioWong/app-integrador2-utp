package com.granpalma.demo.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedNativeQuery;
import javax.persistence.OneToOne;
import javax.persistence.SqlResultSetMapping;
import javax.persistence.ConstructorResult;
import javax.persistence.ColumnResult;
import javax.persistence.Table;

import com.granpalma.dto.demo.dto.GetAvailableRoomsResponseDB;

@NamedNativeQuery(name = "Room.findRoomAvilable", query = "CALL main.sp_get_available_rooms(:idHotel, :fechaInicio, :fechaFin, :cantidad)", resultSetMapping = "Mapping.GetAvailableRoomsResponseDB")
@SqlResultSetMapping(name = "Mapping.GetAvailableRoomsResponseDB",
   classes = @ConstructorResult(targetClass = GetAvailableRoomsResponseDB.class,
    columns = {
		@ColumnResult(name = "id"),
		@ColumnResult(name = "title"),
		@ColumnResult(name = "description"),
		@ColumnResult(name = "image"),
		@ColumnResult(name = "cost"),
    }
  )
)

@Entity
@Table(name = "habitaciones")
public class Room implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_habitacion")
	private long id;
	
	@OneToOne
    @JoinColumn(name = "id_tipo_cama", referencedColumnName = "id_tipo_cama")
	private BedType bedType;
	
	@OneToOne
    @JoinColumn(name = "id_tipo_habitacion", referencedColumnName = "id_tipo_habitacion")
	private RoomType roomType;
	
	@OneToOne
    @JoinColumn(name = "id_hotel", referencedColumnName = "id_hotel")
	private Hotel hotel;
	
	@Column(name = "descripcion")
	private String description;
	
	@Column(name = "costo")
	private Double cost;
	
	@Column(name = "imagen")
	private String image;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public BedType getBedType() {
		return bedType;
	}

	public void setBedType(BedType bedType) {
		this.bedType = bedType;
	}

	public RoomType getRoomType() {
		return roomType;
	}

	public void setRoomType(RoomType roomType) {
		this.roomType = roomType;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getCost() {
		return cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
}
