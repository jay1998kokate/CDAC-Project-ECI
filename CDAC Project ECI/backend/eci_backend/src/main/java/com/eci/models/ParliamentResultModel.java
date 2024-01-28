package com.eci.models;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.eci.entities.AssemblyInfo;
import com.eci.entities.AssemblyResult;
import com.eci.entities.Candidate;
import com.eci.entities.Election;
import com.eci.entities.ParliamentInfo;
import com.eci.entities.ParliamentResult;
import com.eci.entities.VoterInfo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public @Data class ParliamentResultModel {
	private int parliamentResultId;
	private String state;
	private String district;
	private String parliamentName;
	private int parliamentId;
	private int winningCandidateId;
	private int electionId;
	private String electionName;
	private String State;
	private int year;
	private Date electionDate;
	private Date resultDate;
	private String candidateName;

	public static ParliamentResult toEntity(ParliamentResultModel parliamentResultModel) {
		ParliamentResult parliamentResult = new ParliamentResult();
		BeanUtils.copyProperties(parliamentResultModel, parliamentResult);

		ParliamentInfo parliamentInfo = new ParliamentInfo();
		parliamentInfo.setParliamentId(parliamentResultModel.parliamentId);

		Candidate candidate = new Candidate();
		candidate.setCandidateId(parliamentResultModel.winningCandidateId);

		Election election = new Election();
		election.setElectionId(parliamentResultModel.electionId);

		parliamentResult.setParliamentInfo(parliamentInfo);
		parliamentResult.setElection(election);
		parliamentResult.setCandidate(candidate);

		return parliamentResult;
	}

	public static ParliamentResultModel fromEntity(ParliamentResult result) {
		ParliamentResultModel parliamentResultModel = new ParliamentResultModel();
		BeanUtils.copyProperties(result, parliamentResultModel);

		parliamentResultModel.state = result.getParliamentInfo().getState();
		parliamentResultModel.district = result.getParliamentInfo().getDistrict();
		parliamentResultModel.parliamentName = result.getParliamentInfo().getParliamentName();
		parliamentResultModel.parliamentId = result.getParliamentInfo().getParliamentId();

		parliamentResultModel.electionId = result.getElection().getElectionId();
		parliamentResultModel.electionName = result.getElection().getElectionName();
		parliamentResultModel.year = result.getElection().getYear();
		parliamentResultModel.electionDate = result.getElection().getElectionDate();
		parliamentResultModel.resultDate = result.getElection().getResultDate();

		parliamentResultModel.winningCandidateId = result.getCandidate().getCandidateId();
		parliamentResultModel.candidateName = result.getCandidate().getVoterInfo().getFirstName() + " "
				+ result.getCandidate().getVoterInfo().getMiddleName() + " "
				+ result.getCandidate().getVoterInfo().getLastName();

		return parliamentResultModel;
	}
}
