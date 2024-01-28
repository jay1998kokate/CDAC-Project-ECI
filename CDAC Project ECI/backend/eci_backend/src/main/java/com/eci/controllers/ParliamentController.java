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

import com.eci.entities.ParliamentInfo;
import com.eci.models.ParliamentInfoModel;
import com.eci.models.Response;
import com.eci.services.ParliamentService;

@CrossOrigin
@RestController()
@RequestMapping("/parliament")
public class ParliamentController {
	@Autowired
	private ParliamentService parliamentService;

	@PostMapping("/add")
	public ResponseEntity<?> addParliamentInfo(@RequestBody ParliamentInfo parliamentInfo) {
		ParliamentInfo parliament = parliamentService.addParliament(parliamentInfo);
		return Response.success(parliament);
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateParliamentInfo(@RequestBody ParliamentInfo parliamentInfo) {
		ParliamentInfo parliament = parliamentService.updateParliament(parliamentInfo);
		return Response.success(parliament);
	}

	@GetMapping("")
	public ResponseEntity<?> getAllParliaments() {
		List<ParliamentInfoModel> parliament = parliamentService.getAllParliment();
		return Response.success(parliament);
	}

	@GetMapping("/getById/{id}")
	public ResponseEntity<?> getParliamentInfoById(@PathVariable("id") int parliamentId) {
		ParliamentInfoModel parliament = parliamentService.getParliamentById(parliamentId);
		return Response.success(parliament);
	}

	@GetMapping("/getByName/{name}")
	public ResponseEntity<?> getParliamentInfoByName(@PathVariable("name") String parliamentName) {
		ParliamentInfoModel parliament = parliamentService.getParliamentByName(parliamentName);
		return Response.success(parliament);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteParliament(@PathVariable("id") int parliamentId) {
		int id = parliamentService.deleteParliament(parliamentId);
		return Response.success(id);
	}
}
