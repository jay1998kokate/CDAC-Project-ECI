package com.eci.models;

import java.util.List;

import org.springframework.beans.BeanUtils;

import com.eci.entities.AssemblyInfo;
import com.eci.entities.ParliamentInfo;
import com.eci.entities.VoterAddress;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public @Data class AssemblyInfoModel {
	private int assemblyId;
	private String state;
	private String notation;
	private String district;
	private String assemblyName;
//	private String parliamentName;
	private int parliamentId;
//	private List<VoterAddress> voterInfo;

	public static AssemblyInfoModel fromEntity(AssemblyInfo assemblyInfo) {
		AssemblyInfoModel assemblyInfoModel = new AssemblyInfoModel();
		BeanUtils.copyProperties(assemblyInfo, assemblyInfoModel);
		assemblyInfoModel.setParliamentId(assemblyInfo.getParliamentInfo().getParliamentId());
		return assemblyInfoModel;
	}

	public static AssemblyInfo toEntity(AssemblyInfoModel model) {
		AssemblyInfo assemblyInfo = new AssemblyInfo();
		BeanUtils.copyProperties(model, assemblyInfo);

		ParliamentInfo parliamentInfo = new ParliamentInfo();
		parliamentInfo.setParliamentId(model.getParliamentId());
		assemblyInfo.setParliamentInfo(parliamentInfo);

		return assemblyInfo;
	}

}
