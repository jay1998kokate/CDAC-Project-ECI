package com.eci.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.AssemblyInfo;
import com.eci.entities.ParliamentInfo;

public interface AssemblyInfoDao extends JpaRepository<AssemblyInfo, Integer> {
	AssemblyInfo findByAssemblyId(int assemblyId);

	AssemblyInfo findByAssemblyName(String assemblyName);
	
	AssemblyInfo findByParliamentInfo(ParliamentInfo parliamentInfo);
	
	void deleteByAssemblyId(int assemblyId);

}
