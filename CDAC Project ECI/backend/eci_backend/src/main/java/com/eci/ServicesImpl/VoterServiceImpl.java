package com.eci.ServicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eci.daos.VoterAddressDao;
import com.eci.daos.VoterDocumentDao;
import com.eci.daos.VoterInfoDao;
import com.eci.entities.VoterAddress;
import com.eci.entities.VoterDocument;
import com.eci.entities.VoterInfo;
import com.eci.models.VoterInfoInModel;
import com.eci.models.VoterInfoModel;
import com.eci.services.VoterService;
import com.eci.utils.StorageService;

@Service
@Transactional
public class VoterServiceImpl implements VoterService {

	private VoterInfo voterInfo = new VoterInfo();

	@Autowired
	private VoterInfoDao voterInfoDao;

	@Autowired
	private VoterAddressDao voterAddressDao;

	@Autowired
	private VoterDocumentDao voterDocumentDao;
	
	@Autowired
	private StorageService storageService;

	@Override
	public VoterInfo addPersonalInfo(VoterInfoInModel voterInfoModel) {
		VoterInfo voterInfo = new VoterInfo();
		voterInfo = VoterInfoInModel.toInfoEntity(voterInfoModel);
		System.out.println(voterInfo);
		this.voterInfo = voterInfoDao.save(voterInfo);
		return this.voterInfo;
	}

	@Override
	public VoterAddress addAddress(VoterInfoInModel voterInfoModel) {
		voterInfoModel.setVoterId(this.voterInfo.getVoterId());
		VoterAddress voterAddress = VoterInfoInModel.toAddressEntity(voterInfoModel);
		System.out.println(voterAddress);
		return this.voterAddressDao.save(voterAddress);
	}

	@Override
	public VoterDocument addDocument(VoterInfoInModel voterInfoModel) {
		voterInfoModel.setVoterId(this.voterInfo.getVoterId());
		VoterDocument voterDocument = VoterInfoInModel.toDocumentEntity(voterInfoModel);
		voterDocument.setUidDoc(storageService.store(voterInfoModel.getUidDoc()));
		voterDocument.setPanDoc(storageService.store(voterInfoModel.getPanDoc()));
		voterDocument.setPhoto(storageService.store(voterInfoModel.getPhoto()));
		System.out.println(voterDocument);
		return this.voterDocumentDao.save(voterDocument);
	}

	@Override
	public VoterInfoModel getVoterInfo(int voterId) {
		VoterInfo voterInfo = voterInfoDao.findByVoterId(voterId);
		System.out.println(voterInfo.getVoterAddress());
		return VoterInfoModel.fromEntity(voterInfo);
	}

	@Override
	public VoterInfo updatePersonalInfo(VoterInfoModel voterInfoModel) {
		VoterInfo voterInfo = VoterInfoModel.toInfoEntity(voterInfoModel);
		return this.voterInfoDao.save(voterInfo);
	}

	@Override
	public VoterInfoModel updateAddress(VoterInfoModel voterInfoModel) {
		VoterAddress voterAddress = VoterInfoModel.toAddressEntity(voterInfoModel);
		VoterInfo voterInfo = new VoterInfo();
		voterInfo.setVoterId(voterInfoModel.getVoterId());
		voterAddress.setVoterInfo(voterInfo);
		voterAddress = voterAddressDao.save(voterAddress);
		VoterInfoModel model = VoterInfoModel.fromAddressEntity(voterAddress);
		return model;
	}

	@Override
	public VoterInfoModel updateDocument(VoterInfoModel voterInfoModel) {
		VoterDocument voterDocument = VoterInfoModel.toDocumentEntity(voterInfoModel);
		VoterInfo voterInfo = new VoterInfo();
		voterInfo.setVoterId(voterInfoModel.getVoterId());
		voterDocument.setVoterInfo(voterInfo);
		voterDocument = voterDocumentDao.save(voterDocument);
		VoterInfoModel model = VoterInfoModel.fromDocumentEntity(voterDocument);
		return model;
	}

}
