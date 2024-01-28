package com.eci.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eci.entities.User;
import com.eci.models.Credentials;
import com.eci.models.Response;
import com.eci.models.UserModel;
import com.eci.models.VoterInfoModel;
import com.eci.services.UserService;
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<?> authenticate(@RequestBody Credentials cred) {
		User user = userService.authenticate(cred.getEmail(), cred.getPassword());
		System.out.println(user);
		if (user != null)
			return Response.success(user);
		return Response.success("User not found");
	}

	@PostMapping("/forgotPassword")
	public ResponseEntity<?> forgotPassword(@RequestBody Credentials cred) {
		User user = userService.changePassword(cred.getEmail(), cred.getPassword());
		if (user != null)
			return Response.success(user);
		return Response.success("Enter valid emailId");
	}

	@PostMapping("/registerUser")
	public ResponseEntity<?> registerUser(@RequestBody UserModel userModel) {
		User user = userService.registerUser(userModel);
		if (user != null)
			return Response.success(user);
		return Response.success("Enter valid details");
	}
	
	@PutMapping("/updateUser")
	public ResponseEntity<?> updateUser(@RequestBody UserModel userModel) {
		User user = userService.updateUser(userModel);
		if (user != null)
			return Response.success(user);
		return Response.success("Enter valid details");
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> getProfile(@PathVariable("id") int uniqueId) {
		VoterInfoModel votetrInfoModel = userService.getProfile(uniqueId);
		return Response.success(votetrInfoModel);
	}
}
