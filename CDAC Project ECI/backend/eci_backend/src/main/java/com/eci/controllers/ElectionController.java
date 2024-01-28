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

import com.eci.daos.ElectionDao;
import com.eci.entities.Election;
import com.eci.models.Response;
import com.eci.services.ElectionService;

@CrossOrigin
@RestController
@RequestMapping("/election")
public class ElectionController {
	@Autowired
	ElectionService electionService;
	@GetMapping("/electionById/{id}")
	public ResponseEntity<?> findElectionbyId(@PathVariable ("id")int id){
		Election election = electionService.findByElectionId(id);
		return Response.success(election);
		
	   }
	@GetMapping("all")
	public ResponseEntity<?> findAllElections(){
		List<Election> election =electionService.findAllElections();
		
		
		return Response.success(election);
		
	   }
	@GetMapping("/electionByName/{name}")
	public ResponseEntity<?> findElectionbyName(@PathVariable ("name")String name){
		List<Election> election = electionService.findByElectionName(name);
		System.out.println(election);
		
		return Response.success(election);
		
	   }
	@PostMapping("")
	public ResponseEntity<?>registerElection(@RequestBody Election election){
		Election election1=electionService.registerElection(election);
		return Response.success(election1);
	}
	
	@PutMapping("/update")
	public ResponseEntity<?>updateElection(@RequestBody Election election){
		System.out.println(election);
		Election election1=electionService.updateElection(election);
		return Response.success(election1);
	}
	@DeleteMapping("/deleteelection/{id}")
	public ResponseEntity<?>DeleteElection(@PathVariable ("id")int id){
		System.out.println("inside the delete controller");
		electionService.DeleteElection(id);
		return Response.success("record deleted");
	}

}
