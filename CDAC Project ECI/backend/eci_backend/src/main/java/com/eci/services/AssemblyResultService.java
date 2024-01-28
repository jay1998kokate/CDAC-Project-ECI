package com.eci.services;

import java.util.List;

import com.eci.entities.AssemblyResult;
import com.eci.models.AssemblyResultModel;

public interface AssemblyResultService {
	AssemblyResult insertAssemblyResult(AssemblyResultModel assemblyResultModel);
	List<AssemblyResultModel> getWinningCandidateByAssemblyId(int assemblyId);
	List<AssemblyResultModel> getAll();
}
