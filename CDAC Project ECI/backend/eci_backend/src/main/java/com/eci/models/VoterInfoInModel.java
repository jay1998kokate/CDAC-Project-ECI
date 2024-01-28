package com.eci.models;

import java.util.Date;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import com.eci.entities.AssemblyInfo;
import com.eci.entities.ParliamentInfo;
import com.eci.entities.User;
import com.eci.entities.VoterAddress;
import com.eci.entities.VoterDocument;
import com.eci.entities.VoterInfo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public @Data class VoterInfoInModel {
	private int voterId;
	private String firstName;
	private String middleName;
	private String lastName;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
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
	private MultipartFile uidDoc;
	private MultipartFile panDoc;
	private MultipartFile photo;
	private int uniqueId;

	public static VoterInfo toInfoEntity(VoterInfoInModel voterModel) {
		VoterInfo voterInfo = new VoterInfo();

		BeanUtils.copyProperties(voterModel, voterInfo);

		User user = new User();
		user.setUniqueId(voterModel.getUniqueId());
		voterInfo.setUser(user);

		return voterInfo;
	}

	public static VoterAddress toAddressEntity(VoterInfoInModel voterInfoModel) {
		VoterAddress voterAddress = new VoterAddress();
		BeanUtils.copyProperties(voterInfoModel, voterAddress);

		VoterInfo voterInfo = new VoterInfo();
		AssemblyInfo assemblyInfo = new AssemblyInfo();
		ParliamentInfo parliamentInfo = new ParliamentInfo();
		
		voterInfo.setVoterId(voterInfoModel.getVoterId());
		assemblyInfo.setAssemblyId(voterInfoModel.getAssemblyId());
		parliamentInfo.setParliamentId(voterInfoModel.getParliamentId());
		
		voterAddress.setVoterInfo(voterInfo);
		voterAddress.setAssemblyInfo(assemblyInfo);
		voterAddress.setParliamentInfo(parliamentInfo);
		
		return voterAddress;

	}

	public static VoterDocument toDocumentEntity(VoterInfoInModel voterInfoModel) {
		VoterDocument voterDocument = new VoterDocument();
		BeanUtils.copyProperties(voterInfoModel, voterDocument, new String[] { "uidDoc", "panDoc", "photo" });

		VoterInfo voterInfo = new VoterInfo();
		voterInfo.setVoterId(voterInfoModel.getVoterId());

		voterDocument.setVoterInfo(voterInfo);

		return voterDocument;

	}

}
