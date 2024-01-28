package com.eci.models;

import org.springframework.beans.BeanUtils;

import com.eci.entities.Complaint;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public @Data class ComplaintModel {
	private int complaintId;
	private int assemblyId;
	private String complaintDesc;
	private String status;

	public static Complaint toEntity(ComplaintModel complaintModel) {
		Complaint complaint = new Complaint();
		BeanUtils.copyProperties(complaintModel, complaint);
		return complaint;
	}
}
