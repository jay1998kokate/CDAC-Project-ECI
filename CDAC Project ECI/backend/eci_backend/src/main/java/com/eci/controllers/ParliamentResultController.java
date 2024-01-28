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
import com.eci.entities.ParliamentResult;
import com.eci.models.AssemblyResultModel;
import com.eci.models.ParliamentResultModel;
import com.eci.models.Response;
import com.eci.services.AssemblyResultService;
import com.eci.services.ParliamentResultService;

@CrossOrigin
@RestController
@RequestMapping("/parliamentResult")
public class ParliamentResultController {

	@Autowired
	private ParliamentResultService parliamentResultService;

	@PostMapping("")
	public ResponseEntity<?> insertResult(@RequestBody ParliamentResultModel parliamentResultModel) {
		ParliamentResult parliamentResult = parliamentResultService.insertParliamentResult(parliamentResultModel);
		return Response.success(parliamentResult);
	}

	@GetMapping("getWinningCandidateByParliamentId/{id}")
	public ResponseEntity<?> getWinningCandidateByParliamentId(@PathVariable("id") int parliamentId) {
		List<ParliamentResultModel> result= new ArrayList<ParliamentResultModel>();
		if(parliamentId==0) {
			result = parliamentResultService.getAllParliamentWinningCandidate();
		}
		else {
			result = parliamentResultService.getWinningCandidateByParliamentId(parliamentId);
		}
		return Response.success(result);
	}
}
