
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

import com.eci.entities.PoliticalParty;
import com.eci.models.PoliticalPartyModel;
import com.eci.models.Response;
import com.eci.models.VoterInfoModel;
import com.eci.services.PoliticalPartyService;

@CrossOrigin
@RestController
@RequestMapping("/politicalParty")
public class PoliticalPartyController {
	@Autowired
	private PoliticalPartyService partyservice;

	@GetMapping("/{id}")
	public ResponseEntity<?> findPoliticalParty(@PathVariable("id") int id) {
		 List<PoliticalParty> list = partyservice.findByPoliticalPartyId(id);
		System.out.println(list);
		return Response.success(list);
	}

	@PostMapping("")
	public ResponseEntity<?> registerPoliticalParty(@RequestBody PoliticalParty party) {
		PoliticalParty politicalPartyModel = partyservice.registerPoliticalParty(party);
		return Response.success(politicalPartyModel);
	}

	@PutMapping("")
	public ResponseEntity<?> updatePoliticalParty(@RequestBody PoliticalParty party) {
		PoliticalParty politicalPartyModel = partyservice.updatePoliticalParty(party);
		return Response.success(politicalPartyModel);
	}

	@GetMapping("/partyByname/{partyName}")
	public ResponseEntity<?> findPoliticalParty(@PathVariable("partyName") String partyName) {
		List<PoliticalParty> list = partyservice.findByPoliticalPartyName(partyName);
		System.out.println(list);
		return Response.success(list);
	}

	@GetMapping("/parties")
	public ResponseEntity<?> findPoliticalParty() {
		List<PoliticalParty> politicalPartyModel = partyservice.findAllPoliticalParties();
		return Response.success(politicalPartyModel);
	}

}
