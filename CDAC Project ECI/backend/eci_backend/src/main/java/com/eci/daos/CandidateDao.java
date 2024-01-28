package com.eci.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.AssemblyInfo;
import com.eci.entities.Candidate;
import com.eci.entities.Election;
import com.eci.entities.PoliticalParty;

public interface CandidateDao extends JpaRepository<Candidate, Integer> {
	List<Candidate> findByAssemblyInfo(AssemblyInfo assemblyInfo);

	List<Candidate> findByAssemblyInfoAndElection(AssemblyInfo assemblyInfo, Election election);
	
//	List<Candidate> findByparliamentInfo(ParliamentInfo parliamentInfo);
//	
//	List<Candidate> findByParliamentInfoAndElection(ParliamentInfo parliamentInfo, Election election);

	List<Candidate> findByPoliticalParty(PoliticalParty politicalParty);

	List<Candidate> findByPoliticalPartyAndElection(PoliticalParty party, Election election);
}