package com.eci.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name = "election")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Election {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "electionid")
	private int electionId;
	@Column(name = "electionname")
	private String electionName;
	private String State;
	private  int year;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "Date")
	private  Date electionDate;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "resultdate")
	private Date resultDate;
	public Election(String electionName, String state, int year, Date electionDate, Date resultDate) {
		super();
		this.electionName = electionName;
		State = state;
		this.year = year;
		this.electionDate = electionDate;
		this.resultDate = resultDate;
	}

}
