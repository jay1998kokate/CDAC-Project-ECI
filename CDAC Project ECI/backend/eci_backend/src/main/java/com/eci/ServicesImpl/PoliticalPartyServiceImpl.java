package com.eci.ServicesImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.PoliticalPartyDao;
import com.eci.entities.PoliticalParty;
import com.eci.models.PoliticalPartyModel;
import com.eci.services.PoliticalPartyService;

@Service
@Transactional
public class PoliticalPartyServiceImpl implements PoliticalPartyService {
	@Autowired
	PoliticalPartyDao politicalPartyDao;

	@Override
	public List<PoliticalParty> findByPoliticalPartyId(int politicalPartyId) {

		List<PoliticalParty> list = new ArrayList<>();
		PoliticalParty politicalParty = politicalPartyDao.findByPoliticalPartyId(politicalPartyId);
		list.add(politicalParty);
		return list;

	}

	@Override
	public PoliticalParty registerPoliticalParty(PoliticalParty party) {
		return politicalPartyDao.save(party);
	}

	@Override
	public List<PoliticalParty> findByPoliticalPartyName(String politicalPartyName) {

		PoliticalParty politicalParty = politicalPartyDao.findByPoliticalPartyName(politicalPartyName);
		List<PoliticalParty> list = new ArrayList<>();
		list.add(politicalParty);
		return list;
	}

	@Override
	public List<PoliticalParty> findAllPoliticalParties() {

		return politicalPartyDao.findAll();
	}

	@Override
	public PoliticalParty updatePoliticalParty(PoliticalParty party) {
		return politicalPartyDao.save(party);
	}

}
