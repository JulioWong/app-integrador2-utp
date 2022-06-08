package com.granpalma.demo.security;

import org.springframework.stereotype.Component;

import com.granpalma.demo.constants.Constants;
import com.granpalma.demo.entity.Guest;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtGenerator {
	public String generate(Guest guest) {
		Claims claims = Jwts.claims()
				.setSubject(guest.getName() + " " + guest.getLastName());
		claims.put(Constants.GUEST_ID, String.valueOf(guest.getId()));
		
		return Jwts.builder()
				.setClaims(claims)
				.signWith(SignatureAlgorithm.HS256, Constants.YOUR_SECRET)
				.compact();
	}
}