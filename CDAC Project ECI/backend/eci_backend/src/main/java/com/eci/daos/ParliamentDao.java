package com.eci.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.ParliamentInfo;
import java.lang.String;

public interface ParliamentDao extends JpaRepository<ParliamentInfo, Integer>{
	ParliamentInfo findByParliamentName(String parliamentname);
	
	void deleteByParliamentId(int parliamentId);
}
