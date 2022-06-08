package com.granpalma.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.granpalma.demo.entity.Country;
import com.granpalma.demo.entity.DocumentType;
import com.granpalma.demo.entity.Guest;
import com.granpalma.demo.repository.GuestRepository;
import com.granpalma.demo.security.JwtGenerator;
import com.granpalma.demo.service.GuestServiceImpl;
import com.granpalma.dto.demo.dto.GuestLoginRequest;
import com.granpalma.dto.demo.dto.GuestLoginResponse;
import com.granpalma.dto.demo.dto.GuestRequest;
import com.granpalma.dto.demo.dto.GuestResponse;

@ExtendWith(MockitoExtension.class)
public class GuestServiceImplTest {
	
	private final int ID = 123;
	private final String CORRECT_PASSWORD = "123456";
	private final String WRONG_PASSWORD = "123457";
	private final String TOKEN_JWT = "TOKEN JWT";
	
	@Mock
	private JwtGenerator jwtGenerator;
	
	@Mock
	private GuestRepository guestRepository;

	@InjectMocks
    private GuestServiceImpl guestService;
	
	private Optional<Guest> guestData() {
		Optional<Guest> guestInfo = Optional.of(new Guest());
		guestInfo.get().setId(ID);
		guestInfo.get().setName("Juan");
		guestInfo.get().setLastName("Perez");
		guestInfo.get().setAddress("Av Larco 123");
		guestInfo.get().setCountry(new Country());
		guestInfo.get().setDocumentNumber("46742688");
		guestInfo.get().setDocumentType(new DocumentType());
		guestInfo.get().setEmail("juan.perez@gmail.com");
		guestInfo.get().setPassword("$2a$10$tz3kqwoLkf/M8DzG9Yiz7.FCuKJ1jdB4eWEO2ZA8Rtenr0auH9KSO");
		guestInfo.get().setPhone("954126777");
		return guestInfo;
	}
	
	@Test
	public void saveGuestReturnErrorByDocumentNumber() {
		when(guestRepository.findByDocumentTypeAndDocumentNumber(any(), any())).thenReturn(guestData());
		
		GuestRequest guestRequest = new GuestRequest();
		GuestResponse guestResponse = guestService.saveGuest(guestRequest);

		assertEquals(guestResponse.getErrors()[0], "El documento ingresado ya se encuentra registrado");
	}
	
	@Test
	public void saveGuestReturnErrorByEmail() {
		when(guestRepository.findByDocumentTypeAndDocumentNumber(any(), any())).thenReturn(Optional.empty());
		when(guestRepository.findByEmail(any())).thenReturn(guestData());
		
		GuestRequest guestRequest = new GuestRequest();
		GuestResponse guestResponse = guestService.saveGuest(guestRequest);
		assertEquals(guestResponse.getErrors()[0], "El correo electrónico ingresado ya se encuentra registrado");
	}
	
	@Test
	public void saveGuestReturnSuccess() {
		Guest guestDB = guestData().get();
		when(guestRepository.findByDocumentTypeAndDocumentNumber(any(), any())).thenReturn(Optional.empty());
		when(guestRepository.findByEmail(any())).thenReturn(Optional.empty());	
		when(guestRepository.save(any())).thenReturn(guestDB);
		
		GuestRequest guestRequest = new GuestRequest();
		guestRequest.setPassword(CORRECT_PASSWORD);
		GuestResponse guestResponse = guestService.saveGuest(guestRequest);
		assertEquals(guestResponse.getId(), ID);
	}
	
	
	@Test
	public void loginGuestReturnErrorByEmail() {
		when(guestRepository.findByEmail(any())).thenReturn(Optional.empty());
		
		GuestLoginRequest guestRequest = new GuestLoginRequest();
		GuestLoginResponse guestResponse = guestService.login(guestRequest);
		assertEquals(guestResponse.getErrors()[0], "El usuario o contraseña son incorrectas");
	}
	
	@Test
	public void loginGuestReturnErrorByPassword() {
		when(guestRepository.findByEmail(any())).thenReturn(guestData());
		
		GuestLoginRequest guestRequest = new GuestLoginRequest();
		guestRequest.setPassword(WRONG_PASSWORD);
		GuestLoginResponse guestResponse = guestService.login(guestRequest);
		assertEquals(guestResponse.getErrors()[0], "El usuario o contraseña son incorrectas");
	}
	
	@Test
	public void loginGuestReturnSuccess() {
		
		Optional<Guest> guestInfo = guestData();
		when(guestRepository.findByEmail(any())).thenReturn(guestInfo);
		when(jwtGenerator.generate(any())).thenReturn(TOKEN_JWT);
		
		GuestLoginRequest guestRequest = new GuestLoginRequest();
		guestRequest.setPassword(CORRECT_PASSWORD);
		GuestLoginResponse guestResponse = guestService.login(guestRequest);
		assertEquals(guestResponse.getId(), guestInfo.get().getId());
		assertEquals(guestResponse.getName(), guestInfo.get().getName());
		assertEquals(guestResponse.getLastName(), guestInfo.get().getLastName());
		assertEquals(guestResponse.getEmail(), guestInfo.get().getEmail());
		assertEquals(guestResponse.getToken(), TOKEN_JWT);
		assertEquals(guestResponse.getErrors(), null);
	}
	
}
