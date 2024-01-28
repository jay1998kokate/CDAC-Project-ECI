package com.eci.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eci.entities.AssemblyResult;
import com.eci.models.AssemblyResultModel;
import com.eci.models.Response;
import com.eci.services.AssemblyResultService;

@CrossOrigin
@RestController
@RequestMapping("/assemblyResult")
public class AssemblyResultController {

	@Autowired
	private AssemblyResultService assemblyResultService;
	
	@PostMapping("")
	public ResponseEntity<?> insertResult(@RequestBody AssemblyResultModel assemblyResultModel) {
		AssemblyResult assemblyResult = assemblyResultService.insertAssemblyResult(assemblyResultModel);
		return Response.success(assemblyResult);
	}
	
	@GetMapping("getWinningCandidateByAssemblyId/{id}")
	public ResponseEntity<?> getWinningCandidateByAssemblyId(@PathVariable("id") int assemblyId) {
		List<AssemblyResultModel> result =new ArrayList();
		if(assemblyId==0) {
			result = assemblyResultService.getAll();
		}
		else 
		{
		 result = assemblyResultService.getWinningCandidateByAssemblyId(assemblyId);
		}
		return Response.success(result);
	}
	
	
}
