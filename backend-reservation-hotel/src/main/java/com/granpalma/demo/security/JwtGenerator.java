package com.granpalma.demo.security;

import org.springframework.stereotype.Component;

import com.granpalma.demo.constants.Constants;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtGenerator {
	public String generate() {
		Claims claims = Jwts.claims()
				.setSubject("Integrador 2");
		return Jwts.builder()
				.setClaims(claims)
				.signWith(SignatureAlgorithm.HS256, Constants.YOUR_SECRET)
				.compact();
	}
}