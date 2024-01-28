package com.eci.ServicesImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.AssemblyInfoDao;
import com.eci.entities.AssemblyInfo;
import com.eci.entities.VoterAddress;
import com.eci.models.AssemblyInfoModel;
import com.eci.services.AssemblyService;

@Service
@Transactional
public class AssemblyServiceImpl implements AssemblyService {

	@Autowired
	private AssemblyInfoDao assemblyInfoDao;

	@Override
	public AssemblyInfoModel searchVoterByAssemblyId(int assemblyId) {
		AssemblyInfo assemblyInfo = this.assemblyInfoDao.findByAssemblyId(assemblyId);
		System.out.println(assemblyInfo);
		for (VoterAddress voterAddress : assemblyInfo.getVoterInfo()) {
			System.out.println(voterAddress.getVoterInfo());
		}
		return null;
	}

	@Override
	public AssemblyInfoModel findAssemblyById(int assemblyId) {
		AssemblyInfo assemblyInfo = assemblyInfoDao.findByAssemblyId(assemblyId);
		AssemblyInfoModel assemblyInfoModel = AssemblyInfoModel.fromEntity(assemblyInfo);
		return assemblyInfoModel;
	}

	@Override
	public AssemblyInfoModel findAssemblyByName(String assemblyName) {
		AssemblyInfo assemblyInfo = assemblyInfoDao.findByAssemblyName(assemblyName);
		AssemblyInfoModel assemblyInfoModel = AssemblyInfoModel.fromEntity(assemblyInfo);
		return assemblyInfoModel;
	}

	@Override
	public List<AssemblyInfoModel> findAllAssemblies() {
		List<AssemblyInfo> assemblyList = assemblyInfoDao.findAll();
		List<AssemblyInfoModel> assemblyInfoModelList = new ArrayList<>();
		for (AssemblyInfo assemblyInfo : assemblyList) {
			assemblyInfoModelList.add(AssemblyInfoModel.fromEntity(assemblyInfo));
		}
		return assemblyInfoModelList;
	}

	@Override
	public AssemblyInfoModel addAssembly(AssemblyInfoModel model) {
		AssemblyInfo assemblyInfo = AssemblyInfoModel.toEntity(model);
		return AssemblyInfoModel.fromEntity(assemblyInfoDao.save(assemblyInfo));
	}

	@Override
	public AssemblyInfoModel updateAssembly(AssemblyInfoModel model) {
		AssemblyInfo assemblyInfo = AssemblyInfoModel.toEntity(model);
		return AssemblyInfoModel.fromEntity(assemblyInfoDao.save(assemblyInfo));
	}

	@Override
	public int deleteAssembly(int assemblyId) {
		assemblyInfoDao.deleteByAssemblyId(assemblyId);
		return assemblyId;
	}

}
