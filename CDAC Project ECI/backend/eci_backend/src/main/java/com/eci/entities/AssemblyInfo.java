package com.eci.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "assemblyinfo")
public class AssemblyInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "assemblyid")
	private int assemblyId;
	private String state;
	private String notation;
	private String district;
	@Column(name = "assemblyname")
	private String assemblyName;

	@OneToOne
	@JoinColumn(name = "parliamentid")
	private ParliamentInfo parliamentInfo;

	@OneToMany(mappedBy = "assemblyInfo")
	private List<VoterAddress> voterInfo;

	@OneToMany(mappedBy = "assemblyId")
	private List<Complaint> complaints;

	@OneToMany(mappedBy = "assemblyInfo")
	private List<AssemblyResult> assemblyResults;

	public AssemblyInfo() {
	}

	public AssemblyInfo(int assemblyId, String state, String notation, String district) {
		this.assemblyId = assemblyId;
		this.state = state;
		this.notation = notation;
		this.district = district;
	}

	public int getAssemblyId() {
		return assemblyId;
	}

	public void setAssemblyId(int assemblyId) {
		this.assemblyId = assemblyId;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getNotation() {
		return notation;
	}

	public void setNotation(String notation) {
		this.notation = notation;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getAssemblyName() {
		return assemblyName;
	}

	public void setAssemblyName(String assemblyName) {
		this.assemblyName = assemblyName;
	}

	public ParliamentInfo getParliamentInfo() {
		return parliamentInfo;
	}

	public void setParliamentInfo(ParliamentInfo parliamentInfo) {
		this.parliamentInfo = parliamentInfo;
	}

	public List<VoterAddress> getVoterInfo() {
		return voterInfo;
	}

	public void setVoterInfo(List<VoterAddress> voterInfo) {
		this.voterInfo = voterInfo;
	}

	@Override
	public String toString() {
		return "AssemblyInfo [assemblyId=" + assemblyId + ", state=" + state + ", notation=" + notation + ", district="
				+ district + ", assemblyName=" + assemblyName + ", parliamentInfo=" + parliamentInfo + ", voterInfo="
				+ voterInfo + "]";
	}

}
