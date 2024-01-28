package com.eci.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.Election;

public interface ElectionDao extends JpaRepository<Election, Integer>  {
	List<Election> findByElectionName(String electionName);
	Election findByElectionId(int electionId);
	List<Election> findAllByOrderByElectionIdDesc();
	static Election registerElection(Election election) {
		// TODO Auto-generated method stub
		return null;
	}
}
