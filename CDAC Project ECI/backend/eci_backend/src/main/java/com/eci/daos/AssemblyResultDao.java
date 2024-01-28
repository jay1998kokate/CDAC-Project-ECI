package com.eci.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eci.entities.AssemblyResult;
import com.eci.entities.AssemblyInfo;

public interface AssemblyResultDao extends JpaRepository<AssemblyResult, Integer> {
	List<AssemblyResult> findByAssemblyInfoOrderByAssemblyResultIdDesc(AssemblyInfo assemblyinfo);
}
