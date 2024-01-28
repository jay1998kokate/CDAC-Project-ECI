package com.eci.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.ElectionDao;
import com.eci.entities.Election;

public interface ElectionService {
	Election findByElectionId(int electionId);

	List<Election> findByElectionName(String electionName);

	List<Election> findAllElections();

	Election registerElection(Election election);

	Election updateElection(Election election);

	void DeleteElection(int id);

}
