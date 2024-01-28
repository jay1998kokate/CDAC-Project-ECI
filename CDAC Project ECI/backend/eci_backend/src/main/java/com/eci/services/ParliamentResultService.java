package com.eci.services;

import java.util.List;

import com.eci.entities.ParliamentResult;
import com.eci.models.ParliamentResultModel;

public interface ParliamentResultService {
	ParliamentResult insertParliamentResult(ParliamentResultModel parliamentResultModel);
	List<ParliamentResultModel> getWinningCandidateByParliamentId(int parliamentId);
	List<ParliamentResultModel> getAllParliamentWinningCandidate();
}
