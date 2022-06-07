package com.granpalma.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.granpalma.demo.entity.DocumentType;
import com.granpalma.demo.repository.DocumentTypeRepository;

@Service
public class DocumentTypeServiceImpl implements DocumentTypeService {
	
	@Autowired
	private DocumentTypeRepository repository;

	@Override
	public List<DocumentType> getAllDocumentsTypes() {
		return (List<DocumentType>) repository.findAll();
	}

}
