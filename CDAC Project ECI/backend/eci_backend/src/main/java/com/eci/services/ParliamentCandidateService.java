package com.eci.services;

import java.util.List;

import com.eci.entities.Candidate;
import com.eci.entities.ParliamentCandidate;
import com.eci.models.CandidateModel;
import com.eci.models.ParliamentCandidateModel;

public interface ParliamentCandidateService {
	ParliamentCandidate registerCandidate(ParliamentCandidateModel model);

	ParliamentCandidate updateCandidate(ParliamentCandidateModel model);
	
	List<ParliamentCandidateModel> getAllCandidates();

	List<ParliamentCandidateModel> getCandidateByParliament(int parliamentId);

	List<ParliamentCandidateModel> getCandidateByParliamentAndElection(int parliamentId, int electionId);

	List<ParliamentCandidateModel> getCandidateByPoliticalParty(int politicalPartyId);

	List<ParliamentCandidateModel> getCandidateByPoliticalPartyAndElection(int partyId, int electionId);
}
