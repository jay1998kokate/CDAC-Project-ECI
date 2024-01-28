package com.eci.models;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ElectionModel {
    private int electionId;
	private String electionName;
	private String State;
	private  int year;
	private  Date electionDate;
	private Date resultDate;
}
