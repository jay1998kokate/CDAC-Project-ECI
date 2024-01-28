package com.eci.controllers;

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

import com.eci.entities.VoterAddress;
import com.eci.entities.VoterDocument;
import com.eci.entities.VoterInfo;
import com.eci.models.Response;
import com.eci.models.VoterInfoInModel;
import com.eci.models.VoterInfoModel;
import com.eci.services.VoterService;

@CrossOrigin
@RestController
@RequestMapping("voter")
public class VoterController {

	@Autowired
	private VoterService voterService;

	@PostMapping("registerVoter/personalInfo")
	public ResponseEntity<?> addPersonalInfo(VoterInfoInModel voterInfoInModel) {
		System.out.println(voterInfoInModel);
		VoterInfoModel model = new VoterInfoModel();
		VoterInfo voterInfo = voterService.addPersonalInfo(voterInfoInModel);
		if (voterInfo != null) {
			VoterAddress voterAddress = voterService.addAddress(voterInfoInModel);
			if (voterAddress != null) {
				voterInfo.setVoterAddress(voterAddress);
				VoterDocument voterDocument = voterService.addDocument(voterInfoInModel);
				if (voterDocument != null) {
					voterInfo.setVoterDocument(voterDocument);
					model = VoterInfoModel.fromEntity(voterInfo);
					return Response.success(model);
				}
			}
		}
		return Response.success("Enter valid info");
	}

	@GetMapping("Search/VoterId/{id}")
	public ResponseEntity<?> findVoter(@PathVariable("id") int id) {
		VoterInfoModel voterInfoModel = voterService.getVoterInfo(id);
		System.out.println(voterInfoModel);
		return Response.success(voterInfoModel);
	}

	@PutMapping("updateVoter/personalInfo/{voterId}")
	public ResponseEntity<?> updatePersonalInfo(@RequestBody VoterInfoModel voterInfoModel,
			@PathVariable("voterId") int voterId) {
		voterInfoModel.setVoterId(voterId);
		VoterInfo voterInfo = voterService.updatePersonalInfo(voterInfoModel);
		return Response.success(voterInfo);
	}

	@PutMapping("updateVoter/addressInfo/{addressId}")
	public ResponseEntity<?> updateAddressInfo(@RequestBody VoterInfoModel voterInfoModel,
			@PathVariable("addressId") int addressId) {
		voterInfoModel.setAddressId(addressId);
		VoterInfoModel model = voterService.updateAddress(voterInfoModel);
		return Response.success(model);
	}

	@PutMapping("updateVoter/documentInfo/{documentId}")
	public ResponseEntity<?> updateDocumentInfo(@RequestBody VoterInfoModel voterInfoModel,
			@PathVariable("documentId") int documentId) {
		voterInfoModel.setDocId(documentId);
		VoterInfoModel model = voterService.updateDocument(voterInfoModel);
		return Response.success(model);
	}
}
