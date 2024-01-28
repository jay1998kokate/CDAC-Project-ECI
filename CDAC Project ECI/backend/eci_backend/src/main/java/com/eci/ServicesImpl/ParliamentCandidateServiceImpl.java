package com.eci.ServicesImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.ParliamentCandidateDao;
import com.eci.entities.Candidate;
import com.eci.entities.Election;
import com.eci.entities.ParliamentCandidate;
import com.eci.entities.ParliamentInfo;
import com.eci.entities.PoliticalParty;
import com.eci.models.CandidateModel;
import com.eci.models.ParliamentCandidateModel;
import com.eci.services.ParliamentCandidateService;
import com.eci.services.ParliamentService;

@Service
@Transactional
public class ParliamentCandidateServiceImpl implements ParliamentCandidateService {
	@Autowired
	private ParliamentCandidateDao parliamentCandidateDao;

	@Override
	public ParliamentCandidate registerCandidate(ParliamentCandidateModel model) {
		ParliamentCandidate candidate = ParliamentCandidateModel.toEntity(model);
		return parliamentCandidateDao.save(candidate);
	}

	@Override
	public ParliamentCandidate updateCandidate(ParliamentCandidateModel model) {
		ParliamentCandidate candidate = ParliamentCandidateModel.toEntity(model);
		return parliamentCandidateDao.save(candidate);
	}

	@Override
	public List<ParliamentCandidateModel> getCandidateByParliament(int parliamentId) {
		ParliamentInfo parliamentInfo = new ParliamentInfo();
		parliamentInfo.setParliamentId(parliamentId);
		List<ParliamentCandidate> candidateList = parliamentCandidateDao.findByparliamentInfo(parliamentInfo);
		List<ParliamentCandidateModel> models = new ArrayList<>();
		for (ParliamentCandidate candidate : candidateList)
			models.add(ParliamentCandidateModel.fromEntity(candidate));
		return models;
	}

	@Override
	public List<ParliamentCandidateModel> getCandidateByParliamentAndElection(int parliamentId, int electionId) {
		ParliamentInfo parliamentInfo = new ParliamentInfo();
		parliamentInfo.setParliamentId(parliamentId);

		Election election = new Election();
		election.setElectionId(electionId);

		List<ParliamentCandidate> candidateList = parliamentCandidateDao.findByParliamentInfoAndElection(parliamentInfo,
				election);
		List<ParliamentCandidateModel> models = new ArrayList<>();
		for (ParliamentCandidate candidate : candidateList)
			models.add(ParliamentCandidateModel.fromEntity(candidate));
		return models;
	}

	@Override
	public List<ParliamentCandidateModel> getCandidateByPoliticalParty(int politicalPartyId) {
		PoliticalParty politicalParty = new PoliticalParty();
		politicalParty.setPoliticalPartyId(politicalPartyId);
		List<ParliamentCandidate> candidateList = parliamentCandidateDao.findByPoliticalParty(politicalParty);
		List<ParliamentCandidateModel> models = new ArrayList<>();
		for (ParliamentCandidate candidate : candidateList)
			models.add(ParliamentCandidateModel.fromEntity(candidate));
		return models;
	}

	@Override
	public List<ParliamentCandidateModel> getCandidateByPoliticalPartyAndElection(int partyId, int electionId) {
		PoliticalParty politicalParty = new PoliticalParty();
		politicalParty.setPoliticalPartyId(partyId);

		Election election = new Election();
		election.setElectionId(electionId);

		List<ParliamentCandidate> candidateList = parliamentCandidateDao.findByPoliticalPartyAndElection(politicalParty,
				election);
		List<ParliamentCandidateModel> models = new ArrayList<>();
		for (ParliamentCandidate candidate : candidateList)
			models.add(ParliamentCandidateModel.fromEntity(candidate));
		return models;
	}

	@Override
	public List<ParliamentCandidateModel> getAllCandidates() {
		List<ParliamentCandidate> candidateList = parliamentCandidateDao.findAll();

		List<ParliamentCandidateModel> models = new ArrayList<>();
		for (ParliamentCandidate candidate : candidateList)
			models.add(ParliamentCandidateModel.fromEntity(candidate));
		return models;
	}

}
