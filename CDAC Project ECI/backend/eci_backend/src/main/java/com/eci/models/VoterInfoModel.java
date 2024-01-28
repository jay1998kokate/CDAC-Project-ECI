package com.eci.models;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.eci.entities.AssemblyInfo;
import com.eci.entities.User;
import com.eci.entities.VoterAddress;
import com.eci.entities.VoterDocument;
import com.eci.entities.VoterInfo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public @Data class VoterInfoModel {
	private int voterId;
	private String firstName;
	private String middleName;
	private String lastName;
	private Date dateOfBirth;
	private int age;
	private String gender;
	private String uid;
	private String pan;
	private int addressId;
	private String state;
	private String district;
	private String taluka;
	private String village;
	private String pincode;
	private int assemblyId;
	private int parliamentId;
	private int docId;
	private String uidDoc;
	private String panDoc;
	private String photo;
	private int uniqueId;

	public static VoterInfo toInfoEntity(VoterInfoModel voterModel) {
		VoterInfo voterInfo = new VoterInfo();

		BeanUtils.copyProperties(voterModel, voterInfo);

		User user = new User();
		user.setUniqueId(voterModel.getUniqueId());
		voterInfo.setUser(user);

		return voterInfo;
	}

	public static VoterAddress toAddressEntity(VoterInfoModel voterInfoModel) {
		VoterAddress voterAddress = new VoterAddress();
		BeanUtils.copyProperties(voterInfoModel, voterAddress);

		VoterInfo voterInfo = new VoterInfo();
		AssemblyInfo assemblyInfo = new AssemblyInfo();
		
		voterInfo.setVoterId(voterInfoModel.getVoterId());
		assemblyInfo.setAssemblyId(voterInfoModel.getAssemblyId());
		
		voterAddress.setVoterInfo(voterInfo);
		voterAddress.setAssemblyInfo(assemblyInfo);
		
		return voterAddress;

	}

	public static VoterDocument toDocumentEntity(VoterInfoModel voterInfoModel) {
		VoterDocument voterDocument = new VoterDocument();
		BeanUtils.copyProperties(voterInfoModel, voterDocument);

		VoterInfo voterInfo = new VoterInfo();
		voterInfo.setVoterId(voterInfoModel.getVoterId());

		voterDocument.setVoterInfo(voterInfo);

		return voterDocument;

	}

	public static VoterInfoModel fromEntity(VoterInfo voterInfo) {
		VoterInfoModel voterInfoModel = new VoterInfoModel();
		BeanUtils.copyProperties(voterInfo, voterInfoModel);
		voterInfoModel.setAddressId(voterInfo.getVoterAddress().getAddressId());
		voterInfoModel.setState(voterInfo.getVoterAddress().getState());
		voterInfoModel.setDistrict(voterInfo.getVoterAddress().getDistrict());
		voterInfoModel.setTaluka(voterInfo.getVoterAddress().getTaluka());
		voterInfoModel.setVillage(voterInfo.getVoterAddress().getVillage());
		voterInfoModel.setPincode(voterInfo.getVoterAddress().getPincode());
		voterInfoModel.setAssemblyId(voterInfo.getVoterAddress().getAssemblyInfo().getAssemblyId());
		voterInfoModel.setParliamentId(voterInfo.getVoterAddress().getParliamentInfo().getParliamentId());
		voterInfoModel.setDocId(voterInfo.getVoterDocument().getDocId());
		voterInfoModel.setUidDoc(voterInfo.getVoterDocument().getUidDoc());
		voterInfoModel.setPanDoc(voterInfo.getVoterDocument().getPanDoc());
		voterInfoModel.setPhoto(voterInfo.getVoterDocument().getPhoto());
		voterInfoModel.setUniqueId(voterInfo.getUser().getUniqueId());
	
		return voterInfoModel;
	}
	
	public static VoterInfoModel fromPersonalInfoEntity(VoterInfo voterInfo) {
		VoterInfoModel voterInfoModel = new VoterInfoModel();
		BeanUtils.copyProperties(voterInfo, voterInfoModel);
		return voterInfoModel;
	}
	
	public static VoterInfoModel fromAddressEntity(VoterAddress voterAddress) {
		VoterInfoModel voterInfoModel = new VoterInfoModel();
		BeanUtils.copyProperties(voterAddress, voterInfoModel);
		return voterInfoModel;
	}
	
	public static VoterInfoModel fromDocumentEntity(VoterDocument voterDocument) {
		VoterInfoModel voterInfoModel = new VoterInfoModel();
		BeanUtils.copyProperties(voterDocument, voterInfoModel);
		return voterInfoModel;
	}
}
