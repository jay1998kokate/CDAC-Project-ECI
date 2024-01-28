package com.eci.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "voterinfo")
public class VoterInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "voterid")
	private int voterId;
	@Column(name = "firstname")
	private String firstName;
	@Column(name = "middlename")
	private String middleName;
	@Column(name = "lastname")
	private String lastName;
	@Temporal(TemporalType.DATE)
	@Column(name = "dateofbirth")
	private Date dateOfBirth;
	private int age;
	private String gender;
	private String uid;
	private String pan;
	@OneToOne
	@JoinColumn(name = "uniqueid")
	private User user;
	
	@OneToOne(mappedBy = "voterInfo")
	private VoterAddress voterAddress;
	
	@OneToOne(mappedBy = "voterInfo")
	private VoterDocument voterDocument;

	public VoterInfo() {
	}

	public VoterInfo(String firstName, String middleName, String lastName, Date dateOfBirth, int age, String gender,
			String uid, String pan) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.age = age;
		this.gender = gender;
		this.uid = uid;
		this.pan = pan;
	}

	public int getVoterId() {
		return voterId;
	}

	public void setVoterId(int voterId) {
		this.voterId = voterId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public VoterAddress getVoterAddress() {
		return voterAddress;
	}

	public void setVoterAddress(VoterAddress voterAddress) {
		this.voterAddress = voterAddress;
	}

	public VoterDocument getVoterDocument() {
		return voterDocument;
	}

	public void setVoterDocument(VoterDocument voterDocument) {
		this.voterDocument = voterDocument;
	}

	@Override
	public String toString() {
		return "VoterInfo [voterId=" + voterId + ", firstName=" + firstName + ", middleName=" + middleName
				+ ", lastName=" + lastName + ", dateOfBirth=" + dateOfBirth + ", age=" + age + ", gender=" + gender
				+ ", uid=" + uid + ", pan=" + pan + "]";
	}

}
