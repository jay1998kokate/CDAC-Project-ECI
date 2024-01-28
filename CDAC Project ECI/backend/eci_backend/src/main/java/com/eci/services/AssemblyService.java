package com.eci.services;

import java.util.List;

import com.eci.entities.AssemblyInfo;
import com.eci.models.AssemblyInfoModel;

public interface AssemblyService {
	AssemblyInfoModel searchVoterByAssemblyId(int assemblyId);

	AssemblyInfoModel findAssemblyById(int assemblyId);

	AssemblyInfoModel findAssemblyByName(String assemblyName);

	List<AssemblyInfoModel> findAllAssemblies();

	AssemblyInfoModel addAssembly(AssemblyInfoModel model);
	
	AssemblyInfoModel updateAssembly(AssemblyInfoModel model);
	
	int deleteAssembly(int assemblyId);

}
