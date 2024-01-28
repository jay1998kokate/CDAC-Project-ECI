package com.eci.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "parliamentResult")
@NoArgsConstructor
public @Data class ParliamentResult {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "parliamentresultid")
	private int parliamentResultId;
	
	@ManyToOne
	@JoinColumn(name="parliamentid")
	private ParliamentInfo parliamentInfo;
	
	@OneToOne
	@JoinColumn(name= "candidateid")
	private Candidate candidate;
	
	@OneToOne
	@JoinColumn(name = "electionid")
	private Election election;	
}
