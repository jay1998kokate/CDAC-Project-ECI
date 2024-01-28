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

import com.eci.entities.Complaint;
import com.eci.models.ComplaintModel;
import com.eci.models.Response;
import com.eci.services.ComplaintService;

@CrossOrigin
@RestController
@RequestMapping("/complaint")
public class ComplaintController {

	@Autowired
	private ComplaintService complaintService;
	
	@PostMapping("")
	public ResponseEntity<?> registerComplaint(@RequestBody ComplaintModel complaintModel) {
		Complaint complaint = complaintService.registerComplaint(complaintModel);
		return Response.success(complaint);
		
	}
	
	@PutMapping("")
	public ResponseEntity<?> updateComplaint(@RequestBody ComplaintModel complaintModel) {
		Complaint complaint = complaintService.updateComplaint(complaintModel);
		return Response.success(complaint);
	}
	
	@GetMapping("")
	public ResponseEntity<?> getAllComplaints() {
		List<Complaint> complaints = complaintService.getAllComplaints();
		return Response.success(complaints);
	}
	
	@GetMapping("getComplaintsByAssembyId/{id}")
	public ResponseEntity<?> getComplaintsByAssembyId (@PathVariable("id") int assemblyId) {
		List<Complaint> complaints = complaintService.getComplaintsByAssemblyId(assemblyId);
		return Response.success(complaints);
	}
	
	@GetMapping("getComplaintsByParliamentId/{id}")
	public ResponseEntity<?> getComplaintsByParliamentId (@PathVariable("id") int parliamentId) {
		List<Complaint> complaints = complaintService.getComplaintsByParliamentId(parliamentId);
		return Response.success(complaints);
	}
	
	@GetMapping("getComplaintsByStatus/{status}")
	public ResponseEntity<?> getComplaintsByStatus (@PathVariable("status") String status) {
		List<Complaint> complaints = complaintService.getComplaintsByStatus(status);
		return Response.success(complaints);
	}
	
}
