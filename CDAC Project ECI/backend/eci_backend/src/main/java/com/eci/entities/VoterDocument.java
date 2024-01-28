package com.eci.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "voterdocument")
@NoArgsConstructor
public @Data class VoterDocument {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "docid")
	private int docId;
	@Column(name = "uid")
	private String uidDoc;
	@Column(name = "pan")
	private String panDoc;
	private String photo;
		
	@OneToOne
	@JoinColumn(name = "voterid")
	private VoterInfo voterInfo;

	public VoterDocument(String uidDoc, String panDoc, String photo) {
		this.uidDoc = uidDoc;
		this.panDoc = panDoc;
		this.photo = photo;
	}

	@Override
	public String toString() {
		return "VoterDocument [docId=" + docId + ", uidDoc=" + uidDoc + ", panDoc=" + panDoc + ", photo=" + photo + "]";
	}
	
	

}
