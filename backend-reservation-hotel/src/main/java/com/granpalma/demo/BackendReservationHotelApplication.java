package com.granpalma.demo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication

public class BackendReservationHotelApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendReservationHotelApplication.class, args);
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(16); // Strength set as 16
        String encodedPassword = encoder.encode("UserPassword");
        System.out.println("BCryptPasswordEncoder");
        System.out.println(encodedPassword);
        System.out.println("\n");
	}

}
