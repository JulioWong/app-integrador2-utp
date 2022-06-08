package com.granpalma.demo.service;

import com.granpalma.dto.demo.dto.GuestLoginRequest;
import com.granpalma.dto.demo.dto.GuestLoginResponse;
import com.granpalma.dto.demo.dto.GuestRequest;
import com.granpalma.dto.demo.dto.GuestResponse;

public interface GuestService {

	public GuestResponse saveGuest(GuestRequest guest);
	
	public GuestLoginResponse login(GuestLoginRequest guest);
}
