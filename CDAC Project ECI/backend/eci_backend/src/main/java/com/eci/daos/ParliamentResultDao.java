package com.eci.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.ParliamentInfo;
import com.eci.entities.ParliamentResult;

public interface ParliamentResultDao extends JpaRepository<ParliamentResult, Integer> {
	
	List<ParliamentResult> findByParliamentInfoOrderByParliamentResultIdDesc(ParliamentInfo parliamentInfo);

}
