package com.eci.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "complaint")
@NoArgsConstructor
public @Data class Complaint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "complaintid")
	private int complaintId;
	@Column(name = "assemblyid")
	private int assemblyId;
	@Column(name = "parliamentid")
	private int parliamentId;
	@Column(name = "complaintdescription")
	private String complaintDesc;
	private String status;

	public Complaint(int assemblyId, int parliamentId, String complaintDesc, String status) {
		this.assemblyId = assemblyId;
		this.parliamentId = parliamentId;
		this.complaintDesc = complaintDesc;
		this.status = status;
	}

}
