package com.eci.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.Election;
import com.eci.entities.ParliamentCandidate;
import com.eci.entities.ParliamentInfo;
import com.eci.entities.PoliticalParty;

public interface ParliamentCandidateDao extends JpaRepository<ParliamentCandidate, Integer>{
	List<ParliamentCandidate> findByparliamentInfo(ParliamentInfo parliamentInfo);
		
	List<ParliamentCandidate> findByParliamentInfoAndElection(ParliamentInfo parliamentInfo, Election election);

	List<ParliamentCandidate> findByPoliticalParty(PoliticalParty politicalParty);

	List<ParliamentCandidate> findByPoliticalPartyAndElection(PoliticalParty party, Election election);
}
