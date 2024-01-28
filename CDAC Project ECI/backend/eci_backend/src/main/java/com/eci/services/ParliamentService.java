package com.eci.services;

import java.util.List;

import com.eci.entities.ParliamentInfo;
import com.eci.models.ParliamentInfoModel;

public interface ParliamentService {
	ParliamentInfo addParliament(ParliamentInfo parliamentInfo);
	
	ParliamentInfo updateParliament(ParliamentInfo parliamentInfo);
	
	ParliamentInfoModel getParliamentById(int parliamentId);
	
	ParliamentInfoModel getParliamentByName(String parliamentName);
	
	List<ParliamentInfoModel> getAllParliment();
	
	int deleteParliament(int parliamentId);
}
