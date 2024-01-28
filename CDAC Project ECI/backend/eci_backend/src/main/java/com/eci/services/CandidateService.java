package com.eci.services;

import java.util.List;

import com.eci.entities.Candidate;
import com.eci.entities.ParliamentInfo;
import com.eci.models.CandidateModel;

public interface CandidateService {
	Candidate registerCandidate(CandidateModel model);

	Candidate updateCandidate(CandidateModel model);

	List<CandidateModel> getCandidateByAssembly(int assemblyId);

	List<CandidateModel> getCandidateByAssemblyAndElection(int assemblyId, int electionId);

//	List<CandidateModel> getCandidateByParliament(int parliamentId);
//
//	List<CandidateModel> getCandidateByParliamentAndElection(int parliamentId, int electionId);

	List<CandidateModel> getCandidateByPoliticalParty(int politicalPartyId);

	List<CandidateModel> getCandidateByPoliticalPartyAndElection(int partyId, int electionId);

	CandidateModel getCandidateById(int candidateId);
	
	List<CandidateModel> getAllCandidates();
}
