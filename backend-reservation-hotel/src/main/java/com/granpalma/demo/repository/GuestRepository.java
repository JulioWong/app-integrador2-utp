package com.granpalma.demo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.granpalma.demo.entity.DocumentType;
import com.granpalma.demo.entity.Guest;

public interface GuestRepository extends CrudRepository<Guest, Long> {

	public Optional<Guest> findByDocumentTypeAndDocumentNumber(DocumentType documentType, String documentNumber);
	public Optional<Guest> findByEmail(String email);
}
