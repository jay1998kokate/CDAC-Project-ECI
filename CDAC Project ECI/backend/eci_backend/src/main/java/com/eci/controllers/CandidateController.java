package com.eci.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eci.entities.Candidate;
import com.eci.models.CandidateModel;
import com.eci.models.Response;
import com.eci.services.CandidateService;

@CrossOrigin
@RestController
@RequestMapping("/assemblyCandidate")
public class CandidateController {
	@Autowired
	private CandidateService candidateService;

	@GetMapping("/{id}")
	public ResponseEntity<?> getCandidateById(@PathVariable("id") int candidateId) {
		CandidateModel candidate = candidateService.getCandidateById(candidateId);
		return Response.success(candidate);
	}
	
	@GetMapping("")
	public ResponseEntity<?> getAllCandidates() {
		List<CandidateModel> candidateList = candidateService.getAllCandidates();
		return Response.success(candidateList);
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerCandidate(@RequestBody CandidateModel model) {
		Candidate candidate = candidateService.registerCandidate(model);
		return Response.success(candidate);
	}
	
	@PutMapping("/updateCandidate")
	public ResponseEntity<?> updateCandidate(@RequestBody CandidateModel model) {
		Candidate candidate = candidateService.updateCandidate(model);
		return Response.success(model);
	}

	@GetMapping("/getCandidateByAssembly/{id}")
	public ResponseEntity<?> getCandidateByAssembly(@PathVariable("id") int assemblyId) {
		List<CandidateModel> candidateList = candidateService.getCandidateByAssembly(assemblyId);
		return Response.success(candidateList);
	}
	
	@GetMapping("/getCandidateByAssemblyAndElection/{assemblyId}/{electionId}")
	public ResponseEntity<?> getCandidateByAssemblyAndElection(@PathVariable("assemblyId") int assemblyId, @PathVariable("electionId") int electionId) {
		List<CandidateModel> candidateList = candidateService.getCandidateByAssemblyAndElection(assemblyId, electionId);
		return Response.success(candidateList);
	}
	
	@GetMapping("/getCandidateByPoliticalParty/{id}")
	public ResponseEntity<?> getCandidateByPoliticalParty(@PathVariable("id") int politicalParty) {
		List<CandidateModel> candidateList = candidateService.getCandidateByPoliticalParty(politicalParty);
		return Response.success(candidateList);
	}
	
	@GetMapping("/getCandidateByPoliticalPartyAndElection/{partyId}/{electionId}")
	public ResponseEntity<?> getCandidateByPoliticalPartyAndElection(@PathVariable("partyId") int partyId, @PathVariable("electionId") int electionId) {
		List<CandidateModel> candidateList = candidateService.getCandidateByPoliticalPartyAndElection(partyId, electionId);
		return Response.success(candidateList);
	}
	
//	@GetMapping("/getCandidateByParliament/{id}")
//	public ResponseEntity<?> getCandidateByParliament(@PathVariable("id") int parliamentId) {
//		List<CandidateModel> candidateList = candidateService.getCandidateByParliament(parliamentId);
//		return Response.success(candidateList);
//	}
//	
//	@GetMapping("/getCandidateByParliamentAndElection/{parliamentId}/{electionId}")
//	public ResponseEntity<?> getCandidateByParliamentAndElection(@PathVariable("parliamentId") int parliamentId, @PathVariable("electionId") int electionId) {
//		List<CandidateModel> candidateList = candidateService.getCandidateByParliamentAndElection(parliamentId, electionId);
//		return Response.success(candidateList);
//	}
}
