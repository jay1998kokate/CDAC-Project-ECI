package com.eci.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.Complaint;

public interface ComplaintDao extends JpaRepository<Complaint, Integer>{
	List<Complaint> findByAssemblyId(int assemblyId);
	List<Complaint> findByParliamentId(int parliamentId);
	List<Complaint> findByStatus(String status);
}
