package com.granpalma.demo.repository;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.granpalma.demo.entity.DocumentType;


public interface DocumentTypeRepository extends CrudRepository<DocumentType, Long> {

	public List<DocumentType> findAll();

}
