package com.granpalma.demo.service;

import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.granpalma.demo.entity.Country;
import com.granpalma.demo.entity.DocumentType;
import com.granpalma.demo.entity.Guest;
import com.granpalma.demo.repository.GuestRepository;
import com.granpalma.dto.demo.dto.GuestLoginRequest;
import com.granpalma.dto.demo.dto.GuestLoginResponse;
import com.granpalma.dto.demo.dto.GuestRequest;
import com.granpalma.dto.demo.dto.GuestResponse;

@Service
public class GuestServiceImpl implements GuestService{

	@Autowired
	private GuestRepository guestRepository;
	
	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	@Override
	public GuestResponse saveGuest(GuestRequest guestRequest) {
		DocumentType documentType = new DocumentType();
		documentType.setId(guestRequest.getDocumentTypeId());
		
		GuestResponse guestResponse = new GuestResponse();
		Optional<Guest> guestByDocumentTypeAndDocumentNumber = guestRepository.findByDocumentTypeAndDocumentNumber(documentType, guestRequest.getDocumentNumber());
		
		if (guestByDocumentTypeAndDocumentNumber.isPresent()) {
			guestResponse.setErrors(new String[]{"El documento ingresado ya se encuentra registrado"});
			
		} else {
			Optional<Guest> guestByEmail = guestRepository.findByEmail(guestRequest.getEmail());
			
			if (guestByEmail.isPresent()) {
				guestResponse.setErrors(new String[]{"El correo electrónico ingresado ya se encuentra registrado"});
				
			} else {
				Country country = new Country();
				country.setId(guestRequest.getCountryId());
				
				Guest guest = new Guest();
				guest.setName(guestRequest.getName());
				guest.setLastName(guestRequest.getLastName());
				guest.setCountry(country);
				guest.setDocumentType(documentType);
				guest.setDocumentNumber(guestRequest.getDocumentNumber());
				guest.setAddress(guestRequest.getAddress());
				guest.setPhone(guestRequest.getPhone());
				guest.setEmail(guestRequest.getEmail());
				
				guest.setPassword(passwordEncoder.encode(guestRequest.getPassword()));
				Guest guestDB = guestRepository.save(guest);
				guestResponse.setId(guestDB.getId());
			}
		}
		return guestResponse;
	}

	@Override
	public GuestLoginResponse login(GuestLoginRequest guestRequest) {
		Optional<Guest> guest2 = guestRepository.findByEmail(guestRequest.getEmail());
			
		GuestLoginResponse guestResponse = new GuestLoginResponse();
		
		if (!guest2.isPresent() || !passwordEncoder.matches(guestRequest.getPassword(), guest2.get().getPassword())) {
			guestResponse.setErrors(new String[]{"El usuario o contraseña son incorrectas"});
				
		} else {
			guestResponse.setId(guest2.get().getId());
			guestResponse.setName(guest2.get().getName());
			guestResponse.setLastName(guest2.get().getLastName());
			guestResponse.setEmail(guest2.get().getEmail());
		}
		
		return guestResponse;
	}
}
