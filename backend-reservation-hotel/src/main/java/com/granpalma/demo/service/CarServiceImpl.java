package com.granpalma.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.granpalma.demo.entity.Car;
import com.granpalma.demo.entity.Guest;
import com.granpalma.demo.entity.Room;
import com.granpalma.demo.repository.CarRepository;
import com.granpalma.dto.demo.dto.CarRequest;
import com.granpalma.dto.demo.dto.CarResponse;

@Service
public class CarServiceImpl implements CarService {

	@Autowired
	private CarRepository carRepository;

	@Override
	public List<CarResponse> getCar(int guestId) {
		List<Car> carDB = carRepository.findByGuestId(guestId);
		List<CarResponse> carResponse = carDB.stream().map(i -> {
			CarResponse carResponseItem = new CarResponse();
			carResponseItem.setId(i.getId());
			carResponseItem.setDescription(
					(i.getRoom().getRoomType().getDescription() + " " + i.getRoom().getBedType().getDescription())
							.toUpperCase());
			carResponseItem.setImage(i.getRoom().getImage());
			carResponseItem.setPrice(i.getRoom().getCost());
			carResponseItem.setQuantity(1);
			return carResponseItem;

		}).collect(Collectors.toList());

		return carResponse;
	}

	@Override
	public CarResponse setCar(CarRequest carRequest) {
		Car newCar = new Car();
		newCar.setSince(carRequest.getSince());
		newCar.setUntil(newCar.getUntil());
		newCar.setQuantity(1);

		Guest guest = new Guest();
		guest.setId(carRequest.getGuestId());
		newCar.setGuest(guest);

		Room room = new Room();
		room.setId(carRequest.getRoomId());
		newCar.setRoom(room);

		Car carDB = carRepository.save(newCar);
		CarResponse carResponse = new CarResponse();
		carResponse.setId(carDB.getId());
		return carResponse;
	}

	@Override
	public boolean removeCar(long id) {
		try {
			carRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}

	}
}
