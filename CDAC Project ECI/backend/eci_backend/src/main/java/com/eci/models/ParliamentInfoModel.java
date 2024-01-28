package com.eci.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;

import com.eci.entities.AssemblyInfo;
import com.eci.entities.ParliamentInfo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public @Data class ParliamentInfoModel {
	private int parliamentId;
	private String parliamentName;
	private String state;
	private String district;
	private List<AssemblyInfoModel> assemblyInfo;

	public static ParliamentInfo toEntity(ParliamentInfoModel model) {
		ParliamentInfo parliamentInfo = new ParliamentInfo();
		BeanUtils.copyProperties(model, parliamentInfo);
		return parliamentInfo;
	}

	public static ParliamentInfoModel fromEntity(ParliamentInfo parliamentInfo) {
		ParliamentInfoModel model = new ParliamentInfoModel();
		BeanUtils.copyProperties(parliamentInfo, model);
		List<AssemblyInfoModel> list = new ArrayList<>();
		for (AssemblyInfo assemblyInfo : parliamentInfo.getAssemblyList())
			list.add(AssemblyInfoModel.fromEntity(assemblyInfo));
		model.setAssemblyInfo(list);
		return model;
	}
}
