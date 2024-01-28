package com.eci.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eci.entities.AssemblyInfo;
import com.eci.models.AssemblyInfoModel;
import com.eci.models.Response;
import com.eci.services.AssemblyService;

@CrossOrigin
@RestController
@RequestMapping("/assemblyInfo")
public class AssemblyController {
	
	@Autowired
	private AssemblyService assemblyService;
	
	@GetMapping("assembly")
	public ResponseEntity<?> findAssemblyById() {
		 List<AssemblyInfoModel> assemblyInfoModelList = assemblyService.findAllAssemblies();
//		System.out.println(assemblyInfoModel);
		return Response.success(assemblyInfoModelList);
	}
	
	@GetMapping("assembly/{id}")
	public ResponseEntity<?> findAssemblyById(@PathVariable("id") int assemblyId) {
		 AssemblyInfoModel assemblyInfoModel = assemblyService.findAssemblyById(assemblyId);
		System.out.println(assemblyInfoModel);
		return Response.success(assemblyInfoModel);
	}
	
	@GetMapping("assemblyName/{name}")
	public ResponseEntity<?> findAssemblyByName(@PathVariable("name") String assemblyName) {
		 AssemblyInfoModel assemblyInfoModel = assemblyService.findAssemblyByName(assemblyName);
		System.out.println(assemblyInfoModel);
		return Response.success(assemblyInfoModel);
	}
	
	@GetMapping("searchVoterByAssemblyId/{id}")
	public ResponseEntity<?> searchVoterByAssemblyId(@PathVariable("id") int assemblyId) {
		assemblyService.searchVoterByAssemblyId(assemblyId);
		return Response.success("Found");
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addAssembly(@RequestBody AssemblyInfoModel model) {
		AssemblyInfoModel assemblyInfo = assemblyService.addAssembly(model);
		return Response.success(assemblyInfo);
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateAssembly(@RequestBody AssemblyInfoModel model) {
		AssemblyInfoModel assemblyInfo = assemblyService.updateAssembly(model);
		return Response.success(assemblyInfo);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteAssembly(@PathVariable("id") int assemblyId) {
		int id = assemblyService.deleteAssembly(assemblyId);
		return Response.success(id);
	}

}
