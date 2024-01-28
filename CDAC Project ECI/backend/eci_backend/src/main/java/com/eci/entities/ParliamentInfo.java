package com.eci.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="parliamentinfo")
@NoArgsConstructor
@AllArgsConstructor
public @Data class ParliamentInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "parliamentid")
	private int parliamentId;
	@Column(name = "name")
	private String parliamentName;
	private String state;
	private String district;
	
	@OneToMany(mappedBy = "parliamentInfo")
	private List<AssemblyInfo> assemblyList;
}
