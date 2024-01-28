package com.eci.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.User;
import com.eci.entities.VoterInfo;

public interface VoterInfoDao extends JpaRepository<VoterInfo, Integer> {
	VoterInfo findByVoterId(int voterID);
	VoterInfo findByUser(User user);
}
