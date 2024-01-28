package com.eci.ServicesImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.ElectionDao;
import com.eci.entities.Election;
import com.eci.services.ElectionService;

@Service
@Transactional
public class ElectionServiceImpl implements ElectionService {
	@Autowired
	ElectionDao electionDao;

	@Override
	public Election findByElectionId(int electionId) {

		return electionDao.findByElectionId(electionId);
	}

	@Override
	public List<Election> findByElectionName(String electionName) {
		List<Election> elections = electionDao.findByElectionName(electionName);
		return elections;
	}

	@Override
	public List<Election> findAllElections() {

		return electionDao.findAllByOrderByElectionIdDesc();
	}

	@Override
	public Election registerElection(Election electionModel) {
		System.out.println(electionModel);
		Election election = new Election(electionModel.getElectionName(), electionModel.getState(),
				electionModel.getYear(), electionModel.getElectionDate(), electionModel.getResultDate());
		return electionDao.save(election);
	}

	@Override
	public Election updateElection(Election election) {
		return electionDao.save(election);

	}

	@Override
	public void DeleteElection(int electionId) {
		Election election = this.findByElectionId(electionId);

		electionDao.delete(election);
		return;
	}

}
