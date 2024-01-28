package com.eci.models;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.eci.entities.AssemblyInfo;
import com.eci.entities.AssemblyResult;
import com.eci.entities.Candidate;
import com.eci.entities.Election;
import com.eci.entities.VoterInfo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public @Data class AssemblyResultModel {
	private int assemblyResultId;
	private int assemblyId;
	private String state;
	private String notation;
	private String district;
	private String assemblyName;
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

	public static AssemblyResult toEntity(AssemblyResultModel assemblyResultModel) {
		AssemblyResult assemblyResult = new AssemblyResult();
		BeanUtils.copyProperties(assemblyResultModel, assemblyResult);

		AssemblyInfo assemblyInfo = new AssemblyInfo();
		assemblyInfo.setAssemblyId(assemblyResultModel.assemblyId);

		Candidate candidate = new Candidate();
		candidate.setCandidateId(assemblyResultModel.winningCandidateId);

		Election election = new Election();
		election.setElectionId(assemblyResultModel.electionId);

		assemblyResult.setAssemblyInfo(assemblyInfo);
		assemblyResult.setElection(election);
		assemblyResult.setCandidate(candidate);

		return assemblyResult;
	}

	public static AssemblyResultModel fromEntity(AssemblyResult result) {
		AssemblyResultModel assemblyResultModel = new AssemblyResultModel();
		BeanUtils.copyProperties(result, assemblyResultModel);

		assemblyResultModel.assemblyId = result.getAssemblyInfo().getAssemblyId();
		assemblyResultModel.state = result.getAssemblyInfo().getState();
		assemblyResultModel.notation = result.getAssemblyInfo().getNotation();
		assemblyResultModel.district = result.getAssemblyInfo().getDistrict();
		assemblyResultModel.assemblyName = result.getAssemblyInfo().getAssemblyName();
		assemblyResultModel.parliamentName = result.getAssemblyInfo().getParliamentInfo().getParliamentName();
		assemblyResultModel.parliamentId = result.getAssemblyInfo().getParliamentInfo().getParliamentId();

		assemblyResultModel.electionId = result.getElection().getElectionId();
		assemblyResultModel.electionName = result.getElection().getElectionName();
		assemblyResultModel.year = result.getElection().getYear();
		assemblyResultModel.electionDate = result.getElection().getElectionDate();
		assemblyResultModel.resultDate = result.getElection().getResultDate();

		assemblyResultModel.winningCandidateId = result.getCandidate().getCandidateId();
		assemblyResultModel.candidateName = result.getCandidate().getVoterInfo().getFirstName() + " "
				+ result.getCandidate().getVoterInfo().getMiddleName() + " "
				+ result.getCandidate().getVoterInfo().getLastName();
		

		return assemblyResultModel;
	}
}
