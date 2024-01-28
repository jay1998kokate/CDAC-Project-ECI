package com.eci.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "assemblycandidate")
@NoArgsConstructor
@AllArgsConstructor
public @Data class Candidate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "candidateid")
	private int candidateId;

	@OneToOne
	@JoinColumn(name = "assemblyid")
	private AssemblyInfo assemblyInfo;

	@OneToOne
	@JoinColumn(name = "partyid")
	private PoliticalParty politicalParty;

	@OneToOne
	@JoinColumn(name = "electionid")
	private Election election;

	@Column(name = "criminaldetails")
	private String criminalDetails;
	@Column(name = "incomedetails")
	private double incomeDetails;

	@OneToOne
	@JoinColumn(name = "voterid")
	private VoterInfo voterInfo;
}
