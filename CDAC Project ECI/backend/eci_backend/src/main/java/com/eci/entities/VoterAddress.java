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

@Entity
@Table(name = "voteraddress")
public class VoterAddress {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "addressid")
	private int addressId;
	private String state;
	private String district;
	private String taluka;
	private String village;
	private String pincode;

	@ManyToOne
	@JoinColumn(name = "assemblyid")
	private AssemblyInfo assemblyInfo;

	@ManyToOne
	@JoinColumn(name = "parliamentid")
	private ParliamentInfo parliamentInfo;

	@OneToOne
	@JoinColumn(name = "voterid")
	private VoterInfo voterInfo;

	public VoterAddress() {
	}

	public VoterAddress(int addressId, String state, String district, String taluka, String village, String pincode) {
		this.addressId = addressId;
		this.state = state;
		this.district = district;
		this.taluka = taluka;
		this.village = village;
		this.pincode = pincode;
	}

	public int getAddressId() {
		return addressId;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getTaluka() {
		return taluka;
	}

	public void setTaluka(String taluka) {
		this.taluka = taluka;
	}

	public String getVillage() {
		return village;
	}

	public void setVillage(String village) {
		this.village = village;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public AssemblyInfo getAssemblyInfo() {
		return assemblyInfo;
	}

	public void setAssemblyInfo(AssemblyInfo assemblyInfo) {
		this.assemblyInfo = assemblyInfo;
	}

	public ParliamentInfo getParliamentInfo() {
		return parliamentInfo;
	}

	public void setParliamentInfo(ParliamentInfo parliamentInfo) {
		this.parliamentInfo = parliamentInfo;
	}

	public VoterInfo getVoterInfo() {
		return voterInfo;
	}

	public void setVoterInfo(VoterInfo voterInfo) {
		this.voterInfo = voterInfo;
	}

	@Override
	public String toString() {
		return "VoterAddress [addressId=" + addressId + ", state=" + state + ", district=" + district + ", taluka="
				+ taluka + ", village=" + village + ", pincode=" + pincode + "]";
	}
}
