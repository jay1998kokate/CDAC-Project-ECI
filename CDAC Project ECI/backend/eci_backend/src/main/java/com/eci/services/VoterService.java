package com.eci.services;

import com.eci.entities.VoterAddress;
import com.eci.entities.VoterDocument;
import com.eci.entities.VoterInfo;
import com.eci.models.VoterInfoInModel;
import com.eci.models.VoterInfoModel;

public interface VoterService {
	VoterInfo addPersonalInfo(VoterInfoInModel voterInfoModel);

	VoterAddress addAddress(VoterInfoInModel voterInfoModel);

	VoterDocument addDocument(VoterInfoInModel voterInfoModel);

	VoterInfoModel getVoterInfo(int voterId);

	VoterInfo updatePersonalInfo(VoterInfoModel voterInfoModel);
	
	VoterInfoModel updateAddress(VoterInfoModel voterInfoModel);
	
	VoterInfoModel updateDocument(VoterInfoModel voterInfoModel);
}
