package com.granpalma.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.granpalma.demo.entity.DocumentType;
import com.granpalma.demo.repository.DocumentTypeRepository;
import com.granpalma.dto.demo.dto.DocumentTypeResponse;

@Service
public class DocumentTypeServiceImpl implements DocumentTypeService {
	
	@Autowired
	private DocumentTypeRepository repository;

	@Override
	public List<DocumentTypeResponse> getAllDocumentsTypes() {
		List<DocumentType> documentTypes  = repository.findAll();
		
		List<DocumentTypeResponse> documentTypeResponseList = documentTypes.stream().map(i -> {
			DocumentTypeResponse documentTypeResponse = new DocumentTypeResponse();
			documentTypeResponse.setId(i.getId());
			documentTypeResponse.setType(i.getDescription());
			return documentTypeResponse;
		}).collect(Collectors.toList());
		
		return documentTypeResponseList;
	}
}
