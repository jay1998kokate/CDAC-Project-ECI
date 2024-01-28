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
import com.eci.entities.ParliamentCandidate;
import com.eci.models.CandidateModel;
import com.eci.models.ParliamentCandidateModel;
import com.eci.models.Response;
import com.eci.services.ParliamentCandidateService;

@CrossOrigin
@RestController
@RequestMapping("/parliamentCandidate")
public class ParliamentCandidateController {
	@Autowired
	private ParliamentCandidateService candidateService;
	
	@GetMapping("")
	public ResponseEntity<?> getAllParliaments() {
		List<ParliamentCandidateModel> candidateList = candidateService.getAllCandidates();
		return Response.success(candidateList);
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerCandidate(@RequestBody ParliamentCandidateModel model) {
		ParliamentCandidate candidate = candidateService.registerCandidate(model);
		return Response.success(candidate);
	}
	
	@PutMapping("/updateCandidate")
	public ResponseEntity<?> updateCandidate(@RequestBody ParliamentCandidateModel model) {
		ParliamentCandidate candidate = candidateService.updateCandidate(model);
		return Response.success(model);
	}
	
	@GetMapping("/getCandidateByPoliticalParty/{id}")
	public ResponseEntity<?> getCandidateByPoliticalParty(@PathVariable("id") int politicalParty) {
		List<ParliamentCandidateModel> candidateList = candidateService.getCandidateByPoliticalParty(politicalParty);
		return Response.success(candidateList);
	}
	
	@GetMapping("/getCandidateByPoliticalPartyAndElection/{partyId}/{electionId}")
	public ResponseEntity<?> getCandidateByPoliticalPartyAndElection(@PathVariable("partyId") int partyId, @PathVariable("electionId") int electionId) {
		List<ParliamentCandidateModel> candidateList = candidateService.getCandidateByPoliticalPartyAndElection(partyId, electionId);
		return Response.success(candidateList);
	}
	
	@GetMapping("/getCandidateByParliament/{id}")
	public ResponseEntity<?> getCandidateByParliament(@PathVariable("id") int parliamentId) {
		List<ParliamentCandidateModel> candidateList = candidateService.getCandidateByParliament(parliamentId);
		return Response.success(candidateList);
	}
	
	@GetMapping("/getCandidateByParliamentAndElection/{parliamentId}/{electionId}")
	public ResponseEntity<?> getCandidateByParliamentAndElection(@PathVariable("parliamentId") int parliamentId, @PathVariable("electionId") int electionId) {
		List<ParliamentCandidateModel> candidateList = candidateService.getCandidateByParliamentAndElection(parliamentId, electionId);
		return Response.success(candidateList);
	}
}
