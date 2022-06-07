package com.granpalma.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.granpalma.demo.entity.Guest;

public interface GuestRepository extends CrudRepository<Guest, Long> {

	public Guest findByEmailAndPassword(String email, String password);
}
