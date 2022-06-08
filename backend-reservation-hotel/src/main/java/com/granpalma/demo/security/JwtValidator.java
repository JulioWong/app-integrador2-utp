package com.granpalma.demo.security;

import org.springframework.stereotype.Component;

import com.granpalma.demo.constants.Constants;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Component
public class JwtValidator {
	public boolean validate(String token) {
		boolean flag = false;
		
		try {
			Claims body = Jwts.parser()
					.setSigningKey(Constants.YOUR_SECRET)
					.parseClaimsJws(token)
					.getBody();
			
			
			
			if (!body.getSubject().isEmpty()) {
				flag = true;
			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return flag;
	}
}
