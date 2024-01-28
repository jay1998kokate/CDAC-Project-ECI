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
@Table(name = "assemblyresult")
@NoArgsConstructor
public @Data class AssemblyResult {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "assemblyresultid")
	private int assemblyResultId;
	
	@ManyToOne
	@JoinColumn(name="assemblyid")
	private AssemblyInfo assemblyInfo;
	
	@OneToOne
	@JoinColumn(name= "candidateid")
	private Candidate candidate;
	
	@OneToOne
	@JoinColumn(name = "electionid")
	private Election election;	
	
}
