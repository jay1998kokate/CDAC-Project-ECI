package com.eci.services;

import java.util.List;

import com.eci.entities.Complaint;
import com.eci.models.ComplaintModel;

public interface ComplaintService {
	Complaint registerComplaint(ComplaintModel complaintModel);
	
	Complaint updateComplaint(ComplaintModel complaintModel);
	
	List<Complaint> getAllComplaints();
	
	List<Complaint> getComplaintsByAssemblyId(int assemblyId);
	
	List<Complaint> getComplaintsByParliamentId(int parliamentId);
	
	List<Complaint> getComplaintsByStatus(String status);
}
