package com.eci.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "uniqueid")
	private int uniqueId;
	private String email;
	private String password;
	private String phone;

	@OneToOne(mappedBy = "user")
	private VoterInfo voterInfo;

	public User() {
	}

	public User(String email, String password, String phone) {
		this.email = email;
		this.password = password;
		this.phone = phone;
	}

	public User(int uniqueId, String email, String password, String phone) {
		this.uniqueId = uniqueId;
		this.email = email;
		this.password = password;
		this.phone = phone;
	}

	public int getUniqueId() {
		return uniqueId;
	}

	public void setUniqueId(int uniqueId) {
		this.uniqueId = uniqueId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "User [uniqueId=" + uniqueId + ", email=" + email + ", password=" + password + ", phone=" + phone + "]";
	}

}
