package com.eci.models;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.eci.entities.AssemblyInfo;
import com.eci.entities.Candidate;
import com.eci.entities.Election;
import com.eci.entities.ParliamentCandidate;
import com.eci.entities.ParliamentInfo;
import com.eci.entities.PoliticalParty;
import com.eci.entities.VoterInfo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public @Data class ParliamentCandidateModel {
	private int candidateId;
	private int parliamentId;
	private int politicalParyId;
	private int electionId;
	private String criminalDetails;
	private double incomeDetails;
	private int voterId;
	private String firstName;
	private String middleName;
	private String lastName;
	private Date dateOfBirth;
	private int age;
	private String gender;
	private String state;
	private String district;
	private String taluka;
	private String village;
	private String pincode;
	private String partyName;
	private String partySymbol;
	private String electionName;
	private int year;
	private String constituencyName;
	private String photo;

	public static ParliamentCandidate toEntity(ParliamentCandidateModel model) {
		ParliamentCandidate parliamentCandidate = new ParliamentCandidate();
		BeanUtils.copyProperties(model, parliamentCandidate);

		ParliamentInfo parliamentInfo = new ParliamentInfo();
		parliamentInfo.setParliamentId(model.parliamentId);
		parliamentCandidate.setParliamentInfo(parliamentInfo);

		PoliticalParty politicalParty = new PoliticalParty();
		politicalParty.setPoliticalPartyId(model.politicalParyId);
		parliamentCandidate.setPoliticalParty(politicalParty);

		Election election = new Election();
		election.setElectionId(model.electionId);
		parliamentCandidate.setElection(election);

		VoterInfo voterInfo = new VoterInfo();
		voterInfo.setVoterId(model.voterId);
		parliamentCandidate.setVoterInfo(voterInfo);

		return parliamentCandidate;
	}

	public static ParliamentCandidateModel fromEntity(ParliamentCandidate candidate) {
		ParliamentCandidateModel model = new ParliamentCandidateModel();

		BeanUtils.copyProperties(candidate, model);
		model.setParliamentId(candidate.getParliamentInfo().getParliamentId());
		model.setConstituencyName(candidate.getParliamentInfo().getParliamentName());

		model.setPoliticalParyId(candidate.getPoliticalParty().getPoliticalPartyId());
		model.setPartyName(candidate.getPoliticalParty().getPoliticalPartyName());
		model.setPartySymbol(candidate.getPoliticalParty().getPartySymbol());

		model.setElectionId(candidate.getElection().getElectionId());
		model.setElectionName(candidate.getElection().getElectionName());
		model.setYear(candidate.getElection().getYear());

		model.setVoterId(candidate.getVoterInfo().getVoterId());
		model.setFirstName(candidate.getVoterInfo().getFirstName());
		model.setMiddleName(candidate.getVoterInfo().getMiddleName());
		model.setLastName(candidate.getVoterInfo().getLastName());
		model.setDateOfBirth(candidate.getVoterInfo().getDateOfBirth());
		model.setAge(candidate.getVoterInfo().getAge());
		model.setGender(candidate.getVoterInfo().getGender());
		model.setState(candidate.getVoterInfo().getVoterAddress().getState());
		model.setDistrict(candidate.getVoterInfo().getVoterAddress().getDistrict());
		model.setTaluka(candidate.getVoterInfo().getVoterAddress().getTaluka());
		model.setVillage(candidate.getVoterInfo().getVoterAddress().getVillage());
		model.setPincode(candidate.getVoterInfo().getVoterAddress().getPincode());
		model.setPhoto(candidate.getVoterInfo().getVoterDocument().getPhoto());

		return model;
	}
}
