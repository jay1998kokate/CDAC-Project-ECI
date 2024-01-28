package com.eci.ServicesImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.CandidateDao;
import com.eci.entities.AssemblyInfo;
import com.eci.entities.Candidate;
import com.eci.entities.Election;
import com.eci.entities.ParliamentInfo;
import com.eci.entities.PoliticalParty;
import com.eci.models.CandidateModel;
import com.eci.services.CandidateService;

@Service
@Transactional
public class CandidateServiceImpl implements CandidateService {
	@Autowired
	private CandidateDao candidateDao;

	@Override
	public Candidate registerCandidate(CandidateModel model) {
		Candidate candidate = CandidateModel.toEntity(model);
		return candidateDao.save(candidate);
	}

	@Override
	public List<CandidateModel> getCandidateByAssembly(int assemblyId) {
		AssemblyInfo assemblyInfo = new AssemblyInfo();
		assemblyInfo.setAssemblyId(assemblyId);
		List<Candidate> candidateList = candidateDao.findByAssemblyInfo(assemblyInfo);
		List<CandidateModel> models = new ArrayList<>();
		for (Candidate candidate : candidateList)
			models.add(CandidateModel.fromEntity(candidate));
		return models;
	}

	@Override
	public List<CandidateModel> getCandidateByAssemblyAndElection(int assemblyId, int electionId) {
		AssemblyInfo assemblyInfo = new AssemblyInfo();
		assemblyInfo.setAssemblyId(assemblyId);

		Election election = new Election();
		election.setElectionId(electionId);

		List<Candidate> candidateList = candidateDao.findByAssemblyInfoAndElection(assemblyInfo, election);
		List<CandidateModel> models = new ArrayList<>();
		for (Candidate candidate : candidateList)
			models.add(CandidateModel.fromEntity(candidate));
		return models;
	}

	@Override
	public List<CandidateModel> getCandidateByPoliticalParty(int politicalPartyId) {
		PoliticalParty politicalParty = new PoliticalParty();
		politicalParty.setPoliticalPartyId(politicalPartyId);
		List<Candidate> candidateList = candidateDao.findByPoliticalParty(politicalParty);
		List<CandidateModel> models = new ArrayList<>();
		for (Candidate candidate : candidateList)
			models.add(CandidateModel.fromEntity(candidate));
		return models;
	}

	@Override
	public List<CandidateModel> getCandidateByPoliticalPartyAndElection(int partyId, int electionId) {
		PoliticalParty politicalParty = new PoliticalParty();
		politicalParty.setPoliticalPartyId(partyId);

		Election election = new Election();
		election.setElectionId(electionId);

		List<Candidate> candidateList = candidateDao.findByPoliticalPartyAndElection(politicalParty, election);
		List<CandidateModel> models = new ArrayList<>();
		for (Candidate candidate : candidateList)
			models.add(CandidateModel.fromEntity(candidate));
		return models;
	}

	@Override
	public Candidate updateCandidate(CandidateModel model) {
		Candidate candidate = CandidateModel.toEntity(model);
		return candidateDao.save(candidate);
	}

	@Override
	public CandidateModel getCandidateById(int candidateId) {
		Candidate candidate = candidateDao.findById(candidateId).get();
			return CandidateModel.fromEntity(candidate); 
	}

	@Override
	public List<CandidateModel> getAllCandidates() {
		List<Candidate> candidateList = candidateDao.findAll();
		List<CandidateModel> models = new ArrayList<>();
		for (Candidate candidate : candidateList) {
			models.add(CandidateModel.fromEntity(candidate));
		}
		return models;
	}

//	@Override
//	public List<CandidateModel> getCandidateByParliament(int parliamentId) {
//		ParliamentInfo parliamentInfo = new ParliamentInfo();
//		parliamentInfo.setParliamentId(parliamentId);
//		List<Candidate> candidateList = candidateDao.findByparliamentInfo(parliamentInfo);
//		List<CandidateModel> models = new ArrayList<>();
//		for (Candidate candidate : candidateList)
//			models.add(CandidateModel.fromEntity(candidate));
//		return models;
//	}
//
//	@Override
//	public List<CandidateModel> getCandidateByParliamentAndElection(int parliamentId, int electionId) {
//		ParliamentInfo parliamentInfo = new ParliamentInfo();
//		parliamentInfo.setParliamentId(parliamentId);
//
//		Election election = new Election();
//		election.setElectionId(electionId);
//
//		List<Candidate> candidateList = candidateDao.findByParliamentInfoAndElection(parliamentInfo, election);
//		List<CandidateModel> models = new ArrayList<>();
//		for (Candidate candidate : candidateList)
//			models.add(CandidateModel.fromEntity(candidate));
//		return models;
//	}
}
