package com.eci.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.ComplaintDao;
import com.eci.entities.Complaint;
import com.eci.models.ComplaintModel;
import com.eci.services.ComplaintService;

@Service
@Transactional
public class ComplaintServiceImpl implements ComplaintService {

	@Autowired
	private ComplaintDao complaintDao;

	@Override
	public Complaint registerComplaint(ComplaintModel complaintModel) {
		Complaint complaint = ComplaintModel.toEntity(complaintModel);
		System.out.println(complaint);
		complaint = this.complaintDao.save(complaint);
		return complaint;
	}

	@Override
	public Complaint updateComplaint(ComplaintModel complaintModel) {
		Complaint complaint = ComplaintModel.toEntity(complaintModel);
		System.out.println(complaint);
		complaint = this.complaintDao.save(complaint);
		return complaint;
	}

	@Override
	public List<Complaint> getAllComplaints() {
		return complaintDao.findAll();
	}

	@Override
	public List<Complaint> getComplaintsByAssemblyId(int assemblyId) {
		return complaintDao.findByAssemblyId(assemblyId);
	}
	
	@Override
	public List<Complaint> getComplaintsByParliamentId(int parliamentId) {
		return complaintDao.findByParliamentId(parliamentId);
	}

	@Override
	public List<Complaint> getComplaintsByStatus(String status) {
		return complaintDao.findByStatus(status);
	}
}
