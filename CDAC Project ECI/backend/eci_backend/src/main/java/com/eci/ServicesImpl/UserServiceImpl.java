package com.eci.ServicesImpl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eci.daos.UserDao;
import com.eci.daos.VoterInfoDao;
import com.eci.entities.User;
import com.eci.entities.VoterInfo;
import com.eci.models.UserModel;
import com.eci.models.VoterInfoModel;
import com.eci.services.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userdao;
	
	@Autowired
	private VoterInfoDao voterDao;

	@Override
	public User login(String email) {
		return this.userdao.findByEmail(email);
	}

	@Override
	public User authenticate(String email, String password) {
		User user = this.login(email);
		if (user != null && user.getPassword().equals(password))
			return user;
		return null;
	}

	@Override
	public User changePassword(String email, String password) {
		User user = this.login(email);
		if (user != null) {
			user.setPassword(password);
			return this.userdao.save(user);
		}
		return null;
	}

	@Override
	public User registerUser(UserModel userModel) {
		User user = new User(userModel.getEmail(), userModel.getPassword(), userModel.getPhone());
		return this.userdao.save(user);
	}
	
	@Override
	public User updateUser(UserModel userModel) {
		User user = new User(userModel.getUniqueId(), userModel.getEmail(), userModel.getPassword(), userModel.getPhone());
		return this.userdao.save(user);
	}

	@Override
	public VoterInfoModel getProfile(int uniqueId) {
		User user = new User();
		user.setUniqueId(uniqueId);
		VoterInfo voterInfo = voterDao.findByUser(user);
		VoterInfoModel voterInfoModel = VoterInfoModel.fromEntity(voterInfo);
		return voterInfoModel;
	}

}
