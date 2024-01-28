package com.eci.ServicesImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.ParliamentDao;
import com.eci.entities.ParliamentInfo;
import com.eci.models.ParliamentInfoModel;
import com.eci.services.ParliamentService;

@Service
@Transactional
public class ParliamentServiceImpl implements ParliamentService {
	@Autowired
	private ParliamentDao parliamentDao;

	@Override
	public ParliamentInfo addParliament(ParliamentInfo parliamentInfo) {
		return parliamentDao.save(parliamentInfo);
	}

	@Override
	public ParliamentInfoModel getParliamentById(int parliamentId) {
		ParliamentInfo parliamentInfo = parliamentDao.findById(parliamentId).get();
		ParliamentInfoModel model = ParliamentInfoModel.fromEntity(parliamentInfo);
		return model;
	}

	@Override
	public List<ParliamentInfoModel> getAllParliment() {
		List<ParliamentInfo> list = parliamentDao.findAll();
		List<ParliamentInfoModel> modelList = new ArrayList<>();
		for (ParliamentInfo parliamentInfo : list) {
			modelList.add(ParliamentInfoModel.fromEntity(parliamentInfo));
		}
		return modelList;
	}

	@Override
	public ParliamentInfoModel getParliamentByName(String parliamentName) {
		ParliamentInfo parliamentInfo = parliamentDao.findByParliamentName(parliamentName);
		ParliamentInfoModel model = ParliamentInfoModel.fromEntity(parliamentInfo);
		return model;
	}

	@Override
	public ParliamentInfo updateParliament(ParliamentInfo parliamentInfo) {
		return parliamentDao.save(parliamentInfo);
	}

	@Override
	public int deleteParliament(int parliamentId) {
		parliamentDao.deleteByParliamentId(parliamentId);
		return parliamentId;
	}

}
