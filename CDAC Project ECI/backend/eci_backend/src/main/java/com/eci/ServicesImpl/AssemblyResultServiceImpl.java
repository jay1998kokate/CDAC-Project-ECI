package com.eci.ServicesImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.AssemblyResultDao;
import com.eci.entities.AssemblyInfo;
import com.eci.entities.AssemblyResult;
import com.eci.models.AssemblyResultModel;
import com.eci.services.AssemblyResultService;

@Service
@Transactional
public class AssemblyResultServiceImpl implements AssemblyResultService {

	@Autowired
	private AssemblyResultDao assemblyResultDao;

	@Override
	public AssemblyResult insertAssemblyResult(AssemblyResultModel assemblyResultModel) {
		AssemblyResult assemblyResult = AssemblyResultModel.toEntity(assemblyResultModel);
		return assemblyResultDao.save(assemblyResult);
	}

	@Override
	public List<AssemblyResultModel> getWinningCandidateByAssemblyId(int assemblyId) {
		AssemblyInfo assemblyInfo = new AssemblyInfo();
		assemblyInfo.setAssemblyId(assemblyId);
		List<AssemblyResult> results = assemblyResultDao.findByAssemblyInfoOrderByAssemblyResultIdDesc(assemblyInfo);
		List<AssemblyResultModel> resultModel = new ArrayList<>();
		for (AssemblyResult result : results) {
			resultModel.add(AssemblyResultModel.fromEntity(result));
		}
//		result.forEach(System.out::println);
		return resultModel;
	}

	@Override
	public List<AssemblyResultModel> getAll() {
		AssemblyInfo assemblyInfo = new AssemblyInfo();
		
		List<AssemblyResult> results = assemblyResultDao.findAll();
		List<AssemblyResultModel> resultModel = new ArrayList<>();
		for (AssemblyResult result : results) {
			resultModel.add(AssemblyResultModel.fromEntity(result));
		}
//	
		return resultModel;
	
	}
}
