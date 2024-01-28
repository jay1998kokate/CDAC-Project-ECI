package com.eci.models;

public class UserModel {
	private int uniqueId;
	private String email;
	private String password;
	private String phone;

	public UserModel() {
	}

	public UserModel(int uniqueId, String email, String password, String phone) {
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
