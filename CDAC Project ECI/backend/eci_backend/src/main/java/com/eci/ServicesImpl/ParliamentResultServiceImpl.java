package com.eci.ServicesImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.ParliamentResultDao;
import com.eci.entities.AssemblyInfo;
import com.eci.entities.AssemblyResult;
import com.eci.entities.ParliamentInfo;
import com.eci.entities.ParliamentResult;
import com.eci.models.AssemblyResultModel;
import com.eci.models.ParliamentResultModel;
import com.eci.services.ParliamentResultService;

@Service
@Transactional
public class ParliamentResultServiceImpl implements ParliamentResultService {

	@Autowired
	private ParliamentResultDao parliamentResultDao;
	
	@Override
	public ParliamentResult insertParliamentResult(ParliamentResultModel parliamentResultModel) {
		ParliamentResult parliamentResult = ParliamentResultModel.toEntity(parliamentResultModel);
		return parliamentResultDao.save(parliamentResult);
	}

	@Override
	public List<ParliamentResultModel> getWinningCandidateByParliamentId(int parliamentId) {
		ParliamentInfo parliamentInfo = new ParliamentInfo();
		parliamentInfo.setParliamentId(parliamentId);
		List<ParliamentResult> results = parliamentResultDao.findByParliamentInfoOrderByParliamentResultIdDesc(parliamentInfo);
		List<ParliamentResultModel> resultModel = new ArrayList<>();
		for (ParliamentResult result : results) {
			resultModel.add(ParliamentResultModel.fromEntity(result));
		}
//		result.forEach(System.out::println);
		return resultModel;
	}
	 @Override
	 public List<ParliamentResultModel> getAllParliamentWinningCandidate() {
		
	
			List<ParliamentResult> results = parliamentResultDao.findAll();
			List<ParliamentResultModel> resultModel = new ArrayList<>();
			for (ParliamentResult result : results) {
				resultModel.add(ParliamentResultModel.fromEntity(result));
			}

			return resultModel;
	}
}
