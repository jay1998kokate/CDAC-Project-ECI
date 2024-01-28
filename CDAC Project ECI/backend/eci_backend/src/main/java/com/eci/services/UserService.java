package com.eci.services;

import com.eci.entities.User;
import com.eci.models.UserModel;
import com.eci.models.VoterInfoModel;

public interface UserService {
	public User login(String email);
	public User authenticate(String email, String password);
	public User changePassword(String email, String password);
	public User registerUser(UserModel user);
	public User updateUser(UserModel user);
	public VoterInfoModel getProfile(int uniqueId);
}
