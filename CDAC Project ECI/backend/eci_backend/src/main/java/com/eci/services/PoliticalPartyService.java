package com.eci.services;

import java.util.List;

import com.eci.entities.PoliticalParty;
import com.eci.models.PoliticalPartyModel;

public interface PoliticalPartyService {
	List<PoliticalParty> findByPoliticalPartyId(int politicalPartyId);

	PoliticalParty registerPoliticalParty(PoliticalParty party);
	
	PoliticalParty updatePoliticalParty(PoliticalParty party);

	List<PoliticalParty> findByPoliticalPartyName(String politicalPartyName);

	List<PoliticalParty> findAllPoliticalParties();

}
