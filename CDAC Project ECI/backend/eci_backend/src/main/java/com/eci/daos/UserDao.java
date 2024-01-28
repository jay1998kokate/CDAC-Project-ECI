package com.eci.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {
	User findByEmail(String email);

	User findByUniqueId(int uniqueId);
}
